import React,{useEffect} from 'react';
import styles from './inscription.module.css';
import fetchinsc from './inscription';
import fetchannul from '../Annuler/annuler';
import 'bootstrap/dist/css/bootstrap.min.css';
// import form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header';

const Inscription = () => {                                                                                                             
useEffect(()=>{fetchinsc(); fetchannul();})
    return(
      <div>
        <Header/>
            <div className={styles.container}>

                <div className={styles.image}> 
                  <form className={styles.form}> 
                  <Form.Label>Entrée votre Nom</Form.Label>
                  <Form.Control type="text" placeholder="Nom" />
                  <Form.Label>Entrée votre prénom</Form.Label>
                  <Form.Control type="text" placeholder="Prénom" />
                     <Form.Group controlId="formBasicEmail">
                      <Form.Label>Adresse mail</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Label>Comfirmer votre Adresse mail</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                          <Form.Text className="text-muted">
                            votre adresse email et obligatoire.
                          </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>mot de passe</Form.Label>
                          <Form.Control type="password" placeholder="mot de passe" />
                          <Form.Label>comfirmer votre mot de passe</Form.Label>
                          <Form.Control type="password" placeholder="mot de passe" />
                      </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <div className={styles.btn}> 
                       <button className={styles.log} id="submit" type="submit">Je m'inscris</button>
                            <button className={styles.cancel} id="cancel">Annuler</button> 
                           

                         </div> 
                 </form> 
                 <p id="error"></p>

            </div>
            </div>
        </div>
    )
}

export default Inscription