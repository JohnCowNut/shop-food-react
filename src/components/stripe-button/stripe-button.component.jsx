import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_f2ERaBXFhdE4ytogeGSzKMDk00DJAzb1f4";
	const onToken = token => {
		console.log(token);
		alert("Pay ment Succesfully")
	}
	return (
		<StripeCheckout
			label = "Pay Now !!"
			name = "COWNUT Shoping"
			billingAdress
			shippingAdress
			image ="https://i.postimg.cc/9XBg86W1/sacred-cow.png"
			description = {`Your total is $${price}`}
			amount =  {priceForStripe}
			panelLabel = "Pay Now "
			token = {onToken}
			stripeKey = {publishableKey}
		/>
	)
}

export default StripeButton;