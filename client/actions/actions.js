import { actionTypes } from '../constants/actionTypes'
import { apiService } from '../api/ApiService'
import { history } from '../helper/history'

export const userActions = {
	login, 
	logout,
	register
};

//region user logout
const logInRequest = (email) => ({
	type: actionTypes.USER_LOGIN_REQUEST,
	user: {email: email}
});

const logInSuccess = (user) => ({
	type: actionTypes.USER_LOGIN_SUCCESS,
	user: user
});

const logInFailed = (error) => ({
	type: actionTypes.USER_LOGIN_FAILED,
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
					history.push('/addTask'); //TODO: history.push('/');
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
		type: actionTypes.USER_LOGOUT
	}
}
//endregion

//region user registration
const registerRequest = (email) => ({
	type: actionTypes.USER_REGISTER_REQUEST,
	user: {email: email}
});

const registerSuccess = (user) => ({
	type: actionTypes.USER_REGISTER_SUCCESS,
	user: user
});

const registerFailed = (error) => ({
	type: actionTypes.USER_REGISTER_FAILED,
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


export const taskActions = {
	getTaskList
}

//region task loadtasklist
const getTaskListRequest = () => ({
	type: actionTypes.TASK_GETTASKLIST_REQUEST
});

const getTaskListSuccess = (tasks) => ({
	type: actionTypes.TASK_GETTASKLIST_SUCCESS,
	tasks: tasks
});

const getTaskListFailed = (error) => ({
	type: actionTypes.TASK_GETTASKLIST_FAILED,
	error: error
});

function getTaskList(userId, token) {
	return dispatch => {
		console.log('getTaskList!!');
		dispatch(getTaskListRequest);

		apiService.getTaskList(userId, token)
			.then(
				tasks => {
					console.log('got tasks', tasks);
					dispatch(getTaskListSuccess(tasks));
				})
			.catch(
				error => {
					console.log('got error', error);
					if(error.status == 401) {
						localStorage.removeItem('user');
						history.push('/');
					}
					dispatch(getTaskListFailed({message: 'Get Task List failed'}));
				}
			);
	};
}
//endregion