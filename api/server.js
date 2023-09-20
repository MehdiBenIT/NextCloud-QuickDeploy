const express = require('express');
const app = express();

app.use(express.json());

app.post('/configure-nc', (req, res) => {
    const ConfigData = req.body;
    console.log("Received Nextcloud Configuration:", ConfigData);
    res.status(200).json({ message: 'Configuration received' });
});

const PORT = process.env.port || 3010;
app.listen ( PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});