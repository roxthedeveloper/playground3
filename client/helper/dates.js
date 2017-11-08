export const dateHelper = {
	dateDiff
};

function dateDiff(datepart, fromdate, todate) {	
    datepart = datepart.toLowerCase();	
    var diff = todate - fromdate;	
    var divideBy = { w:604800000, 
                     d:86400000, 
                     h:3600000, 
                     n:60000, 
                     s:1000 };	
    
    return Math.floor( diff/divideBy[datepart]);
}