const router = require('express').Router();
const { authenticate, authorizeRoles } = require('../middleware/authMiddleware');
const controller = require('../controllers/requestController');

router.post('/', authenticate, controller.createRequest); // user creates request
router.post('/assign', authenticate, authorizeRoles('admin'), controller.assignMechanic); // admin assigns
router.put('/:requestId', authenticate, authorizeRoles('mechanic'), controller.updateRequestStatus); // mechanic updates
router.get('/:id', authenticate, controller.getRequest);
router.get('/', authenticate, controller.listForUser);

module.exports = router;
