import CART_ACTION_TYPE from './cart.types';

export const toggleCartHidden = () => ({
	type: CART_ACTION_TYPE.TOGGLE_CART_HIDDEN
})

export const addFoodToCart =  food => ({
	type: CART_ACTION_TYPE.ADD_FOOD_TO_CART,
	payload: food
})

export const descreaseFoodCart = food => ({
	type: CART_ACTION_TYPE.DESCREASE_FOOD_TO_CART,
	payload: food
})

export const removeFoodToCart = food => ({
	type: CART_ACTION_TYPE.REMOVE_FOOD_TO_CART,
	payload: food
})