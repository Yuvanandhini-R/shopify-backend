# 🛒 ShopiNotify — Shopify Order Webhook Listener & Admin Notifier

**ShopiNotify** is a lightweight Node.js backend service that listens to real-time Shopify order events, stores the order data in Firebase Realtime Database, and sends email notifications to the store administrator using Resend.

This project demonstrates backend integration, third-party API configuration, and real-time automation.

---

## 🎯 Project Purpose

Whenever a user places an order on a Shopify store:

1. A **Shopify webhook** triggers the backend.
2. The **order data** is stored in Firebase Realtime Database.
3. An **email notification** is sent to the site admin via Resend, alerting them instantly.

This ensures reliable order logging and immediate admin awareness.

---

## ⚙️ Project Setup Instructions
This project is a Node.js-based backend service that integrates Firebase for data storage and Resend for email services. It is structured for clarity, environment variable security, and ease of development.

🚀 Getting Started
Follow the steps below to set up and run the project locally.

1. Initialize the Project
bash
Copy
Edit
npm init -y
2. Install Dependencies
Install the necessary packages:

bash
Copy
Edit
npm install express body-parser dotenv firebase-admin
npm install resend
🔧 Firebase Setup
Go to the Firebase Console and create a new project.

Enable Realtime Database in Testing Mode.

In the Project Settings, navigate to the Service Accounts tab.

Click Generate new private key, which will download a JSON file.

Rename and move this file to your project directory as:

pgsql
Copy
Edit
firebaseserviceAccountKey.json
⚙️ Firebase Configuration
Copy the Realtime Database URL from your Firebase project.

Create a file named firebaseConfig.js in the root of your project.

Use the following structure to configure Firebase:

js
Copy
Edit
// firebaseConfig.js
const admin = require("firebase-admin");
const serviceAccount = require("./firebaseserviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com", // Replace with your URL
});

module.exports = admin;
📝 Environment Variables
Create a .env file in the root directory to store sensitive information like API keys:

env
Copy
Edit
RESEND_API_KEY=your_resend_api_key_here
Make sure to add .env to your .gitignore file.


### 1. Clone the Repository

```bash
git clone https://github.com/Yuvanandhini-R/shopify-backend.git
cd shopify-backend

