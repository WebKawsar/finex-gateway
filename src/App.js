import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Credit from './Components/Credit/Credit';
import FinalBuy from './Components/FinalBuy/FinalBuy';
import FinalSell from './Components/FinalSell/FinalSell';
import LocalBank from './Components/LocalBank/LocalBank';
import SecretSection from './Components/SecretSection/SecretSection';
import SellTranssction from './Components/SellTranssction/SellTranssction';
import StablecoinBuy from './Components/StablecoinBuy/StablecoinBuy';
import StablecoinSell from './Components/StablecoinSell/StablecoinSell';
import StablecoinSellWallet from './Components/StablecoinSellWallet/StablecoinSellWallet';
import Wallet from './Components/Wallet/Wallet';
import Home from './Pages/Home/Home';



export const UserContext = createContext();


const App = () => {
  
  const [userInfo, setUserInfo] = useState({ buys: {}, sells: {} });


  

  return (

      
        <UserContext.Provider value={[userInfo, setUserInfo]}>
          <Router>
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/home">
                <Home />
              </Route>

              <Route path="/buy">
                <StablecoinBuy />
              </Route>

              <Route path="/wallet">
                <Wallet />
              </Route>

              <Route path="/local">
                <LocalBank />
              </Route>

              <Route path="/secret">
                <SecretSection />
              </Route>
              
              <Route exact path="/finalbuy">
                <FinalBuy />
              </Route>

              <Route exact path="/sell">
                <StablecoinSell />
              </Route>

              <Route path="/sellwallet">
                <StablecoinSellWallet />
              </Route>

              <Route path="/credit">
                <Credit />
              </Route>

              <Route path="/transaction">
                <SellTranssction />
              </Route>

              <Route exact path="/finallSell">
                <FinalSell />
              </Route>



            </Switch>
          </Router>
        </UserContext.Provider>
  );
};

export default App;