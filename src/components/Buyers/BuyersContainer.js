import React, {Component} from 'react';
import Buyers from "./Buyers";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getBuyersSelector} from "../../redux/buyers-selector";
import {setNameSearchSelector, setSorting} from "../../redux/buyers-reducer";

class BuyersContainer extends Component {
    render() {
        return (
            <Buyers {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({

    buyers: getBuyersSelector(state),
    nameSearchSelector: state.buyersPage.nameSearchSelector

})
export default compose( connect(mapStateToProps, {setNameSearchSelector, setSorting}), withAuthRedirect)(BuyersContainer)