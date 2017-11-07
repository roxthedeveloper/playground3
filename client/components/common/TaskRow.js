import React from 'react'
import { Row, Col } from 'react-bootstrap'


Date.dateDiff = function(datepart, fromdate, todate) {	
    datepart = datepart.toLowerCase();	
    var diff = todate - fromdate;	
    var divideBy = { w:604800000, 
                     d:86400000, 
                     h:3600000, 
                     n:60000, 
                     s:1000 };	
    
    return Math.floor( diff/divideBy[datepart]);
}

class TaskRow extends React.Component {
    render(){
        let { task } = this.props;
        var startDate = new Date(task.start);
        var endDate = new Date(task.end);
        var diffInHours = Date.dateDiff('h', startDate, endDate);
        var startDateStr = startDate.toDateString().split(' '); //e.g. Sat Nov 4 2017

        return (
            <Row className="show-grid" style={{borderColor: "black"}}>
                <Col xs={3} md={3} lg={3}>
                    <div style={{textAlign:"center", color:"#686868"}}>
                        <h6><b>{startDateStr[0].toUpperCase()}</b></h6>
                        <h3 style={{marginTop:"10px"}}>{startDateStr[1]} {startDateStr[2]}</h3>
                        <h4>{startDateStr[3]}</h4>
                    </div>
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
                </Col>
            </Row>
        );
    }
}

export default TaskRow