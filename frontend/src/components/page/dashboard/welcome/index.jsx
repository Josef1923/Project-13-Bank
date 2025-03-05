import PropTypes from "prop-types";
import "./styles.css";

function WelcomeMessage({ userName }) {

  return (
    <div className="header">
      <h1>Welcome back<br/>{userName}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

WelcomeMessage.propTypes = {
  userName: PropTypes.string
};
export default WelcomeMessage;