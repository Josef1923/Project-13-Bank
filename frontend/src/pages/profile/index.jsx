import Header from "@comp/layout/header";
import Footer from "@comp/layout/footer";
import WelcomeMessage from "@comp/page/dashboard/welcome";
import Transaction from "@comp/page/dashboard/transactions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchUser from "../../services/fetchUser";

function UserDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user); // Récupération de l'utilisateur depuis Redux

  useEffect(() => {
    fetchUser(dispatch); // Récupération des données utilisateur
  }, [dispatch, navigate]); // Exécuter si dispatch ou navigate change

  const txMock = [
    { id: 1, title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
    { id: 2, title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
    { id: 3, title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" },
  ]

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

        {txMock.map((tx) => (
          <Transaction key={tx.id} title={tx.title} amount={tx.amount} description={tx.description} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default UserDashboard;