const Request = require('../models/Request');
const User = require('../models/User');

// Create request (user reports breakdown)
exports.createRequest = async (req, res) => {
  try {
    const { breakdownLocation } = req.body;
    const customerId = req.user._id;
    const reqDoc = new Request({ customer: customerId, breakdownLocation });
    await reqDoc.save();
    res.status(201).json(reqDoc);
  } catch (err) {
    res.status(500).json({ message: 'Create request error', error: err.message });
  }
};

// Admin: assign mechanic (or auto-assign by nearest available mechanic)
exports.assignMechanic = async (req, res) => {
  try {
    const { requestId, mechanicId } = req.body;
    const request = await Request.findById(requestId);
    if (!request) return res.status(404).json({ message: 'Request not found' });
    const mechanic = await User.findById(mechanicId);
    if (!mechanic || mechanic.role !== 'mechanic') return res.status(404).json({ message: 'Mechanic not found' });
    request.mechanic = mechanicId;
    request.status = 'assigned';
    await request.save();
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: 'Assign error', error: err.message });
  }
};

// Mechanic updates status and optionally location
exports.updateRequestStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status, location, etaMinutes } = req.body;
    const request = await Request.findById(requestId);
    if (!request) return res.status(404).json({ message: 'Request not found' });
    // only assigned mechanic can update
    if (request.mechanic && request.mechanic.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    if (status) request.status = status;
    if (etaMinutes !== undefined) request.etaMinutes = etaMinutes;
    if (location) request.breakdownLocation = location;
    await request.save();
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: 'Update error', error: err.message });
  }
};

// Get request by id (for tracking)
exports.getRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Request.findById(id).populate('customer mechanic', '-passwordHash');
    if (!request) return res.status(404).json({ message: 'Not found' });
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: 'Get request error', error: err.message });
  }
};

// List requests for current user (customer) or mechanic
exports.listForUser = async (req, res) => {
  try {
    const user = req.user;
    let list;
    if (user.role === 'user') {
      list = await Request.find({ customer: user._id }).populate('mechanic', '-passwordHash');
    } else if (user.role === 'mechanic') {
      list = await Request.find({ mechanic: user._id }).populate('customer', '-passwordHash');
    } else {
      list = await Request.find().populate('customer mechanic', '-passwordHash');
    }
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: 'List error', error: err.message });
  }
};
