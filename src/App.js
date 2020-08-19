import React from 'react';
import './styles/main.scss';
import {Switch, Route, withRouter} from "react-router-dom";
import TerminalsContainer from "./components/Terminals/TerminalsContainer";
import BuyersContainer from "./components/Buyers/BuyersContainer";
import BuyerContainer from "./components/Buyers/Buyer/BuyerContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div className="app__wrapper">
      <SidebarContainer/>
      <Switch>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/terminals" component={TerminalsContainer}/>
          <Route exact path="/buyers" component={BuyersContainer}/>
          <Route path="/buyers/:id?" component={BuyerContainer}/>
     </Switch>
    </div>
  );
}

export default withRouter(App);
