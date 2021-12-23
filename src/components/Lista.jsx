import { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { connect } from "react-redux";

// import { FixedSizeList as List } from 'react-window';

/* const getSuperhero = async  () => {
  try {
      const response = await fetch(`http://localhost:3000/api/4697866216927914/search/a`, {mode:'cors'});
      const data = await response.json();
  
  } catch (error) {
    console.error(error);
  }
}
getSuperhero(); */


const Lista = (/* { index, style } */{state}) => {
  // const [value, setValue] = useState();
  const dispatch = useDispatch();
  useEffect(()=> {
    const getSuperhero = async  () => {
      try {
          const response = await fetch(`http://localhost:3000/api/4697866216927914/search/a`, {mode:'cors'});
          const data = await response.json();
          console.log(data);
          dispatch({type: 'ADD_DATA', value:data});
          // setValue(data);
      
      } catch (error) {
        console.error(error);
      }
    }
    getSuperhero();
  }, []);
    console.log('En lista:', state);
  return (

    <div /* style={style} */>{state.data.results && state.data.results.results.map((e, i)=> {
      return <div key={i}>{e.name}</div>
    })}  {/* {index} */}</div>
  
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const ListaCon = connect(mapStateToProps)(Lista);

 

/* const Lista = () => (

  <List

    height={150}

    itemCount={730}

    itemSize={35}

    width={300}

  >

    {Row}

  </List>

); */


   

export default ListaCon
