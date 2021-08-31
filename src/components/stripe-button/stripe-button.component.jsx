import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";

function StripeButton({ price }) {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HQcnwJwvjAMamFKacP0RwX4jnAxT2NfSrwwu2iNuVOp90X6bdsbeIz1mVjOoZM1WGgOujNT392afR2ts0VHH4cI00VKBr58Ih";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}

export default StripeButton;
