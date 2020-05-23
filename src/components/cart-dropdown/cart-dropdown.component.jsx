import React from 'react';
import ButtonLink from '../custom-link/custom-link.component';
import {CartDropDownContainer,MessegerCartEmptyContainer} from './cart-dropdown.style';
const CartDropDown = () => {
    return (
        <CartDropDownContainer >
            <MessegerCartEmptyContainer > Your car Empty </MessegerCartEmptyContainer> 
            <ButtonLink as="button" checkout >GO TO CHECKOUT</ButtonLink>
        </CartDropDownContainer>
    )
}

export default CartDropDown;