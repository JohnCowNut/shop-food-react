import React from 'react';
import { ReactComponent as HotIcon } from "../../asset/svg/013-product.svg"
import ButtonLink from '../custom-link/custom-link.component'
const MenuItem = ({imageUrl,title,routeName,price,more,reviews}) => {
	return (
		<div className = "cart">
			<img className = "cart__photo cart__photo--fix mb-sm" alt="#" 
				src= {imageUrl}
			 />
			 <HotIcon as="svg" />
			 <div className="cart__body">
			 	<div className="text-center">
			 		<h5 className = "cart__body--heading">{title}</h5>
			 	</div>
			 	<ul>
			 		<li>{price} 💲</li>
			 		<li>More:{more}</li>
			 		<li>Reviews: {reviews}</li>
			 		<li>
			 			<ButtonLink to={`/${routeName}`}>More Detailsj</ButtonLink>
			 		</li>
			 	</ul>
			 </div>
		</div>
	)
}
export default MenuItem;