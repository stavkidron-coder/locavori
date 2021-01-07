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

router.get('/:id', (req, res) => {
  const queryText = `
  SELECT * FROM "tbl_artisans"
  WHERE "profile_id" = ${req.params.id}
  `;
  console.log(req.params.id);
  
// AND WHERE "id" = ${req.params.id} 


  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});

router.get('/filter', async (req, res) => {
  let businessArray = req.query.business.split(',');
  let deliveryArray = req.query.delivery.split(',');
  let productArray = req.query.product.split(',');
  let resultArray = [];
    const queryText = 'SELECT * FROM "tbl_artisans" where "business_type" = $1;';
    for (let i = 0; i < businessArray.length; i++){
      try {
         var result = await pool.query(queryText, [businessArray[i]])
         resultArray.push(result.rows)
      } catch (error) {
        res.sendStatus(500);
        return
      }
    }
    return res.send(resultArray);
  });

  router.put('/:id', (req, res) => {
    const queryText = `
    UPDATE "tbl_artisans"
    SET "approved_maker" = false
    where "id" = $1;`;
    pool.query(queryText, [ req.params.id])
      .then((result) => {
        res.sendStatus(200)
      }).catch((error) => {
        console.log('error in put', error);
        res.sendStatus(500);
      })
  })

module.exports = router;