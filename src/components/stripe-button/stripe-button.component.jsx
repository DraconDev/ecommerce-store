import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_BaS191rxSpqDLTQ0gv9iyrVi00VtmdtRfL";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image=""
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
