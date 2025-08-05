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
            contacts: contacts || [],
            success: req.query.success
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

// POST route for contact creation
app.post('/update-cobj', async (req, res) => {
    try {
        if (!HUBSPOT_ACCESS_TOKEN) {
            return res.redirect('/update-cobj?error=HubSpot access token not configured');
        }

        const { firstname, lastname, email, phone, company, jobtitle } = req.body;

        // Validate required fields
        if (!firstname || !lastname) {
            return res.redirect('/update-cobj?error=First name and last name are required');
        }

        // Prepare contact data
        const contactData = {
            properties: {
                firstname: firstname.trim(),
                lastname: lastname.trim()
            }
        };

        // Add optional fields if provided
        if (email && email.trim()) contactData.properties.email = email.trim();
        if (phone && phone.trim()) contactData.properties.phone = phone.trim();
        if (company && company.trim()) contactData.properties.company = company.trim();
        if (jobtitle && jobtitle.trim()) contactData.properties.jobtitle = jobtitle.trim();

        const createContactUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
        const headers = {
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        };

        await axios.post(createContactUrl, contactData, { headers });
        
        res.redirect('/?success=Contact created successfully');
    } catch (error) {
        console.error('Error creating contact:', error.message);
        
        let errorMessage = 'Failed to create contact. Please try again.';
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }
        
        res.redirect(`/update-cobj?error=${encodeURIComponent(errorMessage)}`);
    }
});

// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));