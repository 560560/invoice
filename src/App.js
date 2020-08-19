import React from 'react';
import './styles/main.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {Switch, Route, withRouter} from "react-router-dom";
import TerminalsContainer from "./components/Terminals/TerminalsContainer";
import BuyersContainer from "./components/Buyers/BuyersContainer";
import BuyerContainer from "./components/Buyers/Buyer/BuyerContainer";

function App() {
  return (
    <div className="app__wrapper">
      <Sidebar/>
      <Switch>
          <Route path="/terminals" component={TerminalsContainer}/>
          <Route exact path="/buyers" component={BuyersContainer}/>
          <Route path="/buyers/:id?" component={BuyerContainer}/>
     </Switch>
    </div>
  );
}

export default withRouter(App);
