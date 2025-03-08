import { useSelector } from "react-redux";
import "./styles.css";

function WelcomeMessage() {

  const user = useSelector((state) => state.user.user);

  return (
    <div className="header">
      <h1>Welcome back<br/>{user.firstName} {user.lastName}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default WelcomeMessage;