import PropTypes from "prop-types";
import './styles.css';

function Notification ({ title ="Test", amount="10000€", description="money money money"}){
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}


Notification.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
};

export default Notification;