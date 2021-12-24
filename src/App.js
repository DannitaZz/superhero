import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import PruebaCon from './components/Prueba';
import './App.css';
import Lista from './components/Lista';
import NavBar from './components/navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";

function AppNotCon({state}) {

  const dispatch = useDispatch();
  useEffect(() => {
    const getSuperhero = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/4697866216927914/search/a`, { mode: 'cors' });
        const data = await response.json();
        dispatch({ type: 'ADD_DATA', value: data });
      } catch (error) {
        console.error(error);
      }
    }
    getSuperhero();
  }, []);

  return (
    <div className="app-container">
      <NavBar/>
        <div className="list-container">
          <AutoSizer>
            {Lista(state.data.results.results.length)}
          </AutoSizer>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const App = connect(mapStateToProps)(AppNotCon);
export default App;
