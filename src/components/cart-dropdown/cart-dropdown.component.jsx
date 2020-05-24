import React from 'react';
import { connect } from 'react-redux';
import ButtonLink from '../custom-link/custom-link.component';
import { withRouter } from 'react-router-dom';

import {CartDropDownContainer,MessegerCartEmptyContainer} from './cart-dropdown.style';
const CartDropDown = ({history,cartFood}) => {
    return (
        <CartDropDownContainer >
        	{
        		cartFood.length ?  null : <MessegerCartEmptyContainer > Your car Empty </MessegerCartEmptyContainer> 
        	}
            <ButtonLink as="button" onClick ={() => history.push("/checkout")} checkout >GO TO CHECKOUT</ButtonLink>
        </CartDropDownContainer>
    )
}
const mapStateToProps = state => ({
	cartFood : state.cart.cartFood
})

export default withRouter(connect(mapStateToProps)(CartDropDown));