import React from 'react';
import { connect } from 'react-redux';
import FoodItem from '../food-item/food-item.component';
import ButtonLink from '../custom-link/custom-link.component';
import { withRouter } from 'react-router-dom';
import {selectCartFood } from '../../redux/cart/cart.selectors';
import {CartDropDownContainer,MessegerCartEmptyContainer} from './cart-dropdown.style';
const CartDropDown = ({history,cartFood}) => {

    return (
        <CartDropDownContainer  >
        	{
        		cartFood.length 
        		? (<div className = {cartFood.length > 2 ? "over-scroll" : " " }>
                    {
                        cartFood.map(food => (<FoodItem key={food.id} food={food}/>))
                    }
                </div>)
                 
        		: <MessegerCartEmptyContainer > 
        				Your car Empty 
        		</MessegerCartEmptyContainer> 
        	}
            <ButtonLink as="button" onClick ={() => 
            			history.push("/checkout")} checkout >
            			GO TO CHECKOUT
            </ButtonLink>
        </CartDropDownContainer>
    )
}
const mapStateToProps = state => ({
	cartFood : selectCartFood(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));