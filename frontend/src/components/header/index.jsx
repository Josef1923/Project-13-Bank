import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/argentBankLogo.png';
import './styles.css'

function Header() {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
            </Link>
            <div>
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i> Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Header;