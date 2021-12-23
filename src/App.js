/* import React from 'react';
import { connect } from 'react-redux'

const initialState = {
  counter: 0, 
  };

function addOne() {
  return {
      type: 'ADD_ONE',
  }
}

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ONE':
      let count = state.counter
      return {...state,
        counter: count + 1}
    default:
      return state;
  }
}

function App() {
  return (
    <div>
      Hello World
    </div>
  );
}

export default App; */
  
import React from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
// import Prueba from './features/counter/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux'
// import Lista from './components/Lista'
import './App.css';

const Prueba = (props) => {

  const dispatch = useDispatch();  
  console.log('Props:', props)
    return (
        <div> 
            <p>
                {props.state.data.results[0].name}
            </p>
            <button onClick={() => dispatch({type:'PUT_DATA'})}>
                Start
            </button>
        </div>
    
    );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const PruebaCon = connect(mapStateToProps)(Prueba);

function App() {
  return (
    <div>
      <PruebaCon/>
    </div>
  );
}

export default App;
