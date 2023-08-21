const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('.routes/apiRoutes');
const htmlRoutes = require('.routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//url json and urlencoded

app.use(express.static('public'));
// public folder

app.use('/api', apiRoutes);
app.use('/html', htmlRoutes);
// api routes

app.listen(PORT, () => {
    console.log(`Server is now listening on PORT: ${PORT}`)
})