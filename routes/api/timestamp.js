const router = require('express').Router();
/**
 * Routes
 */
// GET /api/timestamp
router.get('/', (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  });
});
//GET /api/timestamp/2015-12-12
router.get('/:date_string', (req, res) => {
  if (req.params.date_string.match(/^(\d)+$/)) {
    var date = req.params.date_string;
    return res.json({
      unix: new Date(Number(date)).getTime(),
      utc: new Date(Number(date)).toUTCString()
    });
  }
  if (Date.parse(req.params.date_string)) {
    res.json({
      unix: new Date(req.params.date_string).getTime(),
      utc: new Date(req.params.date_string).toUTCString()
    });
  } else {
    res.json({
      error: "Invalid Date"
    })
  }
});

module.exports = router;