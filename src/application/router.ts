import { Reducer, createStore, compose, applyMiddleware, combineReducers } from 'redux';
import * as reduxFirstRouter from 'redux-first-router';
import createMemoryHistory from 'history/createMemoryHistory';
import * as constants from '../application/constants';
import { Store as StoreForApplicationState } from '../stores';

const routesMap = {
    [constants.SET_MAIN_TAB]: '/user/:mainTab',
};

export const createStoreWithRouter = (reducerForApplicationState: Reducer<StoreForApplicationState>) => {
    const history = createMemoryHistory();
    const router = reduxFirstRouter.connectRoutes(history, routesMap);
    const rootReducer = combineReducers({ location: router.reducer, applicationState: reducerForApplicationState });
    return createStore(rootReducer, compose(router.enhancer, applyMiddleware(router.middleware)));
};
