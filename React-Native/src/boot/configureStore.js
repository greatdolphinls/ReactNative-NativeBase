import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore ,persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import reducer from "../reducers";


const persistConfig = {
  key: "key",
  storage:AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig,reducer);
const composeEnhancers = window.__REDUX_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return {store,persistor};
};

