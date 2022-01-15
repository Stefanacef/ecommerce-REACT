import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KHpepGN1eFivLZ1OHIDmrdu9lmuwH6dXXUbunAKXk1pFOdbx8BTRpTWGwPF4FIVTjbsx72QcXU8vjGV8rDKWxr2007R9VGP1n";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Super Brand"
      billingAddress
      shippingAddress
      description={`Your total is ${price} `}
      amount={priceForStripe}
      panelLabel="'Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckOutButton;
