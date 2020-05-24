import React from 'react';
import {FoodItemsContainer , FoodPhotoContainer } from './food-item.style';
const FoodItem = ({food}) => {
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
        </FoodItemsContainer>
	)
}
export default FoodItem;