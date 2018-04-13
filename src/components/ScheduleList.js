import React from 'react'
import PropTypes from 'prop-types'
import ScheduleBlockDay from './SheduleBlockDay'


const ScheduleList = (props) => {
    const {isFetching, error, scheduleOnDay=[] } = props;

    const scheduleBlocks = scheduleOnDay.map( (elem) =>
        <ScheduleBlockDay key={elem.weekDay}
            weekDay={elem.weekDay}
            scheduleOnDay={elem.schedule}
        />
    );

    const checkOnError = () => {
      if(isFetching) {
          return <h2>loading</h2>
      } else {
          return error ? <h2>something wrong</h2> : scheduleBlocks
      }
    };

    return (

        <section className="scheduleList">
            {
                checkOnError()
            }
        </section>
    )
};

ScheduleList.propTypes = {
    schedule: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
};

export default ScheduleList;