require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

// Express configuration
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HubSpot API configuration
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

// Basic homepage route structure
app.get('/', (req, res) => {
    res.render('homepage', { title: 'HubSpot Contacts' });
});

// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));