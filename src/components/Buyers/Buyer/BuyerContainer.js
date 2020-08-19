import React, {Component} from 'react';
import Buyer from "./Buyer";
import {connect} from "react-redux";

class BuyerContainer extends Component {
    render() {
        return (
     <Buyer {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {

}
export default connect(mapStateToProps, {})(BuyerContainer);