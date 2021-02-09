const { Schema, model } = require('mongoose');

const TopicSchema = new Schema({
    type: { type: String, required: true },
    onSlices: { type: [Number], default: [] }
});

const FlagSchema = new Schema({
    glutenFree: { type: Boolean, default: false }
})

const PizzaSchema = new Schema({
    title: { type: String, default: 'Untitled Pizza' },
    topics: [TopicSchema],
    flags: FlagSchema,
    user: { type: Schema.Types.ObjectId, ref: 'user' }
}, {
    timestamps: true
});

module.exports = model('pizza', PizzaSchema);