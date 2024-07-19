const Product = require('../models/productModel');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../middleware/CatchAsyncError');

//check
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "mayank",
    });
});
