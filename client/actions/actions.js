import { userActionTypes } from '../constants/actionTypes'
import { apiService } from '../api/ApiService'
import { history } from '../helper/history'

export const userActions = {
	login, 
	logout,
	register
};

//region user logout
const logInRequest = (email) => ({
	type: userActionTypes.USER_LOGIN_REQUEST,
	user: {email: email}
});

const logInSuccess = (user) => ({
	type: userActionTypes.USER_LOGIN_SUCCESS,
	user: user
});

const logInFailed = (error) => ({
	type: userActionTypes.USER_LOGIN_FAILED,
	error: error
});

function login(email, password) {
	return dispatch => {
		console.log('login!!');
		dispatch(logInRequest);

		apiService.login(email, password)
			.then(
				user => {
					console.log('got user', user);
					dispatch(logInSuccess(user));
					history.push('/');
				})
			.catch(
				error => {
					console.log('got error', error);
					dispatch(logInFailed({message: 'Login failed'}))
				}
			);
	};
}

//endregion

//region user logout
function logout(){
	console.log('logout!!');
	apiService.logout();
	return {
		type: userActionTypes.USER_LOGOUT
	}
}
//endregion

//region user registration
const registerRequest = (email) => ({
	type: userActionTypes.USER_REGISTER_REQUEST,
	user: {email: email}
});

const registerSuccess = (user) => ({
	type: userActionTypes.USER_REGISTER_SUCCESS,
	user: user
});

const registerFailed = (error) => ({
	type: userActionTypes.USER_REGISTER_FAILED,
	error: error
});

function register(email, username, password) {
	return dispatch => {
		console.log('register!!');
		dispatch(registerRequest);

		apiService.register(email, username, password)
			.then(
				user => {
					console.log('got user', user);
					dispatch(registerSuccess(user));
					history.push('/login');
				})
			.catch(
				error => {
					console.log('got error', error);
					dispatch(registerFailed({message: error.data.error.message}))
				}
			);
	};
}
//endregion