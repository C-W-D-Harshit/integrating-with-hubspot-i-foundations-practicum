# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a HubSpot Academy practicum project for the "Integrating With HubSpot I: Foundations" certification. It's a Node.js Express application that demonstrates HubSpot API integration with custom objects.

## Commands

```bash
# Install dependencies
npm install

# Run the application
node index.js
# App runs on http://localhost:3000

# No test framework is configured (package.json shows basic test script)
npm test  # Will show "Error: no test specified"
```

## Architecture

- **Express Server**: Single `index.js` file contains all routes and server logic
- **View Engine**: Pug templates in `views/` directory
- **Static Assets**: CSS files in `public/css/`
- **HubSpot Integration**: Uses Axios for API calls to HubSpot CRM v3 endpoints

## Key Implementation Details

### HubSpot API Integration
- Private app access token stored in `PRIVATE_APP_ACCESS` variable (index.js:11)
- Sample code provided for GET and POST operations with contacts API
- Custom objects API integration is the main requirement

### Required Routes (from TODO comments)
1. Homepage route: Display custom object data using new Pug template
2. Form route: Render form for creating/updating custom objects  
3. POST route: Process form submissions and redirect to homepage

### File Structure
```
├── index.js           # Main Express server with routes
├── package.json       # Dependencies: express, axios, pug
├── views/
│   └── contacts.pug   # Sample Pug template (commented out)
└── public/
    └── css/
        └── style.css  # Styling for cards and forms
```

## Security Notes

- **CRITICAL**: Never commit the private app access token to the repository
- The token should be added to `PRIVATE_APP_ACCESS` variable but kept out of version control
- Project requires a HubSpot developer test account, not production account