import React from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, ControlLabel, FormControl, Button, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-bootstrap-date-picker'
import TimePicker from 'react-bootstrap-time-picker'

import { FieldGroup } from '../common/FieldGroup'
import { workeventActions } from '../../actions/actions.workevent'

class AddWorkEventPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',
            title: '',
            type: 'wedding',
            description: '',
            submitted: false
        };

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStartDateChange(date) {
        console.log('start date picker event', date);
        this.setState({startDate: date});
    }

    handleStartTimeChange(time) {
        console.log('start time picker event', time);
        this.setState({startTime: time});
    }

    handleEndDateChange(date) {
        console.log('end date picker event', date);
        this.setState({endDate: date});
    }

    handleEndTimeChange(time) {
        console.log('end time picker event', time);
        this.setState({endTime: time});
    }

    combineDateTimeStr(date, time) {
        //Datepicker component has 12hr difference
        //Timepicker component return in seconds
        //need to manually combine date and time 
        var dateOnly = new Date(date);
        var dateTime = new Date(dateOnly.getFullYear(), dateOnly.getMonth(), dateOnly.getDate());
        dateTime.setSeconds(time);
        console.log("combineDateTimeStr", dateTime.toDateString() + " " + dateTime.toTimeString());
        return dateTime.toJSON();
    }

    handleChange(e) {
        console.log('event change event', e.target);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({ submitted: true });

        const { startDate, startTime, endDate, endTime, title, type, description } = this.state;
        const { dispatch } = this.props;
        var start = this.combineDateTimeStr(startDate, startTime);
        var end = this.combineDateTimeStr(endDate, endTime);

        if( start && end && title ) {
            dispatch(workeventActions.addWorkEvent(start, end, title, type, description));
        }
    }

    render(){

        console.log("state", this.state);

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <ControlLabel>Start date/time</ControlLabel>.
                        <Row>
                            <Col xs={6} md={6} lg={6}>
                                <DatePicker 
                                    id="startDatePicker" 
                                    value={this.state.startDate} 
                                    onChange={this.handleStartDateChange} 
                                />
                            </Col>
                            <Col xs={6} md={6} lg={6}>
                                <TimePicker 
                                    id="startTimePicker" 
                                    value={this.state.startTime} 
                                    onChange={this.handleStartTimeChange} 
                                    step={15}
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>End date/time</ControlLabel>
                        <Row>
                            <Col xs={6} md={6} lg={6}>
                                <DatePicker 
                                    id="startDatePicker" 
                                    value={this.state.endDate} 
                                    onChange={this.handleEndDateChange} 
                                />
                            </Col>
                            <Col xs={6} md={6} lg={6}>
                                <TimePicker 
                                    id="endTimePicker" 
                                    value={this.state.endTime} 
                                    onChange={this.handleEndTimeChange} 
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" placeholder="Enter title" name="title" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select Type</ControlLabel>
                        <FormControl componentClass="select" placeholder="wedding" name="type" onChange={this.handleChange}>
                            <option value="wedding">wedding</option>
                            <option value="engagement">engagement</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Enter Description" name="description" onChange={this.handleChange} />
                    </FormGroup>

                    <Button bsStyle="primary" type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return ({
//         error: state.workeventList.error,
//         addingWorkEvent: state.workeventList.fetchingData,
//     });
// }
export default connect(state=>state)(AddWorkEventPage);