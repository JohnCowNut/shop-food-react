import React from 'react';
import { connect } from 'react-redux';
import {CheckOutItemContainer,
		CheckOutImageContainer,
		CheckOutOptionContainer,
		CheckoutQuantityContainer,
		CheckoutRemoveContainer} from './checkout-item.style';
import {descreaseFoodCart, addFoodToCart ,removeFoodToCart} from '../../redux/cart/cart.action';
const CheckOutItem = ({food,descreaseFoodCart,addFoodToCart,removeFoodToCart}) => {
	const {photoUrl,quantity, price,title} = food;
	return (
			<CheckOutItemContainer>
				<CheckOutImageContainer className= "CheckOutItem">
					<img src={photoUrl} alt="#" />
				</CheckOutImageContainer>

				<CheckOutOptionContainer>{title}</CheckOutOptionContainer>
				<CheckoutQuantityContainer>
					<div className= "arrow" onClick ={() => descreaseFoodCart(food)}>&#10094;</div>
					{quantity}
					<div className="arrow" onClick={ () => addFoodToCart(food)}>&#10095;</div>
				</CheckoutQuantityContainer>
				<CheckOutOptionContainer >{price}</CheckOutOptionContainer>
				<CheckoutRemoveContainer onClick={() => removeFoodToCart(food)}>&#10005;</CheckoutRemoveContainer>
			</CheckOutItemContainer>
		
	)
}

const mapDispatchToProps = dispatch => ({
	descreaseFoodCart : food => dispatch(descreaseFoodCart(food)),
	addFoodToCart : food => dispatch(addFoodToCart(food)),
	removeFoodToCart: food => dispatch(removeFoodToCart(food))
})
export default connect(null,mapDispatchToProps)(CheckOutItem);