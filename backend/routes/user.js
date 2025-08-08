const router = require('express').Router();
const User = require('../models/User');
const { authenticate, authorizeRoles } = require('../middleware/authMiddleware');

// get current user
router.get('/me', authenticate, (req, res) => {
  res.json(req.user);
});

// list mechanics (public)
router.get('/mechanics', async (req, res) => {
  const mechanics = await User.find({ role: 'mechanic' }).select('-passwordHash');
  res.json(mechanics);
});

// toggle availability (mechanic)
router.post('/me/availability', authenticate, authorizeRoles('mechanic'), async (req, res) => {
  req.user.available = !!req.body.available;
  await req.user.save();
  res.json(req.user);
});

module.exports = router;
