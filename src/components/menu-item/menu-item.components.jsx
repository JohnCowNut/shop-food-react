import React from 'react';
import { ReactComponent as HotIcon } from "../../asset/svg/013-product.svg"
import ButtonLink from '../custom-link/custom-link.component';

import {MenuItemContainer , ImageContainer , ContainerMenuBody} from './menu-item.styles';
const MenuItem = ({imageUrl,title,routeName,price,more,reviews}) => {

	return (
		<MenuItemContainer>
			<ImageContainer className = "cart__photo cart__photo--fix mb-sm" alt="#" 
				src= {imageUrl}
			 />
			 <HotIcon as="svg" className= "hot"/>
			 <ContainerMenuBody className="cart__body">
			 	<div className="text-center">
			 		<h5 >{title}</h5>
			 	</div>
			 	<ul>
			 		<li>Price: {price} 💲</li>
			 		<li>More: {more}</li>
			 		<li>Reviews: {reviews}</li>
			 		<li>
			 			<ButtonLink to={`collection/${routeName}`}>More Details</ButtonLink>
			 		</li>
			 	</ul>
			 </ContainerMenuBody>
		</MenuItemContainer >
	)
}
export default MenuItem;