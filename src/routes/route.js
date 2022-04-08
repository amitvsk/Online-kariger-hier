const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/GET/movies', function(req, res) {
  //1 problem  
    let movies = ['sole','karan arjun','dhamal','the kashmir file']
    
    res.send(movies)
});
router.get('/GET/movies/:indexNumber', function(req, res) {
  //2 problem  
    let movies = ['sole','karan arjun','dhamal','the kashmir file']
    let id = req.params.indexNumber
     if(id < movies.length) {
         res.send(movies[id -1])
     } else {
// 3 problem
     res.send('Use a valid index')    
     }
});
//4 problem
router.get('/GET/films', function (req, res) {

    let mv = [ {
        "id": 1,
        "name": 'The Shining'
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
    res.send(mv)
});
//5 problem
router.get('/GET/films/:filmld', function (req, res) {

  let mvlist = [ {
      "id": 1,
      "name": 'The Shining'
     }, {
      "id": 2,
      "name": "Incendies"
     }, {
      "id": 3,
      "name": "Rang de Basanti"
     }, {
      "id": 4,
      "name": "Finding Nemo"
     }]
     let filmId = req.params.filmld

     if (filmId<mvlist.length){
         res.send(mvlist[filmId-1])
     } else {
         res.send('No movie exists with this id')
     }

});




module.exports = router;
// adding this comment for no reason