function update(newFirstName, newLastName) {

    const handleUpdate = async () => {
        const token = localStorage.getItem("token");

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
                console.log("Modification échouée");
                return null;
            }
        } catch (err) {
            console.error("Erreur de modification", err);
            return null;
        }
    }
    handleUpdate();
}
export default update;