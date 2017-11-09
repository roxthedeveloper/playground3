import React from 'react'

import { dateHelper } from '../../helper/dates'

class CalendarCircle extends React.Component {
    render(){
        var dayStyle = { fontSize: "12px", margin: "5px 10px", fontWeight: "bold" };
        var dateStyle = { fontSize: "20px", margin: "5px 10px" };
        var yearStyle = { fontSize: "12px", margin: "5px 10px" };
        var mainStyle = { textAlign:"center" }
        var circleStyle = {
            color:"white", 
            margin: "10px 5px",
            padding: "15px 5px",
            background: "#AAAAAA",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            minWidth: "100px",
            minHeight: "100px"
        };
        var dayDiffStyle = { color: "#AAAAAA" };
        
        let { date, showDiffInDays } = this.props;

        var workeventDate = new Date(date);
        var today = new Date();
        var dateStr = workeventDate.toDateString().split(' '); //e.g. Sat Nov 4 2017
        var diffInDays = dateHelper.dateDiff('d', today, workeventDate) + 1;
        var diffInDaysPercentage = 1 - (Math.abs(diffInDays)/365);

        var daysMessage = "";
        if(diffInDays == 0) {
            daysMessage = "Today";
        }else if(diffInDays > 0) {
            dayDiffStyle = { ...dayDiffStyle, opacity: "" + diffInDaysPercentage };
            daysMessage = "In " + diffInDays + " Days";
        }else if(diffInDays < 0) {
            dayDiffStyle = { ...dayDiffStyle, opacity: "" + diffInDaysPercentage };
            daysMessage = Math.abs(diffInDays) + " Days Ago";
        }

        return (
            <div style={mainStyle}>
                <div style={circleStyle}>
                    <span style={dayStyle}>{dateStr[0].toUpperCase()}</span><br/>
                    <span style={dateStyle}>{dateStr[1]} {dateStr[2]}</span><br/>
                    <span style={yearStyle}>{dateStr[3]}</span>
                </div>
                { showDiffInDays && 
                    <div style={dayDiffStyle}>
                        <span><b>{daysMessage}</b></span>
                    </div>
                }
            </div>
        );
    }
}

export default CalendarCircle