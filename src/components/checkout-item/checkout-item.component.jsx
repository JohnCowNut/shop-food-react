import React from 'react';
import {CheckOutItemContainer,
		CheckOutImageContainer,
		CheckOutOptionContainer,
		CheckoutQuantityContainer,
		CheckoutRemoveContainer} from './checkout-item.style';
const CheckOutItem = ({food}) => {
	const {photoUrl,quantity, price,title} = food;
	return (
			<CheckOutItemContainer>
				<CheckOutImageContainer className= "CheckOutItem">
					<img src={photoUrl} alt="#" />
				</CheckOutImageContainer>

				<CheckOutOptionContainer>{title}</CheckOutOptionContainer>
				<CheckoutQuantityContainer>
					<div className= "arrow">&#10094;</div>
					{quantity}
					<div className="arrow">&#10095;</div>
				</CheckoutQuantityContainer>
				<CheckOutOptionContainer >{price}</CheckOutOptionContainer>
				<CheckoutRemoveContainer>&#10005;</CheckoutRemoveContainer>
			</CheckOutItemContainer>
		
	)
}
export default CheckOutItem;