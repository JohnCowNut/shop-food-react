import  { createSelector } from 'reselect';


const selectCart = state =>  state.cart;

export const selectCartFood = createSelector(
	[selectCart],
	cart => cart.cartFood
)
export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
)
export const selectCartFoodCount = createSelector(
	[selectCartFood],
	cartFood => cartFood.reduce((prev,next) => (prev += next.quantity),0)
)