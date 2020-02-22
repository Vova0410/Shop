/**
* Created by Dell on 04.02.2020.
*/
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index-reducer';
import logger from 'redux-logger'


  export const store = createStore(reducers, applyMiddleware(logger));


  console.log(store.getState());