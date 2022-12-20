const { customErrorMessage, customErrorHandle } = require('./global/errorHandling');
const { roleManage } = require('./global/roleManagement');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

app.use([express.json()]);
app.use(cors());
app.use('/api/v1', require('./routers/router'));

app.get('/health', (req, res) => {
    res.send('running..');
});

app.use([customErrorMessage, customErrorHandle]);

const port = process.env.PORT || 3000;
const local = 'mongodb://localhost:27017';
const cloud = 'mongodb+srv://<username>:<password>@royal-tech-db-01.dhisd.mongodb.net';
// mongoose
//     .connect(`${local}/bup`, { useNewUrlParser: true })
//     .then(() => {
//         console.log('db is connected..!!!');
//         app.listen(port, () => {
//             console.log(`Express is running on port : ${port}`);
//         });
//     });


app.listen(port, async () => {
    await mongoose.connect(`${local}/bup`, { useNewUrlParser: true })
    console.log(`Express is running on port : ${port}`);
});