import { combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
	key : 'root',
	storage: storageSession,
	whitelist: ['cart']
} 
const rootReducer = combineReducers ({ 
	user : userReducer,
	cart : cartReducer
 })

export default persistReducer(persistConfig,rootReducer);