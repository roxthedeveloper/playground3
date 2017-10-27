import { combineReducers } from 'redux';

import { userActionTypes } from '../constants/actionTypes'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

function authentication (state = initialState, action) {
	console.log('ola');
	switch(action.type) {
		case userActionTypes.USER_LOGIN_REQUEST:
			return { 
				loggingIn: true,
				user: action.user
			};
		case userActionTypes.USER_LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user:action.user
			}
		case userActionTypes.USER_LOGIN_FAILED:
			return {};
		case userActionTypes.USER_LOGOUT:
			return {};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	authentication
  });

export default rootReducer;
