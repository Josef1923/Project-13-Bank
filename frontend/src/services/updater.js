async function update(newFirstName, newLastName, token) {

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ firstName: newFirstName, lastName: newLastName }),
        });

        const data = await response.json(); // On récupère les données de l'API en JSON

        if (response.ok) {
            return data.body; //retourne les données de l'utilisateur
        } else {
            alert("Modification échouée");
            return null;
        }
    } catch (err) {
        alert("Erreur de modification", err);
        return null;
    }
}

export default update;