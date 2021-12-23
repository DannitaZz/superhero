import { createStore } from 'redux'
import appReducer from '../features/reducer/reducer';

export const store = createStore(appReducer);
