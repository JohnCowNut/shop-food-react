import SHOP_DETAIL_ACTION_TYPES from './shop_detail.types';
const INITIAL_STATE = {
    foods: null
}

const shopDetailReducer = (state = INITIAL_STATE , action ) => {

   switch(action.type)  {
   	   case SHOP_DETAIL_ACTION_TYPES.GET_DATA_FROM_FRIEBASE :
   	   		return {
   	   			...state,
   	   			foods : action.payload
   	   		}
       default : 
            return state;
   }
}


export default shopDetailReducer;