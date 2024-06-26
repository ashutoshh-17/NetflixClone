# Netflix UI Clone using ReactJS and Firebase

This repository contains a clone of Netflix's user interface and user experience, built using React.js for the frontend and Firebase for the backend. The project aims to replicate the look and feel of Netflix, providing a seamless experience across different devices.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Mockup](#mockup)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication using Firebase Authentication
- Firestore database for storing user data and movie information
- Responsive design for desktop, tablet, and mobile views
- Video playback with a custom video player
- Movie data fetched from TMDB API

## Installation
To get a local copy up and running, follow these steps:

1. Clone the repository
    ```sh
    git clone [https://github.com/ashutoshh-17/NetflixClone]
    ```
2. Navigate to the project directory
    ```sh
    cd Netflix-UI-UX-clone-using-react-and-Firebase
    ```
3. Important steps to Run/Install dependencies
    ```sh
    step 1-npm create vite@latest
    step 2 -->> select react -->> select javascript
    step 3 npm install
    step 4 npm run dev (very imp command / main command that runs the project)
    .
    .
    .
    .
    for dependencies of firebase and toastify
    npm install firebase react-firebase-hooks
    npm i react-toastify
    ```


    **Note:** The TMDB API key may not be available in India. You can work around this by using a VPN to access the TMDB API.

5. Start the development server
    ```sh
    npm start
    ```

## Usage
Once the development server is running, you can view the application in your browser at `http://localhost:5173`.

## Deployment
This project is deployed using Vercel. You can visit the deployed site at:

[NetflixClone](https://netflix-clone-81.vercel.app/login)

## Cross Platform Compatability
The application is designed to be fully responsive and looks great on any device. 
![readme-img](https://github.com/ashutoshh-17/NetflixClone/blob/main/screenshots/readme-img.png)


## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements
Special thanks to the creator of the tutorial GreatStack that inspired this clone. You can check out the tutorial [here](https://youtu.be/YQQD67N5pi0?si=TTsKtaUV_Cph2SF8).
