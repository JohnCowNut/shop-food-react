import React from 'react';
import { connect } from 'react-redux';
import { removeFoodToCart } from '../../redux/cart/cart.action';
import {FoodItemsContainer , FoodPhotoContainer } from './food-item.style';
const FoodItem = ({food,removeFoodToCart}) => {
	const {title,price,quantity,photoUrl} = food;
	return (
		<FoodItemsContainer >
        	<FoodPhotoContainer style={{backgroundImage: `url(${photoUrl})`}}>
        	&nbsp;</FoodPhotoContainer>
        	<div>
        		<h5 className="mb-sm">{title}</h5>
        		<ul>
        			<li>{quantity} x {`${price} $`}</li>
        		</ul>
        	</div>
			<div onClick = {() => removeFoodToCart(food)} >&#10005;</div>
        </FoodItemsContainer>
	)
}
const mapDispatchToProps = dispatch => ({
	removeFoodToCart  : food => dispatch(removeFoodToCart(food))
})

export default connect(null,mapDispatchToProps)(FoodItem) ;