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

// router.get('/:filters', (req, res) => {
//     const queryText = 'SELECT * FROM "tbl_artisans";';
//     pool.query(queryText)
//       .then(result => {
//           res.send(result.rows);
//       }).catch(error => {
//           res.sendStatus(500);
//           console.log('error in GET makers', error);
//       });
//   });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;