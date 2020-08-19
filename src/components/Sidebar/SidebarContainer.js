import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class SidebarContainer extends Component {
    render() {
        return (
         <Sidebar {...this.props}/>
        );
    }
}
let mapStateToProps = (state) => ({
    avatar : state.auth.userAvatarSrc,
    isAuth : state.auth.isAuth,
})
export default connect(mapStateToProps, {logout})(SidebarContainer);