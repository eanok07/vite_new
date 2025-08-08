const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'mechanic', 'admin'], default: 'user' },
  location: { lat: Number, lng: Number },
  available: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model('User', UserSchema);
