import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducer';
import { sagas } from './sagas/index';

// add the middlewares
let middlewares = [];

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// create the store
const composeEnhancers = (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(middleware));
sagaMiddleware.run(sagas);

// export
export default store;