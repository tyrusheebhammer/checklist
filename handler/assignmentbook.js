const readline = require('readline');
const checklist = require('./../checklist/checklist');
const fr = require('./../data/filereader');

var handleResponse = (response) => {
    switch(response[0]){
        default:
            return true;
    }
};

var start = (rl) => {
    console.clear()
    console.log('Welcome to the Assignment Book!'+
                '\nReading in data from your file...');
    rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('Please choose an option!');


    rl.on('line', function(response) {
        if(handleResponse(response)){
            rl.prompt();
        }
    }).on('close', function() {
        process.exit(0);
    });

    // rl.setPrompt('\n\nPlease choose mode, or (H)elp> ');
    // rl.prompt();

    // rl.on('line', function(response) {
    //     if(handleResponse(response)){
    //         rl.prompt();
    //     } else {
    //         rl.close();
    //     }
    // }).on('close', function() {
    //     process.exit(0);
    // });
};

module.exports = {
    start
};