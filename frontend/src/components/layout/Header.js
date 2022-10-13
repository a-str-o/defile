import React, { Fragment,useState,useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'
import './Header.css'
import '../../App.css'
import Logo from './Logo.svg'
import { HiOutlineShoppingCart } from "react-icons/hi";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const [width] = useWindowSize();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <Fragment>
            <div >
            <center className='bar-container'>
                <h6 className='bar-text'>Louer un dressing illimité dès 390 dh</h6>
            </center>
                </div>
            <nav className="navbar row">
                
                <div className="col-xs-6 ">
                    <div className="navbar-brand">
                        <Link to={`/`} >
                            <img alt="logo"  src={Logo} className="logo"/>
                        </Link>
                    </div>
                </div>
                

                <div className="left-connect col-xs-6">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <HiOutlineShoppingCart size={25} className='icon-bar'/>
                        <span className="ml-1 cart" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (
                        <div className="ml-4 dropdown d-inline ">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4"
                             type="button" id="dropDownMenuButton"
                              data-toggle="dropdown" 
                              aria-haspopup="true" aria-expanded="false">

                                <span className='icon-bar'>{user && user.name}</span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>


                        </div>

                    ) : !loading && <Link to="/login" ><button className="offer-button button--white" >SE CONNECTER</button>  </Link>}


                </div>
                
            </nav>
{width > 900 ?
    <nav className="header-nav hidden-sm hidden-xs">
            <ul className="js-menu navigation navigation-main u-vertical-align-inline-block u-bg-white">
                <li className="t-text menu-item">
                            <a className="u-black" href="/get-started">Les formules</a>
                        </li>
                    <li className="t-text menu-item">
                                <span className="t-text expandable">Box  de vêtements</span>
                        {/* <ul className="submenu">
                            <li className="t-text menu-item">
                                <a href="/Shopp/Nouveautes">Nouveautés</a>
                            </li>

                            <li className="t-text menu-item">
                                <span className="t-text expandable">Catalogue Par Catégorie</span>
                            <ul className="submenu">
                            <li className="t-text menu-item">
                                <a href="/Shopp/robes/">Robes</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/abonnement-premium/vetements/tops/">Tops &amp; Pulls</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/abonnement-premium/vetements/bas/">Bas</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/menu/robes/combinaison/">Combinaisons</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/menu/vetements/veste-et-manteau/">Vestes et manteaux</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/abonnement/sacs/">Accessoires</a>
                            </li>

                            </ul>
                            </li>

                            <li className="t-text menu-item">
                                <span className="t-text expandable">Catalogue Par Style</span>
                            <ul className="submenu">
                            <li className="t-text menu-item">
                                <a href="/trash/En-week-end/">En week-end</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/trash/Au-bureau">Au bureau</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/trash/En-soiree">En soirée</a>
                            </li>

                            <li className="t-text menu-item">
                                <a href="/trash/En-vacances">En vacances</a>
                            </li>

                                        </ul>
                            </li>


                        </ul> */}
                    </li>

                    <li className="t-text menu-item">
                        <span className="t-text expandable">Location 4 jours</span>
                        <ul className="submenu">
                            <li className="t-text menu-item">
                                <span className="t-text expandable">Catalogues par occasions</span>
                                <ul className="submenu">
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/mariage/">Mariage</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/Soirée">Soirée</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/Au-ski">Au ski</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/Grossesse">Grossesse</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="t-text menu-item">
                                <span className="t-text expandable">Robes</span>
                                <ul className="submenu">
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/Robes-courtes-ou-midi/">Robe  courtes ou midi</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/robes-longues/">Robes longues</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="t-text menu-item">
                                <a href="/Shopp/CAFTANS-Gandouras/">CAFTANS / Gandouras</a>
                            </li>
                            <li className="t-text menu-item">
                                <span className="t-text expandable">ACCESSOIRES</span>
                                <ul className="submenu">
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/sac-a-mains/">Sacs à main</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/pochette-clutch/">Pochette / clutch</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/colliers/">Colliers</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/boucles-d-oreilles/">Boucles d'oreilles</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/bracelets-manchettes/">Bracelets &amp; manchettes</a>
                                    </li>
                                    <li className="t-text menu-item">
                                        <a href="/Shopp/autres/">Autres</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="t-text menu-item">
                        <a href="/cms/concept/">Comment ça marche</a>
                    </li>
                    <li className="t-text menu-item">
                        <a href="/Showroom/">Showroom</a>
                    </li>
            </ul>  
        </nav>
        :null}
        </Fragment>
    )
}

export default Header
