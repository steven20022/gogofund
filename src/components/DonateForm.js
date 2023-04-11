import React, { useState } from "react";
import Stripe from "stripe";

const stripe = Stripe("pk_test_51MvhnUIk1O3K7lNJcodnVw7btQUs0UbG00LedY3n3yAcdABvS02SmQSmeFnPm8nuG7tm5y3jJl9HOe3WpGyPEHnf00YNCKBHBH");
const DonateFormComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
    const [cvc, setCvc] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: {
            number: cardNumber,
            exp_month: expiryMonth,
            exp_year: expiryYear,
            cvc: cvc,
        },
        billing_details: {
            name: name,
            email: email,
        },
        });
    
        if (error) {
        console.log(error);
        } else {
        console.log(paymentMethod);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </label>
        <label>
            Email
            <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
        </label>
        <label>
            Card Number
            <input
            type="text"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            />
        </label>
        <label>
            Expiry Month
            <input
            type="text"
            value={expiryMonth}
            onChange={(event) => setExpiryMonth(event.target.value)}
            />
        </label>
        <label>
            Expiry Year
            <input
            type="text"
            value={expiryYear}
            onChange={(event) => setExpiryYear(event.target.value)}
            />
        </label>
        <label>
            CVC
            <input
            type="text"
            value={cvc}
            onChange={(event) => setCvc(event.target.value)}
            />
        </label>
        <button type="submit">Pay Now</button>
        </form>
    );
      
}

export default DonateFormComponent