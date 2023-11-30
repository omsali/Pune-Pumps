const mongoose = require('mongoose');
const { Schema } = mongoose;

const PumpsSchema = new Schema({
    pumpType: {
        type: String,
        required: true
    },
    pumpSize: {
        type: String,
        required: true
    },
    moc: {
        type: String,
        required: true
    },
    so: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    KSBInvoice: {
        type: String,
        required: true
    },
    KSBInvoiceDate: {
        type: Date,
        // required: true

    }
});

module.exports = mongoose.model("pumps", PumpsSchema);