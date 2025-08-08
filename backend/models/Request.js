// Vehicle Care Backend - Request Model
// Defines service request schema for MongoDB
const { model, Types } = require('mongoose');
const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  customer: { type: Types.ObjectId, ref: 'User', required: true },
  mechanic: { type: Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'assigned', 'accepted', 'enroute', 'completed', 'cancelled'], default: 'pending' },
  breakdownLocation: { lat: Number, lng: Number },
  etaMinutes: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Request', RequestSchema);
