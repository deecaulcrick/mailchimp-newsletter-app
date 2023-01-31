# Newsletter Signup App
A simple newsletter signup app built with Node.js, Express, and the Mailchimp API.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- npm
- Mailchimp API key

### Installation
1. Clone the repository

`git clone https://github.com/username/newsletter-signup.git`

2. Navigate to the project directory

`cd newsletter-signup`

3. Install the dependencies

`npm install`
4. Create a .env file in the root of the project and add your Mailchimp API key

`MAILCHIMP_API_KEY=your_api_key`

5. Get your Audience ID and add it to the .env file

`MAILCHIMP_AUDIENCE_ID=your_audience_id`

### Usage
1. Start the development server

`npm start`

2. Open http://localhost:3000 in your browser

3. Fill out the form and submit

4. Check your Mailchimp list for the new subscriber

### Customizing the App
The app.js file contains the core functionality of the newsletter signup app. You can customize the app by editing the HTML and CSS files in the public folder and the form handling logic in the app.js file.

### Deployment
This app can be deployed to a production server with a few additional steps.

1. Build the app for production

`npm run build`

2. Start the production server

`npm run start:prod`

## Built With
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Mailchimp API](https://developer.mailchimp.com/docs/mailchimp-api-3/) - Mailchimp's API that allows you to manage your Mailchimp account and data

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## Authors
- [Dee Caulcrick}(https://github.com/deecaulcrick)
