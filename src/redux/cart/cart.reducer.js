import CART_ACTION_TYPE from './cart.types';

const INITIAL_STATE = {
	hidden : false
}

const cartReducer  = (state = INITIAL_STATE , action) => {
	switch(action.type) {
		case CART_ACTION_TYPE.TOGGLE_CART_HIDDEN: 
			return {
				...state,
				hidden: !state.hidden
			}
		default: 
			return state;
	}
}
export default cartReducer;