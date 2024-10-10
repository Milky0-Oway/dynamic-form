const express = require('express');
const cors = require('cors');
const { contactRoutes } = require('./routes/contactRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/contacts', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
