import React from 'react';
import ButtonLink from '../custom-link/custom-link.component';
import {CartPhotoContainer , CartBodyContainer} from './collection-item.style';
const CollectionItem = ({title,time,price,type,photoUrl}) => {
    return (
        <div>
            <CartPhotoContainer style = {{backgroundImage: `url(${photoUrl})`}} />
            <CartBodyContainer>
                <h5>{title}</h5>
                <ul>
                    <li>Time : In {time} minutes</li>
                    <li >Delivery: {type}</li>
                    <li>Price: {price} $</li>
                    <ButtonLink as ="button" addItem="true">Add Item To Cart</ButtonLink>
                </ul>
            </CartBodyContainer>
        </div> 
    )
}
export default CollectionItem;