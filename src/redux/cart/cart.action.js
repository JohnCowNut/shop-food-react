import CART_ACTION_TYPE from './cart.types';

export const toggleCartHidden = () => ({
	type: CART_ACTION_TYPE.TOGGLE_CART_HIDDEN
})

export const addFoodToCart =  food => ({
	type: CART_ACTION_TYPE.ADD_FOOD_TO_CART,
	payload: food
})