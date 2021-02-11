import React,{useEffect} from 'react';
import styles from './styles.module.css';
import Header from '../Header';

const DetailPage = () => {
    return(
        
        <div className={styles.menu}> 
             <a className={styles.logo} href='./homePage'></a>
            <Header/>
            <h1 className={styles.titre}>ALBANIE</h1>
            <div className={styles.picture}></div>
            <div className={styles.minipic}>
                <figure className ={styles.miniatures}></figure>
                <figure className ={styles.miniatures}></figure>
                <figure className ={styles.miniatures}></figure>
            </div>
            <p>L'Albanie située sur la péninsule balkanique,
                 est réputée pour ses stations balnéaires, 
                 sa nature sauvage, ses richesses naturelles et culturelles
                  et ses sites archéologiques extrêmement bien conservés. </p>
        </div>
        
    )
}

export default DetailPage