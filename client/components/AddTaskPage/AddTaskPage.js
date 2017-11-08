import React from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'

import { FieldGroup } from '../common/FieldGroup'


class AddTaskPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            addingTask: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log('datepicker event', date);
        var ddate = new Date(date);
        console.log('datepicker date', ddate);
    }

    render(){
        return (
            <div className="">
                <form>
                    <FormGroup>
                        <ControlLabel>Start date/time</ControlLabel>
                        <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
                        placeholderText="Click to select a date"
                    />
                    </FormGroup>
                    
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" placeholder="Enter title"/>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select Type</ControlLabel>
                        <FormControl componentClass="select" placeholder="wedding">
                            <option value="wedding">wedding</option>
                            <option value="engagement">engagement</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Enter Description" />
                    </FormGroup>

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return ({
//         error: state.taskList.error,
//         addingTask: state.taskList.fetchingData,
//     });
// }
export default connect(state=>state)(AddTaskPage);