import React,{useEffect} from 'react';
import choix from './choix.module.css';
import Header from '../Header';

const ChoixPage = () => {
    return(
        <div className={choix.menu}> 
             <a className={choix.logo} href='./homePage'></a>
            <Header/>
                    <p className={choix.p}>Destination Albanie</p>
                    <div className={choix.tof}>
                        <div className={choix.minitof}>
                           <figure className={choix.photo}></figure>
                           <figure className={choix.photo}></figure>
                           <figure className={choix.photo}></figure>
                        </div>
                        <div className={choix.text}>
                            <p className={choix.titre}>Albanie : le pays des Aigles</p>
                            <p className={choix.para}>Un excellent mélange de l’occident et de l’orient,
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
                                chacals, des ours, des lynx et des loups lors de votre séjour.
                            </p>
                        </div>
                        
                </div>

                <div className={choix.picto}>
                    <article className={choix.chois}>
                    <figure className={choix.mini}></figure>
                        <p className={choix.ju}>4H10 de vol pour Tirana depuis Paris <br></br> (avec 1 escale ou +)</p>
                        <p className={choix.ju}>Prenez de quoi passer le temps</p>
                    </article>

                    <article className={choix.chois}>
                    <figure className={choix.mini}></figure>
                        <p className={choix.ju}>Monnaie locale</p>
                        <p className={choix.ju}>Le Lek (ALL)</p>
                    </article>

                    <article className={choix.chois}>
                    <figure className={choix.mini}></figure>
                        <p className={choix.ju}>Capitale</p>
                        <p className={choix.ju}>Tirana</p>
                    </article>

                    </div>

                    <section className={choix.topo}>
                        <div className={choix.plop}><p className={choix.ju}>336</p></div>
                        <div className={choix.plop}><p className={choix.ju}>336</p></div>
                        <div className={choix.plop}><p className={choix.ju}>336</p></div>
                        <div className={choix.plop}><p className={choix.ju}>336</p></div>
                    </section>
                    <a className={choix.suite} href='./DetailPage'>Détail par ici</a>
        </div>
        
    )
}

export default ChoixPage