const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "tbl_artisans";';
  pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        res.sendStatus(500);
        console.log('error in GET makers', error);
    });
});

router.get('/filter', (req, res) => {
  console.log(req.query)
    // const queryText = 'SELECT * FROM "tbl_artisans" where "business_type" = $1;';
    // pool.query(queryText)
    //   .then(result => {
    //       res.send(result.rows);
    //   }).catch(error => {
    //       res.sendStatus(500);
    //       console.log('error in filter makers GET', error);
    //   });
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;