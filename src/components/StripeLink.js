import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigation } from 'react-router';

function StripeLinkComponent(props) {

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  app.post('/create-stripe-link', async (req, res) => {
    const { amount, currency } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency,
              unit_amount: amount,
              product_data: {
                name: 'My Product',
              },
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.BASE_URL}/success.html`,
        cancel_url: `${process.env.BASE_URL}/cancel.html`,
      });
      res.json({ url: session.url });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  });
  
    return (
      <div>
        <button onClick={createStripeLink}>Donate</button>
        {linkUrl && (
          <p>
            Your payment link is: <a href={linkUrl}>{linkUrl}</a>
          </p>
        )}
      </div>
    );
  }

  export default StripeLinkComponent