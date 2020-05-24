import React from 'react';
import { connect } from 'react-redux';
import { addFoodToCart } from "../../redux/cart/cart.action";
import ButtonLink from '../custom-link/custom-link.component';
import {CartPhotoContainer , CartBodyContainer} from './collection-item.style';
const CollectionItem = ({food,addFoodToCart}) => {
    const {title,time,price,type,photoUrl} = food;
    return (
        <div>
            <CartPhotoContainer style = {{backgroundImage: `url(${photoUrl})`}} />
            <CartBodyContainer>
                <h5 className="mb-sm">{title}</h5>
                <ul>
                    <li>Time : In {time} minutes</li>
                    <li >Delivery: {type}</li>
                    <li>Price: {price} $</li>
                    <ButtonLink as ="button" onClick={() => addFoodToCart(food)} addItem="true">Add Item To Cart</ButtonLink>
                </ul>
            </CartBodyContainer>
        </div> 
    )
}
const mapDispatchToProps = dispatch => ({
    addFoodToCart  : food => dispatch(addFoodToCart(food))
})
export default connect(null,mapDispatchToProps)(CollectionItem);