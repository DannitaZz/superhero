import { connect } from "react-redux";
import {  useDispatch } from 'react-redux';

const Order = ({state}) => {

    const dispatch = useDispatch();  
      return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ordenar
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#/gender" name="power" onClick={(e) => dispatch({type:'SORT_DATA', item: e.target.name})}>Power</a></li>
            <li><a className="dropdown-item" href="#/race" name="speed" onClick={(e) => dispatch({type:'SORT_DATA', item: e.target.name})}> Speed</a></li>
            <li><a className="dropdown-item" href="#/eye-color" name="intelligence" onClick={(e) => dispatch({type:'SORT_DATA', item: e.target.name})}>Intelligence</a></li>
            <li><a className="dropdown-item" href="#/eye-color" name="combat" onClick={(e) => dispatch({type:'SORT_DATA', item: e.target.name})}>Combat</a></li>
            <li><a className="dropdown-item" href="#/eye-color" name="durability" onClick={(e) => dispatch({type:'SORT_DATA', item: e.target.name})}>Durability</a></li>
            <li><a className="dropdown-item" href="#/eye-color" name="strength" onClick={(e) => dispatch({type:'SORT_DATA', item: e.target.name})}>Strength</a></li>
        </ul>
    </li>
      
      );
  }

  const mapStateToProps = state => {
    return {
      state: state
    };
  };
  
  const OrderCon = connect(mapStateToProps)(Order);
  
  
  export default OrderCon