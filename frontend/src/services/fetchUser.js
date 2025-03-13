import { setUserData } from "../store/slice"; // Import Redux action

async function fetchUser(dispatch, token) {

  if (!token) {
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
      alert("Aucune donnée utilisateur trouvée");
    }
  } catch (err) {
    alert("Erreur lors de la récupération des données utilisateur" + err);
  }
};

export default fetchUser;