import SHOP_DETAIL_ACTION_TYPES from './shop_detail.types';


export const getDataFromFirebase = foods => ({
	type: SHOP_DETAIL_ACTION_TYPES.GET_DATA_FROM_FRIEBASE,
	payload : foods
})
