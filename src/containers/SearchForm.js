import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchSchedule from '../middlewares/fetchSchedule'
import {selectedGroup} from '../actions'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


class SearchForm extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.groupNumber = '';
    }

    handleGroupNumberChange = (event) => {
        this.groupNumber = event.target.value;
    };
    handleSubmit = () => {
        const {dispatch} = this.props;
        dispatch(selectedGroup(this.groupNumber));
        dispatch(fetchSchedule(this.groupNumber));
    };

    render() {
        return (
            <div className="searchForm">
                <TextField
                    label="Input group number"
                    placeholder="544601"
                    margin="normal"
                    onChange={this.handleGroupNumberChange}
                />
                <Button
                    variant="raised"
                    onClick={this.handleSubmit}
                >
                    Search
                </Button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const {isFetching, schedule} = state.scheduleGroup;
    return {
        isFetching,
        schedule
    }
};

export default connect(mapStateToProps)(SearchForm)