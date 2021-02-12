import React,{useEffect} from 'react';
import details from './details.module.css';
import Header from '../Header';

const DetailPage = () => {
    return(
        
        <div className={details.menu}> 
             <a className={details.logo} href='./homePage'></a>
            <Header/>
            <h1 className={details.titre}>ALBANIE</h1>
            <div className={details.picture}></div>
            <div className={details.minipic}>
                <figure className ={details.miniatures}></figure>
                <figure className ={details.miniatures}></figure>
                <figure className ={details.miniatures}></figure>
            </div>
            <p className={details.jbl}>L'Albanie située sur la péninsule balkanique,
                 est réputée pour ses stations balnéaires, 
                 sa nature sauvage, ses richesses naturelles et culturelles
                  et ses sites archéologiques extrêmement bien conservés. </p>
                  <section className={details.desc}>
                      <article className={details.art}><p className={details.jbl}>vhslbnvSB</p></article>
                      <article className={details.art}><p className={details.jbl}>hjvqsbkjs</p></article>
                  </section>
        </div>
        
    )
}

export default DetailPage