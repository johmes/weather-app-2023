# weather-app-2023

>Build and deploy a web application which shows weather forecast for today and next three days at least in three diferent cities.

I made this app using React.
It runs on Windows and should run on Linux and Mac OS without a too, but I haven't tested though.

You can find the app hosted in https://weather-app-2023.herokuapp.com/

## Get started
Download yarn with `npm i yarn`
Download dependencies and packages with `yarn` in root.
Node version needs to be >=18 and yarn >=1.22.19

## Packages to install
dependencies
  - @fortawesome/fontawesome-svg-core
  - @fortawesome/free-solid-svg-icons
  - @fortawesome/react-fontawesome
  - axios
  - react
  - react-dom
  - react-router-dom

devDependencies
  - @testing-library/jest-dom
  - @testing-library/react
  - @testing-library/user-event
  - react-scripts


## Run locally
To install required dependencies and start server run  `yarn`
To make a build run `yarn run build`
To run app run `yarn run start` then open localhost:3000 in your browser.

## Description
This web app shows an option of four pre-selected cities. You can view the weather forecast of every city by clicking on it. Default view is todays weather but you can toggle between three day weather and one day. The weather data is fetched as JSON from https://open-meteo.com/en API with axios. The app is running live on Heroku platform. This app is purely frontend.

## What to improve
- OneDay and ThreeDays components can be made to a one reusable component.
- Make own file for API handling.

