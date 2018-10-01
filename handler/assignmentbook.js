const readline = require('readline');
const checklist = require('./../checklist/checklist');
const fr = require('./../data/filereader');

var handleResponse = (response) => {
    switch(response[0]){
        default:
            return true;
    }
};
var data;

var handleEmpty = () => {
    rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('\n')
};

var readData = () => {
    data = fr.read();
    if(data.length === 0){
        console.log('empty af');
        
    }
};

var start = () => {
    console.clear()
    console.log('Welcome to the Assignment Book!'+
                '\nReading in data from your file...');
    readData();
    rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('\n\nPlease choose mode, or (H)elp> ');


    rl.on('line', function(response) {
        if(handleResponse(response)){
            rl.prompt();
        }
    });
};

start();



module.exports = {
    start
};