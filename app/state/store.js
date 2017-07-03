import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import reducer from './reducer';

const reducers = combineReducers({
  reducer,
  routing: routerReducer,
});

const history = createHistory();

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
