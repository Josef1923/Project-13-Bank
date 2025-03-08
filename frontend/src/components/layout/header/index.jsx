import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import argentBankLogo from '@assets/argentBankLogo.png';
import FetchUser from '../../../services/fetchUser';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import  { logout } from '../../../store/slice';

function Header() {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    //UseEffect qui s'execute une seule fois au chargement de la page
    useEffect(() => {       
        if (token) {
            FetchUser(dispatch); // On récupère TOUT userData
        }
    }, [token, dispatch]); // Exécuter si token ou dispatch (bonne pratique)

    function signout() {
        dispatch(logout());
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
            </Link>
            <div>
                {token ? (
                    <>
                        <Link className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i> {userData.firstName}
                        </Link>
                        <Link className="main-nav-item" to="/" onClick={signout}>
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