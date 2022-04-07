let chunk = function() {
    // _.defaults['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // _.partition(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], index => index%4);
    //
    const chunkSize = 4;
    const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const groups = arr.map((e, i) => { 
     return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
    }).filter(e => { return e; });
    console.log({arr, groups})
}

let tail = function() {
    let arr = [1,2,3,4,5,6,7,8,9,10]

    let odds = arr.filter(n => n%2);

    console.log(odds);
}

let fromPair = function() {
  var arr1 =  ["horror","The Shining"];
  var arr2 = ["drama","Titanic"];
  var arr3 = ["thriller","Shutter Island"];
  var arr4 = ["fantasy","Pans Labyrinth"];
  var arr5 = ["Vijendra","Singh"];

  const arr = [...arr1,...arr2, ...arr3, ...arr4, ...arr5];
  const unique = [ ...new Set(arr)];
  console.log(unique);
}

module.exports.fromPair = fromPair;

module.exports.tail = tail;

module.exports.chunk = chunk;