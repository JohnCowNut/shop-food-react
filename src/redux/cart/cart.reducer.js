import CART_ACTION_TYPE from './cart.types';
import {addFoodToCart} from "./cart.utilis";
const INITIAL_STATE = {
	cartFood: [],
	hidden : false
}

const cartReducer  = (state = INITIAL_STATE , action) => {
	switch(action.type) {
		case CART_ACTION_TYPE.TOGGLE_CART_HIDDEN: 
			return {
				...state,
				hidden: !state.hidden
			}
		case CART_ACTION_TYPE.ADD_FOOD_TO_CART:
			return {
				...state,
				cartFood: addFoodToCart(state.cartFood,action.payload)			}
		default: 
			return state;
	}
}
export default cartReducer;