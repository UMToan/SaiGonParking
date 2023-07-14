import rootReducer from './store/reducers/rootReducer';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reduxStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk)); // chỗ này là middleware
    // thunk có tác dụng thực hiện 1 số hàm bất đồng bộ giữa client react với redux
    const persistor = persistStore(store);

    return { store, persistor };
};

export default reduxStore;
