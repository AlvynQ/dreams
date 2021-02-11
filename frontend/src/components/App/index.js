import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import Inscription from '../InscriptionPage';
import Connexion from '../ConnexionPage';
import Profil from '../ProfilPage';
import HomePage from '../HomePage';
import ChoixPage from '../ChoixPage';
import DetailPage from '../DetailPage';
//blabla
function App() {
    return (
      <Router> 
        <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/Inscription" component={Inscription} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Profil" component={Profil} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/WelcomePage" component={WelcomePage} />
        <Route path="/ChoixPage" component={ChoixPage} />
        <Route path="/DetailPage" component={DetailPage} />

        </Switch>  
      </Router>
  
    );
  }
  
  export default App;