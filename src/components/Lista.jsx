import { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const getSuperhero = async  () => {
  try {
      const response = await fetch(`http://localhost:3000/api/4697866216927914/search/a`, {mode:'cors'});
      const data = await response.json();
  
  } catch (error) {
    console.error(error);
  }
}
getSuperhero();

const Row = ({ index, style }) => {

  /* const [value, setValue] = useState();
  useEffect(()=> {
    const getSuperhero = async  () => {
      try {
          const response = await fetch(`http://localhost:3000/api/4697866216927914/${index}`, {mode:'cors'});
          const data = await response.json();
          setValue(data);
      
      } catch (error) {
        console.error(error);
      }
    }
    getSuperhero();
  }, []); */
    
  return (

    <div style={style}>superhero {index}</div>
  
  );
}

 

const Lista = () => (

  <List

    height={150}

    itemCount={730}

    itemSize={35}

    width={300}

  >

    {Row}

  </List>

);


   

export default Lista
