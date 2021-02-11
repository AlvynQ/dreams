import React,{useEffect} from 'react';
import styles from './header.module.css';
import header from './header.js';

const Header = () => {
    useEffect(()=>{ header()})
    return (
        <header>
            <ul className={styles.navbar}>
                <button id="btn_home"><h1>retour</h1></button>
                <li><button id="btn_de">voir</button></li>
                <li><button id="btn_profil">inscription</button></li>
                {/* <li><button id="btn_deco">Déconnexion</button></li> si deja connecté*/}
                <li><button id="btn_co">Connexion</button></li>
            </ul>
        </header>
    )

}

export default Header