const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    }
});

module.exports = mongoose.model('Product', productSchema);