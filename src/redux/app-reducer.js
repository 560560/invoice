import {setAuthData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "app-reducer/INITIALIZED-SUCCESS"

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }


}
// Action Creators //
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})



export const initializeApp = () => (dispatch) => {

    if (localStorage.isAuth && localStorage.login && localStorage.avatarSrc) {
        dispatch(setAuthData(localStorage.login, localStorage.avatarSrc))
        dispatch(initializedSuccess())
    }


}

// Thunk Creators //


export default appReducer