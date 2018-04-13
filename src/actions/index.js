import {REQUEST_SCHEDULE, RECEIVE_SCHEDULE, SELECT_GROUP, ERROR_REQUEST} from '../constants'

export const selectedGroup = groupNumber => ({
    type: SELECT_GROUP,
    groupNumber
});

export const requestSchedule = groupNumber => ({
    type: REQUEST_SCHEDULE,
    groupNumber
});

export const errorRequest = error => ({
    type: ERROR_REQUEST,
    error
});

export const receiveSchedule = (groupNumber, jsonDataSchedule) => ({
    type: RECEIVE_SCHEDULE,
    groupNumber,
    jsonDataSchedule
});

