import React from 'react'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CalendarCircle from './CalendarCircle'
import { dateHelper } from '../../helper/dates'

class TaskRow extends React.Component {
    render(){
        var rowStyle = {
            backgroundColor: "white", 
            padding:"10px 15px", 
            margin:"10px", 
            boxShadow: "2px 2px 5px grey",
            borderRadius: "5px"
        }

        let { task } = this.props;
        var startDate = new Date(task.start);
        var endDate = new Date(task.end);
        var diffInHours = dateHelper.dateDiff('h', startDate, endDate);

        return (
            <div style={rowStyle}>
                <Row className="show-grid">
                    <Col xs={3} md={3} lg={3}>
                        <CalendarCircle date={task.start} showDiffInDays={true}></CalendarCircle>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <div>
                            <h5><b>{task.title.toUpperCase()}</b></h5>
                            <h5><b>Type:</b> {task.type}</h5>
                            <h5><b>Coverage:</b> {diffInHours}Hrs</h5>
                            <span>{task.description}</span>
                        </div>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                        <div style={{ height: "100%", minHeight: "120px" }}>
                            <Button bsStyle="default" style={{ position: "absolute", top: "80%"}}>
                                <Link to="/users" style={{color: "black", textDecoration: "none"}}><Glyphicon glyph="edit" /> Edit</Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TaskRow