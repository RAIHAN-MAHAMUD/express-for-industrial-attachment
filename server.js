const express = require('express');
const app = express();

app.use([express.json()]);

app.use('/api/v1', require('./routers/router'));

app.get('/health', (req, res) => {
    res.send('running..');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express is running on port : ${port}`);
});