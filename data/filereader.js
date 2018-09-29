const fs = require('fs');

var FileReader = function () {
    this.fileName = 'assignment-data.json';
};

FileReader.prototype.read = function (){
    try{
        var noteString = fs.readFileSync();
        return JSON.parse(noteString);
    } catch(e) {
        return [];
    }
};

FileReader.prototype.write = function(data){
    fs.writeFileSync(this.fileName, JSON.stringify(data));
};