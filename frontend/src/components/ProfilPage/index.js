import React, { useEffect } from 'react';
import styles from "./profil.module.css";
import Header from '../Header';
import fetchprof from "./profile";

const ProfilPage = () => {
useEffect(()=>{fetchprof();})
    return(
        <div> 
            <Header/>
                <div className={styles.container}>
                     <p className={styles.titre}> Pseudo </p>
                         <span id="username"></span>
                             <p className={styles.titre}> Email </p>
                                 <span id="email"></span>
                </div>
       

            </div>
    )
}

export default ProfilPage