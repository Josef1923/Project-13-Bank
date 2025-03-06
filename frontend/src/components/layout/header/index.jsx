import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import argentBankLogo from '@assets/argentBankLogo.png';
import FetchUser from '../../../services/fetchUser';
import './styles.css';

function Header() {

    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState('');

    //UseEffect qui s'execute une seule fois au chargement de la page
    useEffect(() => {
        const token = localStorage.getItem('token');        
        if (token) {
            setIsLogged(true);
            FetchUser(setUserData); // On récupère TOUT userData
        }
    }, []);

    function logout() {
        localStorage.removeItem('token');
        setIsLogged(false);
        setUserData(''); 
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
            </Link>
            <div>
                {isLogged ? (
                    <>
                        <Link className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i> {userData.firstName}
                        </Link>
                        <Link className="main-nav-item" to="/" onClick={logout}>
                            <i className="fa fa-sign-out"></i> Sign Out
                        </Link>
                    </>
                ) : (
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i> Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;