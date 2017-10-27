import { userActionTypes } from '../constants/actionTypes'
import { apiService } from '../api/ApiService'
import { history } from '../helper/history'

export const userActions = {
	login, 
	logout
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
})

function login(email, password) {
	return dispatch => {
		console.log('login!!');
		dispatch(logInRequest);

		apiService.login(email, password)
			.then(
				user => {
					console.log('got user');
					dispatch(logInSuccess(user));
					history.push('/');
				},
				error => {
					console.log('got error');
					dispatch(logInFailed(error))
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