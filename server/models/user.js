const { Schema, model } = require('mongoose');

const GeoSchema = new Schema({
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" }
});

const AddressSchema = new Schema({
    city: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: String, required: true }, // 221B Baker St.
    apartment: { type: String }, // g4 or 50
});

const UserScema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: AddressSchema,
    location: GeoSchema
})

module.exports = model('user', UserScema);