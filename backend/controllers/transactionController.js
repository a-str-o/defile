const Transaction = require('../models/tansaction');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create a new Transaction   =>  /transactions
exports.newTransaction = catchAsyncErrors(async (req, res, next) => {
    const {
        productName,
        amount,
    } = req.body;

    const transaction = await Transaction.create({
        productName,
        amount,
        createdAt: Date.now(),
    })

    res.status(200).json({
        success: true,
        transaction
    })
})


// Get all transactions -  =>   /transactions/all 
exports.allTransaction = catchAsyncErrors(async (req, res, next) => {
    const transactions = await Transaction.find()

    res.status(200).json({
        success: true,
        transactions
    })
})