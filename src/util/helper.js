let log = function() {
    console.log("the current date and time:-")
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    console.log(formatted);
    console.log("Thorium, W3D1, the topic for today is Nodejs module system");
}

module.exports.log = log;