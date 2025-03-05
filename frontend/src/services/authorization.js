import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Authorization() {

    // état pour l'email et le mot de passe
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); //hook de navigation pour rediriger après la connexion
    //Fonction pour envoyer les id 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //requête pour se connecter
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                //on indique que le contenu est en json
                headers: {
                    "Content-Type": "application/json",
                },
                //conversion des données à envoyé en json
                body: JSON.stringify({ email, password }), //objet avec les données à envoyer
            });

            const data = await response.json();
            if (response.ok) {
                console.log("gg well play connexion ok:", data);
                //on stock le token dans le local storage (setItme enregistre la donnée)
                localStorage.setItem("token", data.body.token);
                //puis on navigue vers la page user
                navigate("/profile");
            } else {
                console.log("connexion failed");
            }
        } catch (err) {
            console.error("connexion failed", err);
        }
    }
    return { email, password, setEmail, setPassword, handleSubmit };
}

export default Authorization;