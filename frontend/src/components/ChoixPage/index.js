import React,{useEffect} from 'react';
import styles from './styles.module.css';
import Header from '../Header';

const ChoixPage = () => {
    return(
        <div className={styles.menu}> 
             <a className={styles.logo} href='./homePage'></a>
            <Header/>
                    <p className={styles.p}>Destination Albanie</p>
                        <a href='./ChoixPage'> </a>
                    <div className={styles.tof}>
                        <div className={styles.minitof}>
                           <figure></figure>
                           <figure></figure>
                           <figure></figure>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.titre}>Albanie : le pays des Aigles</p>
                            <p className={styles.para}>Un excellent mélange de l’occident et de l’orient,
                                 l’Albanie est un pays qui se trouve entre le Monténégro et la Grèce.
                                  Dotée de plusieurs richesses, l’Albanie reste un lieu à ne pas rater pour les adeptes de randonnées. 
                                  En effet, la présence de plusieurs grands espaces naturels transforme ce pays en un
                                   endroit approprié pour découvrir les montagnes et les superbes lacs. Recouvrant la majeure
                                    partie de l’Albanie, ces montagnes sont faites pour les randonneurs, surtout avec le mont
                                     Korab et ses 2752 mètres d’altitude. Étant donné que l’Albanie se définit comme l’alliance 
                                     de deux mondes différents, cela rend ce pays comme un carrefour de civilisations. Ottomanes,
                                      Grecques, Vénitiennes, Romaines et Byzantines sont des cultures que vous pouvez retrouver en Albanie.
                                       Frontière naturelle entre deux pays, cet endroit renferme une grande variété de richesses archéologiques
                                        formées durant la résistance face aux Turcs. Il faut souligner que vous avez la possibilité de voir des
                                         chacals, des ours, des lynx et des loups lors de votre séjour.</p>

                        </div>
                    </div>
        </div>
        
    )
}

export default ChoixPage