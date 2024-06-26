const express = require('express');
const connectDB = require('./db/db_connextion');
const router = require('./routes/v1');

const app = express();


const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server is running on port " ,PORT);
});


app.use(express.json());


app.use("/v1",router)
connectDB()
