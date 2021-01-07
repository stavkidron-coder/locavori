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


router.get('/', (req, res) => {
    const userId = req.user.id;

    const queryText = `SELECT * FROM "tbl_favorites"
    JOIN "tbl_artisans" ON "tbl_favorites"."maker_id" = "tbl_artisans"."id"
    WHERE "tbl_favorites"."profile_id" = $1;`;
    pool.query(queryText, [userId])
        .then((result) => {
            console.log('Result from favorite get', result.rows);
            
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR in get favorites', error);
            res.sendStatus(500);
        });
});

module.exports = router;