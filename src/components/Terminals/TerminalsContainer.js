import React, {Component} from 'react';
import {connect} from "react-redux";
import Terminals from "./Terminals";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {addNewTerminal, deleteTerminal} from "../../redux/terminals-reducer";

class TerminalsContainer extends Component {
    render() {
        return (
            <Terminals {...this.props}/>
        );
    }
}
let mapStateToProps = (state) => ({
    terminals: state.terminalsPage.terminals

})
export default compose(connect(mapStateToProps, {addNewTerminal, deleteTerminal}), withAuthRedirect)(TerminalsContainer)
