import {  useDispatch } from 'react-redux';
import { connect } from "react-redux";


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
  
  
  export default PruebaCon