const yargs = require('yargs');
const _ = require('lodash');
const readline = require('readline');
const ab = require('./handler/assignmentbook');
var unavailable = () => {
    return console.log('sorry! this functionality is not yet available!');
}

var checklistHandler = () => {
    console.log('Selected Checklist');
    return unavailable();
};

var assignmentHandler = () => {
    console.log('Selected Assignment Book');
    rl.close();
    ab.start();

};

var engineerHandler = () => {
    console.log('Selected Engineering Notebook')
    return unavailable();
};

var help = () => {
    var prompt = '\n[0] - (C)hecklist'+
        '\n\tThis application allows you to add and remove items \n\tfrom a simple checklist\n'+
        '\n[1] - (A)ssignment Book'+
        '\n\tThis application provides a way to keep track of \n\tassignments and their due dates\n'+
        '\n[2] - (E)ngineering Notebook' +
        '\n\tThis application allows you to keep track of tasks, \n\tand allows you to track estimates of time\n';

    console.log(prompt);
};

var handleResponse = (response) => {
    switch(response[0]){
        case 0: case 'c': case 'C': //fallthrough
            checklistHandler();
            break;
        case 1: case 'a': case 'A': //fallthrough
            assignmentHandler();
            break;
        case 2: case 'e': case 'E': //fallthrough
            engineerHandler();
            break;
        case 'h': case 'H': //fallthrough
            help();
            return true;
        case 'q': case 'Q': //fallthrough
            break;
        default:
            console.log(`${response} is invalid input`);
            return true;
    }
    return false;
};

const rl = readline.createInterface(process.stdin, process.stdout);

console.clear();
var header = 'Welcome to Checklist v0.1.0, the malfunctioning checklist application'+ 
            '\nhere are the supported modes:\n\n' + 
            '\n[0] - (C)hecklist'+
            '\n[1] - (A)ssignment Book'+
            '\n[2] - (E)ngineering Notebook';

console.log(header);

rl.setPrompt('\n\nPlease choose mode, or (H)elp> ');
//rl.prompt();

rl.on('line', function(response) {
    if(handleResponse(response)){
        rl.prompt();
    }
});

