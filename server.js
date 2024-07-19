require('dotenv').config();

//requiring dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//intiallize express
const app = express();


//requiring routers
const errorMiddleware = require('./middleware/CatchAsyncError');

//requiring routers
const ProductRouter = require('./routes/productRouter');

app.use(express.json({ limit: '20mb'}));

//basic api route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API service running',
    });
});

//using routers
app.use('/api/products', ProductRouter);

//using other middlewares
app.use(cookieParser);

//starting server
const server = app.listen(process.env.PORT || 5000, () => {
    console.log('server running');
});

//unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Server shutting dow due to unhandled promies rejection`);
    server.close(() => {
        process.exit(1);
    });
});