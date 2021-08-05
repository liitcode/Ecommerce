import { combineReducers } from 'redux';
import cartReducer from './reducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';


const persistConfig = {
    key: "root",
    storage,
    whitelist: ("data")
};

const rootReducer = combineReducers({
    data : cartReducer,
});

export default persistReducer(persistConfig, rootReducer);