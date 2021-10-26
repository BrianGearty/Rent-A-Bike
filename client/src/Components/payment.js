// Stripe Imports
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import '../style/cardDetailed.css';
import CheckoutForm from "./cardOptions.js";
require('dotenv').config();



// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#000",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": { color: "#000" },
//       "::placeholder": { color: "#87bbfd" },
//     },
//     invalid: {
//       iconColor: "#000",
//       color: "#000",
//     },
//   },
// };

// const CardField = ({ onChange }) => (
//   <fieldset className="FormGroup">
//     <div className="FormRow">
//       <CardElement options={CARD_OPTIONS} onChange={onChange} />
//     </div>
//   </fieldset>
// );
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
console.log("stripe Promise", stripePromise)

const InjectedCheckoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};


const Payment = () => {
  let location = useLocation();
  let total= location.pathname.slice(9);
  const [totalState, setTotalState] = useState(total)

  return (
    <div className="stripe-container">
      
      <Elements stripe={stripePromise}>
        <p className="pmt-amt">Total payment due: $ {totalState}.00</p>
      <p className="pmt-subhead text-muted">Please enter your credit card information below:</p>
      <p className="pmt-subhead text-muted">Secure checkouts using Stripe</p>
        <InjectedCheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
