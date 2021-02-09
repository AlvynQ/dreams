import React,{useEffect} from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import fetchhom from './homePage';



const HomePage = () => {
    useEffect(()=>{ fetchhom ()})
    return(
        <div > 
            <Header/>
                    <p className={styles.p}>Hello</p>
        </div>
    )
}

export default HomePage