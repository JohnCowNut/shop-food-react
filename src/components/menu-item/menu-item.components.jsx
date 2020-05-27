import React from 'react';
import { ReactComponent as HotIcon } from "../../asset/svg/013-product.svg"
import ButtonLink from '../custom-link/custom-link.component';
import { withRouter } from "react-router-dom";
import {MenuItemContainer , ImageContainer , ContainerMenuBody} from './menu-item.styles';
const MenuItem = ({imageUrl,subTitle,routeName,price,more,reviews,match,history}) => {
	return (

		<MenuItemContainer style = {{backgroundColor : "beige"}}>
			<ImageContainer alt="#" 
				src= {imageUrl}
			 />
			 <HotIcon as="svg" className= "hot"/>
			 <ContainerMenuBody  className="cart__body">
			 	<div className="text-center">
			 		<h5 >{subTitle}</h5>
			 	</div>
			 	<ul>
			 		<li>From: {price} 💲💲</li>	
			 		<li>More: {more}</li>
			 		<li>Reviews: {reviews}</li>
			 		<li>
			 			<ButtonLink as ="div" 
			 			onClick = {() => history.push(`${match.url}/${routeName.toLowerCase()}`)}>
			 			More Details</ButtonLink>
			 		</li>
			 	</ul>	
			 </ContainerMenuBody>
		</MenuItemContainer >
	)
}
export default withRouter(MenuItem);