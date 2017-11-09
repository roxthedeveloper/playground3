import { actionTypes } from '../constants/actionTypes'
import { apiService } from '../api/ApiService'
import { history } from '../helper/history'

export const workeventActions = {
    getWorkEventList,
    addWorkEvent
}

//region workevent loadworkeventlist
const getWorkEventListRequest = () => ({
	type: actionTypes.WORKEVENT_GETLIST_REQUEST
});

const getWorkEventListSuccess = (workevents) => ({
	type: actionTypes.WORKEVENT_GETLIST_SUCCESS,
	workevents: workevents
});

const getWorkEventListFailed = (error) => ({
	type: actionTypes.WORKEVENT_GETLIST_FAILED,
	error: error
});

function getWorkEventList(userId, token) {
	return dispatch => {
		console.log('getWorkEventList!!');
		dispatch(getWorkEventListRequest);

		apiService.getWorkEventList(userId, token)
			.then(
				workevents => {
					console.log('got workevents', workevents);
					dispatch(getWorkEventListSuccess(workevents));
				})
			.catch(
				error => {
					console.log('got error', error);
					if(error.status == 401) {
						localStorage.removeItem('user');
						history.push('/');
					}
					dispatch(getWorkEventListFailed({message: 'Get WorkEvent List failed'}));
				}
			);
	};
}
//endregion

//region workevent addworkevent
const addWorkEventRequest = () => ({
	type: actionTypes.WORKEVENT_ADD_REQUEST
});

const addWorkEventSuccess = (workevent) => ({
	type: actionTypes.WORKEVENT_ADD_SUCCESS,
	workevent: workevent
});

const addWorkEventFailed = (error) => ({
	type: actionTypes.WORKEVENT_ADD_FAILED,
	error: error
});

function addWorkEvent(start, end, title, type, description) {
	return dispatch => {
		console.log('addWorkEvent!!');
		dispatch(addWorkEventRequest);

		apiService.addWorkEvent(start, end, title, type, description)
			.then(
				workevent => {
					console.log('add workevent', workevent);
                    dispatch(addWorkEventSuccess(workevent));
                    history.push('/home');
				})
			.catch(
				error => {
					console.log('got error', error);
					if(error.status == 401) {
						localStorage.removeItem('user');
						history.push('/');
					}
					dispatch(addWorkEventFailed({message: 'Add WorkEvent failed'}));
				}
			);
	};
}
//endregion
