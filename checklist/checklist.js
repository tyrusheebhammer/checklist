const readline = require('readline');
const timeUtil = require('./../timeUtil/timeUtil');
const assn = require('./assignment');

var CheckList = function(){
    this.points, this.assignments;
    this.points = 0;
    this.assignments = [];
}

CheckList.prototype.open = function(){};

CheckList.prototype.close = function(){};

CheckList.prototype.sortAssignments = function() {
    this.assignments.sort((assn1,assn2) => {
        return assn1.dueDate - assn2.dueDate;
    });
};

CheckList.prototype.getAll = function(){
    return this.assignments;
};

CheckList.prototype.getAllBefore = function(before){
    return assignments.filter((assignment) => assignment.dueDate <= before);
};

CheckList.prototype.addAssignment = function(assignment){
    this.assignments.push(assignment);
    this.sortAssignments();
};

CheckList.prototype.removeAssignment = function(assignmentIndex){
    assignments.splice(assignmentIndex, 1);
    
};

CheckList.prototype.completeAssignment = function(assignmentIndex){
    score += assignments[assignmentIndex].timeUntilDue();
    this.removeAssignment(assignmentIndex);
}

CheckList.prototype.toString = function(){
    var str = '';

    var i = 0;
    this.assignments.forEach((assn) => {
        str += `[${i++}] ${assn.toString()}\n`; 
    });

    return str
};

//Used to add an assignment through 3 parameters, passed onto the addAssignment functionality
CheckList.prototype.createAssignment = function(course, assignment, dueDate){
    this.addAssignment(new assn({
        course: course,
        assignment: assignment,
        dueDate: dueDate
    }));
};
var cl = new CheckList();

var classes = ['RH330', 'MA490', 'CSSE371', 'CSSE497'];

var work = ['Homework', 'Project', 'Assignment', 'Test'];

var rand = function(val){
    return Math.floor(val * Math.random());
    
};

console.reset = function () {
    return process.stdout.write('\033c');
};

cl.createAssignment('RH330', 'Do Homework', new Date(2018, 10));

createNewTimeout1();

function createNewTimeout1(){
    console.log(cl.toString());
    setTimeout(() => {
        console.reset();
        createNewTimeout2();
    }, 1000);
};

function createNewTimeout2(){
    console.log(cl.toString());
    setTimeout(() => {
        console.reset();
        createNewTimeout1();
    }, 1000);
}

module.exports = CheckList;

