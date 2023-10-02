# Documentation

## Software Requirements
- Node
- npm

## Running this app locally
For testing this application on your machine, clone this repo and follow these steps:
- Install the dependencies with `npm install`
- Run the application in dev mode using `npm start` (default [localhost:3000](localhost:3000))
- Alternatively, build the project into the release with `npm build` and then serve the build (using `serve` from the serve npm package for example)

# Application Stack
## [Frontend](https://github.com/ThaTeo/scudo-reloaded-frontend)
Hosted with Firebase Hosting
- TypeScript React (Create React App)
- Chakra UI
## [Backend](https://github.com/ThaTeo/esp-backend)
A container running on a VPS with Traefik  
- Flask (Python)
- Firebase API
## [Hardware](https://github.com/ThaTeo/esp-script)
- Esp32 WROOM (Espressif dev kit C)
- DHT 11
- Photoresistor
## [Database](https://firebase.google.com/docs/firestore)
- Cloud Firestore
