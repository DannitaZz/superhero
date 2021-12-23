import { createStore } from 'redux'
import appReducer from '../features/counter/reducer';

export const store = createStore(appReducer);
