import Header from "@comp/layout/header";
import Footer from "@comp/layout/footer";
import WelcomeMessage from "@comp/page/dashboard/welcome";
import Notification from "@comp/page/dashboard/notification";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FetchUser from "../../services/fetchUser";

function UserDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Récupération de l'utilisateur depuis Redux

  useEffect(() => {
    FetchUser(dispatch, navigate); // Récupération des données utilisateur
  }, [dispatch, navigate]); // Exécuter si dispatch ou navigate change

  return (
    <>
      <Header />
      <main className="main bg-dark">
        {/* Vérifier si les données sont disponibles pour WelcomeMessage */}
        {user.firstName && user.lastName ? (
          <WelcomeMessage firstName={user.firstName} lastName={user.lastName} />
        ) : (
          <p>Chargement des données...</p> // Message de chargement si les données ne sont pas disponibles
        )}
        <h2 className="sr-only">Accounts</h2>

        {/* Boucle pour afficher les notifications */}
        <Notification />
        <Notification />
        <Notification />
      </main>
      <Footer />
    </>
  );
}

export default UserDashboard;