require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./firebase');
const { Resend } = require('resend');

const app = express();
app.use(bodyParser.json());

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/webhook/orders/create', async (req, res) => {
  const order = req.body;

  const summary = [
    "🛒 New Order Received",
    `👤 Customer: ${order.customer?.first_name || 'N/A'} ${order.customer?.last_name || ''}`,
    `📦 Total: $${order.total_price}`,
    `📋 Items: ${order.line_items?.map(i => `${i.quantity}x ${i.name}`).join(', ') || 'N/A'}`
  ].join('\n');
  
  // 1. Store to Firebase
  await db.ref('orders').push({
    order_id: order.id,
    customer: order.customer,
    total_price: order.total_price,
    line_items: order.line_items,
    created_at: order.created_at,
    timestamp: Date.now()
  });

  // 2. Send Email using Resend
  try {
    await resend.emails.send({
      from: process.env.SENDER_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: '🛍️ New Shopify Order',
      text: summary,
      html: `<p>${summary.replace(/\n/g, '<br>')}</p>`
    });
    console.log('Email sent!');
  } catch (err) {
    console.error('Email error:', err.message);
  }

  res.status(200).send('✅ Order received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));