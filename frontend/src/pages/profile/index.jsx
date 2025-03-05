import Header from "@comp/layout/header";
import Footer from "@comp/layout/footer";
import WelcomeMessage from "@comp/page/userDashboard/welcome";
import Notification from "@comp/page/userDashboard/notification";
import { useEffect, useState } from "react";
import fetchUser from "../../services/fetchUser";

function UserDashboard() {
  const [userData, setUserData] = useState({});

  //utilisation de useEffect pour récupérer les données utilisateur
  useEffect(() => {
    fetchUser(setUserData);//appel de fetchUser
  }
  , []); //Tableau de dépendances qui éxécute le useEffect une seule fois au chargement

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

       {/*Boucle pour afficher les notifications*/}
        <Notification />
        <Notification />
        <Notification />
      </main>
      <Footer />
    </>
  );
}

export default UserDashboard;