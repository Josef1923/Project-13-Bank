import PropTypes from "prop-types";
import "./styles.css";

function WelcomeMessage({ firstName, lastName }) {

  return (
    <div className="header">
      <h1>Welcome back<br/>{firstName} {lastName}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

WelcomeMessage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default WelcomeMessage;