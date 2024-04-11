# Chat Application

This is a chat application frontend built using React, with support for both single-user and multi-user modes.

## Single & Multi-User User Module

### Description

> The single-user module allows one user to send messages. It's a basic chat interface where messages are displayed in chronological order.

> The multi-user module allows multiple users to send and receive messages. It includes features for distinguishing between users and displaying messages from different users in the chat interface.

### Features

- Send messages in real-time.
- View messages in chronological order.

### Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run the commend:
   ```bash
   npm install react-scripts
   ```
5. Run `npm start` to start the development server.
6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Running the Application

To run the Single user application, follow these steps:

1. For single-user mode, import and render the `<App_single/>` component in the `index.js` module.

   ```jsx
   import React from "react";
   import ReactDOM from "react-dom";
   import App_single from "./App_single";
   import "./index.css";

   ReactDOM.render(
     <React.StrictMode>
       <App_single />
     </React.StrictMode>,
     document.getElementById("root")
   );
   ```

To run the Multi user application, follow these steps:

2. For Multi-user mode, import and render the `<App/>` component in the `index.js` module.

   ```jsx
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";
   import "./index.css";

   ReactDOM.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
     document.getElementById("root")
   );
   ```

## Technologies Used

- React
- JavaScript (ES6)
- CSS

## Credits

This project was created by <a href="https://github.com/mukilan88" target="_blank">Mukilan Selvaraj</a>.
