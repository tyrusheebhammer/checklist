const fs = require('fs');
var fileName = 'assignment-data.json';

var read = function (){
    try{
        var noteString = fs.readFileSync(fileName);
        return JSON.parse(noteString);
    } catch(e) {
        return [];
    }
};

var write = function(data){
    fs.writeFileSync(fileName, JSON.stringify(data));
};

module.exports = {
    read,
    write
};