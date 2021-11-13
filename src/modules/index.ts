import { createStore, compose } from 'redux';
import { todosReducer } from "./redusers";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(todosReducer, composeEnhancers());
