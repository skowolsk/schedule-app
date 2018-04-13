import {combineReducers} from 'redux'
import {SELECT_GROUP, RECEIVE_SCHEDULE, REQUEST_SCHEDULE, ERROR_REQUEST} from "../constants"


const defaultState = {
    groupNumber: '',
    isFetching: false,
    error: '',
    schedule: {}
};

const scheduleGroup = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_GROUP:
            return {
                ...state,
                groupNumber: action.groupNumber
            };
        case REQUEST_SCHEDULE:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SCHEDULE:
            return {
                ...state,
                isFetching: false,
                error: '',
                schedule: action.jsonDataSchedule
            };
        case ERROR_REQUEST:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
};


export default combineReducers({
    scheduleGroup
})