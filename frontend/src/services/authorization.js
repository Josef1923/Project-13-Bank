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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                const token = data.body.token;
                dispatch(setToken(token)); // Stock le token dans Redux
                // Récupération des données utilisateur après connexion
                await fetchUser(dispatch, token);
                navigate("/profile"); // Redirection vers le profil
            } else {
                alert("Connexion échouée");
            }
        } catch (err) {
            alert("Erreur de connexion" + err);
        }
    };

    return { email, password, setEmail, setPassword, handleSubmit };
}

export default Authorization;