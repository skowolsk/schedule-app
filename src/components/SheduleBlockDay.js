import React from 'react'
import PropTypes from 'prop-types'
import List, {ListItem, ListItemText} from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';


const ScheduleBlockDay = (props) => {
    const {weekDay, scheduleOnDay} = props;
    const lessonsOnDay = scheduleOnDay.map((elem, id) => {

        return (
            <Grid
                item md={8}
                //bad key, not forget
                key={id}
            >
                <ListItemText
                    className='md12'
                    primary={`${elem.subject} (${elem.lessonType})`}
                    secondary={`${elem.auditory}, ${elem.lessonTime}, неделя: ${elem.weekNumber.length < 3 ? elem.weekNumber : 'каждая'}`}/>
            </Grid>
        )
    });
    return (
        <List
            subheader={<ListSubheader>{weekDay}</ListSubheader>}
        >
            <ListItem>
                <Grid container spacing={24}>
                    {lessonsOnDay}
                </Grid>
            </ListItem>
            <Divider/>
        </List>

    )
};

ScheduleBlockDay.propTypes = {
    weekDay: PropTypes.string.isRequired,
    scheduleOnDay: PropTypes.array.isRequired
};

export default ScheduleBlockDay;