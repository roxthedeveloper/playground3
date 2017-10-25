import { GET_STARTED } from '../actions';

function rootReducer (state = {}, action) {
	switch(action.type) {
		case GET_STARTED:
			return { welcome: "Aloha" };
		default:
			return state;
	}
}

export default rootReducer;
