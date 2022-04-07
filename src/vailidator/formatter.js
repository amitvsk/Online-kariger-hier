let trim = function (){
    var text = 'This sentence has functionUp.';
//the text is trim
    var trim = text.trim();
// change to lower case.'
    var lower = text.toLowerCase();
// change to upper case.'
    var upper = text.toUpperCase();
    console.log(trim);
    console.log(lower);
    console.log(upper);
}

module.exports.trim = trim;