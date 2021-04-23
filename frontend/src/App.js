
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom"

import CryptoRankingPage from './components/CryptoRankingPage/CryptoRankingPage';
import Navbar from "./components/Navbar/Navbar"
import CreateNewAccount from './components/CreateNewAccount/CreateNewAccount'
import Login from './components/Login/Login'
import UserProfile from './components/UserProfile/UserProfile'

function App(props) {





  return (

    
    <div className="App">
      
      <Router>
        <Navbar/>
        <Route  exact path="/" component={CryptoRankingPage}/>
        <Route exact path="/register" component={CreateNewAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={UserProfile}/>
      </Router>
     
    </div>
  );
}

export default App 