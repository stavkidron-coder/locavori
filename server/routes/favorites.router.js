const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route template
 */
router.post('/:id', (req, res) => {
    const makerId = Number(req.params.id);
    const profileId = req.user.id; 

  queryText = `INSERT INTO "tbl_favorites" ("profile_id", "maker_id") VALUES($1, $2);`;
  pool.query(queryText, [profileId, makerId])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR in Favorite post:', error);
        res.sendStatus(500);
    });
});

module.exports = router;