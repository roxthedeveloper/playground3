import { combineReducers } from 'redux';

import { userActionTypes } from '../constants/actionTypes'

//region authentication
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

function authentication (state = initialState, action) {
	console.log('authentication', initialState);
	switch(action.type) {
		case userActionTypes.USER_LOGIN_REQUEST:
			console.log('login request action', action)
			return { 
				loggingIn: true,
				user: action.user
			};
		case userActionTypes.USER_LOGIN_SUCCESS:
			console.log('login success action', action)
			return {
				loggedIn: true,
				user:action.user
			}
		case userActionTypes.USER_LOGIN_FAILED:
			console.log('login failed action', action)
			return {
				error: action.error
			};
		case userActionTypes.USER_LOGOUT:
			return {};
		default:
			return state;
	}
}
//endregion

//region registration
function registration(state = {}, action) {
	switch(action.type) {
		case userActionTypes.USER_REGISTER_REQUEST:
			console.log('login request action', action)
			return { 
				registering: true
			};
		case userActionTypes.USER_REGISTER_SUCCESS:
			console.log('login success action', action)
			return {}
		case userActionTypes.USER_REGISTER_FAILED:
			console.log('login failed action', action)
			return {
				error: action.error
			};
		default:
			return state;
	}
}
//endregion

const rootReducer = combineReducers({
	authentication,
	registration
  });

export default rootReducer;
