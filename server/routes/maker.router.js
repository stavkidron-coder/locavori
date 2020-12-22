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

router.get('/filter', async (req, res) => {
  let bussinessArray = req.query.business.split(',');
  let deliveryArray = req.query.delivery.split(',');
  let productArray = req.query.product.split(',');
  let resultArray = [];
    const queryText = 'SELECT * FROM "tbl_artisans" where "business_type" = $1;';
    for (let i = 0; i < bussinessArray.length; i++){
      try {
         var result = await pool.query(queryText, [bussinessArray[i]])
         resultArray.push(result.rows)
      } catch (error) {
        res.sendStatus(500);
        return
      }
    }
    return res.send(resultArray);
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;