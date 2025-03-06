//fontion asynchrone qui permet de récupérer les données avec setuserData et navigate pour la redirection
async function FetchUser(setUserData, navigate) {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // On envoie le token
      },
    });

    const data = await response.json();
    if (response.ok) {
      setUserData(data.body);
    } else {
      console.log("Aucune donnée utilisateur trouvée");
    }
  } catch (err) {
    console.error("Erreur lors de la récupération des données utilisateur", err);
  }
};

export default FetchUser;