const mongoose = require('mongoose')

const tansactionSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    amount: {
        type:  Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Transaction', tansactionSchema)