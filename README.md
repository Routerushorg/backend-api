<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <h1>Firebase API README</h1>
        <p>A guide to understanding and using the Firebase API-based project</p>
    </header>
    <section>
        <h2>1. Overview</h2>
        <p>This project provides a basic setup for a Node.js API using Firebase Authentication and Hapi.js. The API allows users to register, sign in, and sign out via HTTP endpoints.</p>
    </section>
    <section>
        <h2>2. Key Files</h2>
        <ul>
            <li><code>firebase.js</code>: Contains Firebase initialization and authentication utility functions.</li>
            <li><code>routes.js</code>: Defines API routes and their handlers for user registration, login, and logout.</li>
            <li><code>server.js</code>: Sets up and starts the Hapi.js server.</li>
            <li><code>Dockerfile</code>: Defines the containerization process for the application.</li>
        </ul>
    </section>
    <section>
        <h2>3. Firebase Configuration</h2>
        <p>The Firebase configuration is stored in environment variables. The <code>.env</code> file contains sensitive information like:</p>
        <ul>
            <li><code>FIREBASE_API_KEY</code></li>
            <li><code>FIREBASE_AUTH_DOMAIN</code></li>
            <li><code>FIREBASE_PROJECT_ID</code></li>
            <li><code>FIREBASE_STORAGE_BUCKET</code></li>
            <li><code>FIREBASE_MESSAGING_SENDER_ID</code></li>
            <li><code>FIREBASE_APP_ID</code></li>
        </ul>
    </section>
    <section>
        <h2>4. API Endpoints</h2>
        <ul>
            <li><code>GET /</code>: Welcome message for the API.</li>
            <li><code>POST /register</code>: Registers a new user using Firebase Authentication.</li>
            <li><code>POST /signin</code>: Authenticates a user and returns their details.</li>
            <li><code>POST /signout</code>: Signs out a logged-in user.</li>
        </ul>
    </section>
    <section>
        <h2>5. Running the Application</h2>
        <h3>Locally</h3>
        <pre><code>npm install
npm start</code></pre>
        <h3>Using Docker</h3>
        <ol>
            <li>Build the Docker image:</li>
            <pre><code>docker build -t firebase-api .</code></pre>
            <li>Run the container:</li>
            <pre><code>docker run -p 3000:3000 firebase-api</code></pre>
        </ol>
    </section>
    <section>
        <h2>6. Dependencies</h2>
        <ul>
            <li><code>firebase</code>: Firebase SDK for authentication.</li>
            <li><code>@hapi/hapi</code>: Framework for building the HTTP server.</li>
            <li><code>dotenv</code>: For managing environment variables.</li>
        </ul>
    </section>
    <section>
        <h2>7. Notes</h2>
        <p>Ensure the <code>.env</code> file is properly configured before running the application. This file must not be shared publicly as it contains sensitive credentials.</p>
    </section>
</body>
</html>
