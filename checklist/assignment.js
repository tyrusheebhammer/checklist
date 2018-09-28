const timeUtil = require('./../timeUtil/timeUtil');
var Assignment = function(assignmentObj){
    this.assignment = assignmentObj.assignment;
    this.course = assignmentObj.course;
    this.dueDate = assignmentObj.dueDate;
    this.details = assignmentObj.details;
};

Assignment.prototype.packUp = function(){
    return {
        assignment: this.assignment,
        course: this.course,
        dueDate: this.dueDate,
        details: this.details
    };
};

Assignment.prototype.toString = function(){
    var dueIn = this.timeUntilDue();
    var hours = addZero(dueIn.hours);
    var minutes = addZero(dueIn.minutes);


    return `${this.course} ${this.assignment} due in ${dueIn.days} days, ${hours} hours ${minutes} mins`;
};

Assignment.prototype.timeUntilDue = function(){
    return timeUtil.timeUntil(this.dueDate, Date.now());
};

function addZero(num) {
    return num > 9 ? num: '0' + num;
};

module.exports = Assignment;