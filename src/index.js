import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { store } from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'

const initialState = {
  data: {
      results: [{id: '1', name: 'Superhéroe no disponible', image: 'src'}, {id: '2', name: 'Superhéroe no disponible 2', image: 'src'} , {id: '3', name: 'Superhéroe no disponible 3', image: 'src'}]
  }   
};

function appReducer(state=initialState, action) {
  switch (action.type) {
      case 'PUT_DATA': {
          const new_state = {...state}
          new_state.data.results[0].name = 'Superhéroe SÍ disponible'
          return new_state;
      }
      default:
          return state;
  }
}

const store = createStore(appReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
