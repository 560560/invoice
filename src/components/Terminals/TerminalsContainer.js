import React, {Component} from 'react';
import {connect} from "react-redux";
import Terminals from "./Terminals";

class TerminalsContainer extends Component {
    render() {
        return (
            <Terminals {...this.props}/>
        );
    }
}
let mapStateToProps = (state) => {

}
export default connect(mapStateToProps, {})(TerminalsContainer)
