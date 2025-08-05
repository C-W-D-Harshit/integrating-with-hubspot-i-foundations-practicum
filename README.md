# Welcome to the Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**Put your HubSpot developer test account custom objects URL link here:** https://app.hubspot.com/contacts/l/objects/your-custom-obj-number/views/all/list

## Application Overview
This Node.js application demonstrates HubSpot API integration for managing contacts. It includes:
- Homepage displaying all contacts in a responsive table
- Form for creating new contacts with validation
- HubSpot CRM v3 API integration
- Professional UI with HubSpot orange theme (#ff7a59)

## Setup Instructions
1. Clone this repository
2. Run `pnpm install` to install dependencies
3. Copy `.env.example` to `.env` and add your HubSpot private app access token:
   ```
   HUBSPOT_ACCESS_TOKEN=your_actual_token_here
   ```
4. Run `node index.js` or `pnpm start`
5. Open http://localhost:3000 in your browser

## Features
- **Homepage (/)**: Displays contacts table with ID, First Name, Last Name, Email, Phone, Company, Job Title, and Created Date
- **Add Contact (/update-cobj)**: Form to create new contacts with firstname and lastname as required fields
- **API Integration**: Uses HubSpot CRM v3 API for GET and POST operations
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Responsive Design**: Mobile-friendly interface that works on all devices

___
## Tips:
- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account and include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.
- DO NOT ADD YOUR PRIVATE APP TOKEN TO YOUR REPOSITORY. 

## Pre-requisites:
- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

## Requirements
- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least two new routes in your index.js file and one new pug template for the homepage.
- You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.
