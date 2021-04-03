const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res)=>{
    let queryText=`SELECT * FROM "feedback" ORDER BY "id";`;
    pool.query(queryText).then(result =>{
        res.send(result.rows);
    }).catch(error =>{
        console.log('error getting surveys', error);
        res.sendStatus(500);
    })
})

router.post('/', (req,res)=> {
  let newSurvey=req.body
  let queryText=`INSERT INTO "feedback" ("feeling","understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;  
  pool.query(queryText,[newSurvey.feeling, newSurvey.understanding, newSurvey.support, newSurvey.comments])
    .then(result =>{
        res.sendStatus(200);
    })
    .catch(error =>{
        res.sendStatus(500);
    })
})

module.exports = router;