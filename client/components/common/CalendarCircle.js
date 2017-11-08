import React from 'react'

class CalendarCircle extends React.Component {
    render(){
        var dayStyle = { fontSize: "12px", margin: "5px 10px", fontWeight: "bold" };
        var dateStyle = { fontSize: "20px", margin: "5px 10px" };
        var yearStyle = { fontSize: "12px", margin: "5px 10px" };
        var mainStyle = {
            textAlign:"center", 
            color:"white", 
            margin: "10px 5px",
            padding: "15px 5px",
            background: "#A4A4A4",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            minWidth: "100px",
            minHeight: "100px"
        };

        let { date } = this.props;
        var dateStr = (new Date(date)).toDateString().split(' '); //e.g. Sat Nov 4 2017

        return (
            <div style={mainStyle}>
                <span style={dayStyle}>{dateStr[0].toUpperCase()}</span><br/>
                <span style={dateStyle}>{dateStr[1]} {dateStr[2]}</span><br/>
                <span style={yearStyle}>{dateStr[3]}</span>
            </div>
        );
    }
}

export default CalendarCircle