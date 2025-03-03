import { useState } from "react";
import "./styles.css";

function SignIn() {

  //UseState pour les id
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Fonction pour envoyer les id 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      //fetch URL serveur, le port 3001 est celui du serveur (server.js)
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        //on indique que le contenu est en json
        headers: {
          "Content-Type": "application/json",
        },  
        //conversion des données à envoyé en json
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("gg well play connexion ok:", data);
      } else {
        console.log("connexion failed");
      }
    } catch (err) {
      console.error("connexion failed", err);
    }
  };

  return (
    <main className="main2 bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" aria-hidden="true"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            {/*
            L'API attend un email mais je laisse Username pour correspondre au design
            mise à jour de l'email apres chaque frappa
            */}
            <input type="email" id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;