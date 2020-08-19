import React, {Component} from 'react';
import Buyers from "./Buyers";
import {connect} from "react-redux";

class BuyersContainer extends Component {
    render() {
        return (
            <Buyers {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {

}
export default connect(mapStateToProps, {})(BuyersContainer)