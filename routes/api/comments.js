var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET comments listing. */
router.get('/', function(req, res, next) {
  fs.readFile('db/comments.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

module.exports = router;
