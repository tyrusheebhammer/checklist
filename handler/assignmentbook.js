const checklist = require('./../checklist/checklist');
const fr = require('./../data/filereader');
const prompt = require('prompt');

var handleResponse = (response) => {
    switch(response[0]){
        default:
            return true;
    }
};
var data;

var handleEmpty = () => {
    
};

var readData = () => {
    data = fr.read();
    if(data.length === 0){
        console.log('empty af');
        
    }
};

var start = () => {
    console.log('\na------------------------------------\n' +
                '\nWelcome to the Assignment Book!'+
                '\nReading in data from your file...');
    readData();
   
};

module.exports = {
    start
};