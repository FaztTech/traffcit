const express = require('express');
const router = express.Router();

router.get('/map', (req, res) => {
  res.render('traffic-light-map');
});

export default router;
