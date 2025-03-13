import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/slice";
import { useDispatch } from "react-redux";
import fetchUser from "../services/fetchUser";

function Authorization() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("Connexion réussie :", data);

            if (response.ok) {
                const token = data.body.token;
                dispatch(setToken(token)); // Stock le token dans Redux
                // Récupération des données utilisateur après connexion
                await fetchUser(dispatch, token);
                navigate("/profile"); // Redirection vers le profil
            } else {
                console.log("Connexion échouée");
            }
        } catch (err) {
            console.error("Erreur de connexion", err);
        }
    };

    return { email, password, setEmail, setPassword, handleSubmit };
}

export default Authorization;