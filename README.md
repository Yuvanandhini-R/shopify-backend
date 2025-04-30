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

### 1. Clone the Repository

```bash
git clone https://github.com/Yuvanandhini-R/shopify-backend.git
cd shopify-backend

⚙️ Project Setup & Development Workflow
This project was built using Node.js, Express, Firebase Realtime Database, and Resend for email notifications. Below is a structured overview of the setup process:

🔧 Step-by-Step Setup
Initialize the Node.js Project

bash
Copy
Edit
npm init -y
Install Required Dependencies Install essential backend and integration packages:

bash
Copy
Edit
npm install express body-parser dotenv firebase-admin
npm install resend
Configure Firebase

Create a new Firebase project from the Firebase Console.

Enable the Realtime Database in Testing Mode.

Navigate to Project Settings > Service Accounts and generate a Private Key.

Download the private key JSON file and place it in your project directory.

Rename the file to:

Copy
Edit
firebaseserviceAccount.js
Set Up Firebase Configuration

Create a new file called firebaseConfig.js.

In this file, initialize Firebase using the private key and paste your Realtime Database URL from the Firebase console.

Create the Main Application Entry Point

Create a file named index.js.

This is where you define your core logic, including webhook handling, database interactions, and email notifications.

Add Environment Variables

Create a .env file to securely store sensitive data such as:

ini
Copy
Edit
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=admin@example.com
▶️ Running the Project
Use the following command to start the server:

bash
Copy
Edit
node index.js
