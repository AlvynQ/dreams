import React,{useEffect} from 'react';
import styles from './styles.module.css';
import Header from '../Header';

const DetailPage = () => {
    return(
        <div className={styles.menu}> 
             <a className={styles.logo} href='./homePage'></a>
            <Header/>
        </div>
        
    )
}

export default DetailPage