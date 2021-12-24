import {  useDispatch } from 'react-redux';
import { connect } from "react-redux";


const Prueba = ({state}) => {

    const dispatch = useDispatch();  
      return (
          <div> 
              <p>
                  {state.data.results && state.data.results.results[1].name}
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
  
  
  export default PruebaCon