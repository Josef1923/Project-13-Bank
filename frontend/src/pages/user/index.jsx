import Header from "@comp/layout/header";
import Footer from "@comp/layout/footer";
import WelcomeMessage from "@comp/page/userDashboard/welcome";
import Notification from "@comp/page/userDashboard/notification";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      //On récup le token stocké dans le local storage
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return
      }

      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST", //On utilise la méthode POST pour envoyer le token
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,//On envoie le token 
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUserData(data.body);
        } else {
          console.log("Pas de données utilisateur");
        }
      } catch (err) {
        console.error("Erreur de récupération des données utilisateur", err);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <>
      <Header />
      <main className="main bg-dark">
        {/* Vérifier si les données sont disponibles pour WelcomeMessage */}
        {userData.firstName && userData.lastName ? (
          <WelcomeMessage userName={`${userData.firstName} ${userData.lastName}`} />
        ) : (
          <p>Chargement des données...</p> // Message de chargement si les données ne sont pas disponibles
        )}
        <h2 className="sr-only">Accounts</h2>
        <Notification />
        <Notification />
        <Notification />
      </main>
      <Footer />
    </>
  );
}

export default UserDashboard;