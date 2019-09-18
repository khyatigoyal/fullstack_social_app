const express = require('express');
const connectDB = require('./config/db');
const app = express();
//connect Database
connectDB();

app.get('/', (req, res) => res.send('APi Running!'));

app.use('/apis/users', require('./routes/apis/users'));
app.use('/apis/auth', require('./routes/apis/auth'));
app.use('/apis/posts', require('./routes/apis/posts'));
app.use('/apis/profile', require('./routes/apis/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
