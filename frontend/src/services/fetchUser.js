import { setUserData } from "../store/slice"; // Import Redux action

async function fetchUser(dispatch, token) {

  if (!token) {
    console.log("Aucun token trouvé");
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/profile`, {
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
    console.log("Erreur lors de la récupération des données utilisateur" + err);
  }
};

export default fetchUser;