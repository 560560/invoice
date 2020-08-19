import React, {Component} from 'react';
import Buyers from "./Buyers";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class BuyersContainer extends Component {
    render() {
        return (
            <Buyers {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({

})
export default compose( connect(mapStateToProps, {}), withAuthRedirect)(BuyersContainer)