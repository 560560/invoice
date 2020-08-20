import React from 'react';
import './styles/main.scss';
import {Switch, Route, withRouter} from "react-router-dom";
import TerminalsContainer from "./components/Terminals/TerminalsContainer";
import BuyersContainer from "./components/Buyers/BuyersContainer";
import BuyerContainer from "./components/Buyers/Buyer/BuyerContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Page404 from "./components/Common/Page404";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        return (
            <div className="app__wrapper">
                <SidebarContainer/>
                <Switch>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/terminals" component={TerminalsContainer}/>
                    <Route exact path="/buyers" component={BuyersContainer}/>
                    <Route path="/buyers/:id?" component={BuyerContainer}/>
                    <Route exact path="/" component={TerminalsContainer}/>
                    <Route path="/" component={Page404}/>

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)
