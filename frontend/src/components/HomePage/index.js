import React,{useEffect} from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import fetchhom from './homePage';



const HomePage = () => {
    useEffect(()=>{ fetchhom ()})
    return(
        <div className={styles.top}> 
                    <a className={styles.logo} href='./homePage'></a>
                    <p className={styles.p}>Venez découvrir de somptueux paysage et découvrir des endroits insolites</p>
                    <a className={styles.a}href='./ChoixPage' >c'est par ici</a>
        </div>
    )
}

export default HomePage