import FOOD_DATA from './shop_detail.data';

const INITIAL_STATE = {
    foods: FOOD_DATA
}

const shopDetailReducer = (state = INITIAL_STATE , action ) => {

   switch(action.type)  {
       default : 
            return state;
   }
}


export default shopDetailReducer;