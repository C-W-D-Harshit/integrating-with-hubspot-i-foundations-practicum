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

// Homepage route with HubSpot contacts API integration
app.get('/', async (req, res) => {
    try {
        if (!HUBSPOT_ACCESS_TOKEN) {
            return res.render('homepage', { 
                title: 'HubSpot Contacts', 
                error: 'HubSpot access token not configured. Please add HUBSPOT_ACCESS_TOKEN to your .env file.' 
            });
        }

        const contactsUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
        const headers = {
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        };

        const response = await axios.get(contactsUrl, { headers });
        const contacts = response.data.results;

        res.render('homepage', { 
            title: 'HubSpot Contacts', 
            contacts: contacts || []
        });
    } catch (error) {
        console.error('Error fetching contacts:', error.message);
        res.render('homepage', { 
            title: 'HubSpot Contacts', 
            error: 'Failed to fetch contacts. Please check your HubSpot access token and try again.',
            contacts: []
        });
    }
});

// Form route for contact creation
app.get('/update-cobj', (req, res) => {
    res.render('updates', { 
        title: 'Add New Contact',
        success: req.query.success,
        error: req.query.error
    });
});

// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));