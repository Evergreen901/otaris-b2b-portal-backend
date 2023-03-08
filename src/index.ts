import * as dotenv from 'dotenv';
dotenv.config();

const { MONGODB_URI, PORT } = process.env;
import mongoose, { connect } from 'mongoose';
import seed from './seeder';

import express from 'express';
const webhooks = require('./api/webhooks');
const requests = require('./api/requests');
const accounts = require('./api/accounts');
const quotes = require('./api/quotes');

const app = express();
app.use(express.raw({ type: 'application/json' }));

app.get('/', (req, res) => {
  res.send('Otaris B2B portal backend')
});

app.use('/api/webhooks', webhooks);
app.use('/api/requests', requests);
app.use('/api/accounts', accounts);
app.use('/api/quotes', quotes);

run().catch(err => console.log(err));

async function run() {
  mongoose.set('strictQuery', true);
  
  console.log("Connecting to db at ", MONGODB_URI)
  connect(MONGODB_URI as string, async () => {
    console.log("connected on db successfully");
    
    await seed();
  });

  app.listen(parseInt(PORT!), () => {
    console.log(`server running on port ${PORT}`);
  });
}