# The Social Network

## Table of Contents

- [About](#about)
- [Features and Stack](#features-and-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Future Work](#challenges)
- [Create React App](#bootstrapped-with-create-react-app)

## About

**Buy Buy** is a mobile friendly e-commerce web-service to sell and recommend products to users. It uses stripe to receive secured payments.
The service is targeted for companies who wants to sell their products online from their own unique custom website.

## Features and Stack

### Features

- fully responsive with support for mobile, tablet and desktop device to increase traffic.
- product cart with animation to increase user interaction and retention.
- add, remove product in cart.
- increment, decrement product quantity in cart
- promotion bar to show special offers.
- featured bar to show special product.
- Marquee showing product recommendation.
- Multi-step form with validation to obtain user information.
- stripe payment system to receive secured online payment.
- react useState and Context hook to persist and share state in the app.
- react useEffect hook and axios to consume external APIs.
- react-hook-form to maintain form states.
- end-end-tested with cypress.
- documented for code maintainability.
- fully automated CI / CD pipeline implemented with github and github actions.
- deployed and hosted in firebase.

### Stack

- React
- React Router
- React Hook Form
- Material UI
- Axios
- cypress
- firebase
- github
- github actions

## Screenshots

- Landing Page (desktop view)

<img src="screenshots/landing-page-desktop.png" width="400" height="500">

- Cart and Product Recommendation page (tablet view)

<img src="screenshots/recommendation-tablet.png" width="400" height="500">

- User Information with Form Validation (mobile view)

<img src="screenshots/user-information-mobile.png" width="375" height="800">

- Checkout Stripe (mobile view)

<img src="screenshots/checkout-stripe-mobile.png" width="375" height="500">

## Getting started

Below you'll find the instructions for setting up the project locally

### Clone repo and install dependencies

```bash
# Clone the repo
gh repo clone neuralchemist/BuyBuy

# Install dependencies
cd BuyBuy
npm install
```

### Add env variables

Create `.env.local` file, and add stripe keys

### Start the app

```bash
# Start development server
npm start
```

The app should be running at: [http://localhost:3000](http://localhost:3000/)

## Future Work

- Add caching mechanism using react query to reduce network request when user hop from pages.
- cache user cart using local storage or react query so that user can close browser and still have them when they revisit.
- create an account with using email and password
- authenticate using Facebook, GitHub or Google
- fully functional stripe payment implemented with firebase cloud.

These are some of the features I want to implement or reuse in this projects from some of my other projects.

## Bootstrapped with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For the detailed description of available scripts see [CRA Documentation](https://create-react-app.dev/docs/available-scripts)
