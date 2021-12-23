import { useSelector, useDispatch } from 'react-redux';
const dispatch = useDispatch();

const Prueba = ({state}) => {

    
    return (
  
        <div> 
            <p>
                {state.data.results[0].name}
            </p>
            <button onClick={dispatch({type:'PUT_DATA'})}>
                Start
            </button>
        </div>
    
    );
}

export default Prueba