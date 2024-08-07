const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres this grabs just the genre title and id
  const query = `
    SELECT * FROM "genres"
      ORDER BY "id" ASC;
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;
