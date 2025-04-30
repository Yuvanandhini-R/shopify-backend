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
