const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    const queryText = `
    UPDATE "tbl_artisans"
    SET "approved_maker" = TRUE, "pending_maker" = FALSE
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