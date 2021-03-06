const readline = require('readline');
const timeUtil = require('./../timeUtil/timeUtil');
const assn = require('./assignment');

var CheckList = function(){
    this.points, this.assignments;
    this.points = 0;
    this.assignments = [];
};

CheckList.prototype.open = function(dataStore){};

CheckList.prototype.close = function(){};

CheckList.prototype.sortAssignments = function() {
    this.assignments.sort((assn1, assn2) => {
        return assn1.dueDate - assn2.dueDate;
    });
};

CheckList.prototype.addAssignment = function(assignment){
    this.assignments.push(assignment);
    this.sortAssignments();
};

CheckList.prototype.removeAssignment = function(assignmentIndex){
    assignments.splice(assignmentIndex, 1);
    
};

CheckList.prototype.completeAssignment = function(assignmentIndex){
    score += assignments[assignmentIndex].timeUntilDue().days;
    this.removeAssignment(assignmentIndex);
};

CheckList.prototype.toString = function(){
    var str = '';

    var i = 0;
    this.assignments.forEach((assn) => {
        str += `[${i++}] ${assn.toString()}\n`; 
    });

    return str
};

//Used to add an assignment through 4 parameters, passed onto the addAssignment functionality,
//details is an optional parameter
CheckList.prototype.createAssignment = function(course, assignment, dueDate, details = ''){
    this.addAssignment(new assn({
        course: course,
        assignment: assignment,
        dueDate: dueDate,
        details: details
    }));
};

module.exports = CheckList;

