
const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shopify-31999-default-rtdb.firebaseio.com/"
});

const db = admin.database();
module.exports = db;
