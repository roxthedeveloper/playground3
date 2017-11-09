import { combineReducers } from 'redux';

import { actionTypes } from '../constants/actionTypes'

//region authentication
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

function authentication (state = initialState, action) {
	console.log('authentication', initialState);
	switch(action.type) {
		case actionTypes.USER_LOGIN_REQUEST:
			console.log('login request action', action)
			return { 
				loggingIn: true,
				user: action.user
			};
		case actionTypes.USER_LOGIN_SUCCESS:
			console.log('login success action', action)
			return {
				loggedIn: true,
				user:action.user
			}
		case actionTypes.USER_LOGIN_FAILED:
			console.log('login failed action', action)
			return {
				error: action.error
			};
		case actionTypes.USER_LOGOUT:
			return {
				loggedIn: false,
				user: null
			};
		default:
			return state;
	}
}
//endregion

//region registration
function registration(state = {}, action) {
	switch(action.type) {
		case actionTypes.USER_REGISTER_REQUEST:
			console.log('login request action', action)
			return { 
				registering: true
			};
		case actionTypes.USER_REGISTER_SUCCESS:
			console.log('login success action', action)
			return {}
		case actionTypes.USER_REGISTER_FAILED:
			console.log('login failed action', action)
			return {
				error: action.error,
				registering: false
			};
		default:
			return state;
	}
}
//endregion

//region workeventlist
function workeventList(state = {}, action) {
	switch(action.type) {
		case actionTypes.WORKEVENT_GETLIST_REQUEST:
			console.log('get workevent action', action)
			return {
				fetchingData: true
			}
		case actionTypes.WORKEVENT_GETLIST_SUCCESS:
			console.log('get workevent action', action)
			return {
				fetchingData: false,
				workevents: action.workevents,
				error: null
			}
		case actionTypes.WORKEVENT_GETLIST_FAILED:
			console.log('get workevent action', action)
			return {
				fetchingData: false,
				error: action.error
			}
		default:
			return state;
	}
}
//endregion

//region addworkevent
function addworkevent(state = {}, action) {
	switch(action.type) {
		case actionTypes.WORKEVENT_ADD_REQUEST:
			console.log('get workevent action', action)
			return {
				fetchingData: true
			}
		case actionTypes.WORKEVENT_ADD_SUCCESS:
			console.log('get workevent action', action)
			return {
				fetchingData: false,
				workevent: action.workevent,
				error: null
			}
		case actionTypes.WORKEVENT_ADD_FAILED:
			console.log('get workevent action', action)
			return {
				fetchingData: false,
				error: action.error
			}
		default:
			return state;
	}
}
//endregion

const rootReducer = combineReducers({
	authentication,
	registration,
	workeventList,
	addworkevent
  });

export default rootReducer;
