import React from 'react'
import {connect} from 'react-redux'
import ScheduleList from '../components/ScheduleList'

const mapStateToProps = (state) => {
    const {isFetching, schedule, error} = state.scheduleGroup;
    let scheduleOnDay = schedule.schedules;
    return {
        isFetching,
        scheduleOnDay,
        error
    }
};

export default connect(mapStateToProps)(ScheduleList)