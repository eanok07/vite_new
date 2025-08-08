const router = require('express').Router();
const { authenticate, authorizeRoles } = require('../middleware/authMiddleware');
const Request = require('../models/Request');

// mechanic: list assigned requests
router.get('/assigned', authenticate, authorizeRoles('mechanic'), async (req, res) => {
  const list = await Request.find({ mechanic: req.user._id }).populate('customer', '-passwordHash');
  res.json(list);
});

module.exports = router;
