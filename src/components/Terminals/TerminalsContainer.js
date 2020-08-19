import React, {Component} from 'react';
import {connect} from "react-redux";
import Terminals from "./Terminals";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class TerminalsContainer extends Component {
    render() {
        return (
            <Terminals {...this.props}/>
        );
    }
}
let mapStateToProps = (state) => ({

})
export default compose(connect(mapStateToProps, {}), withAuthRedirect)(TerminalsContainer)
