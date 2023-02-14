const express = require('express')
const router = express.Router();
const cors = require('cors');

const {
    newTransaction,
    allTransaction,
} = require('../controllers/transactionController')

router.route('/transactions').post(cors(), newTransaction);
router.route('/transactions/all').get(cors(),allTransaction);

module.exports = router;