import {requestSchedule, receiveSchedule, errorRequest} from '../actions'

const fetchSchedule = (groupNumber) => dispatch => {
    dispatch(requestSchedule(groupNumber));
    return fetch(`https://students.bsuir.by/api/v1/studentGroup/schedule?studentGroup=${groupNumber}`)
        .then(responce => responce.json())
        .then(jsonDataSchedule => {
            dispatch(receiveSchedule(groupNumber, jsonDataSchedule))
        })
        .catch(resolve => {
            dispatch(errorRequest(resolve))
        })
};

export default fetchSchedule;
