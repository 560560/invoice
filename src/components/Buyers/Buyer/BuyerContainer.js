import React, { Component } from "react";
import Buyer from "./Buyer";
import { connect } from "react-redux";
import { clearBuyer, getBuyerData } from "../../../redux/buyers-reducer";

class BuyerContainer extends Component {
  componentDidMount() {
    this.props.getBuyerData(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearBuyer();
  }

  render() {
    return <Buyer {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  buyer: state.buyersPage.buyer,
});
export default connect(mapStateToProps, { getBuyerData, clearBuyer })(
  BuyerContainer
);
