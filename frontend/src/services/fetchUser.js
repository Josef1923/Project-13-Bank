import { setUserData } from "../store/slice"; // Import Redux action

async function FetchUser(dispatch, navigate) {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/"); // Redirige vers la page d'accueil si pas de token
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Envoi du token
      },
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(setUserData(data.body)); // Stocke les données utilisateur dans Redux
    } else {
      console.log("Aucune donnée utilisateur trouvée");
    }
  } catch (err) {
    console.error("Erreur lors de la récupération des données utilisateur", err);
  }
};

export default FetchUser;