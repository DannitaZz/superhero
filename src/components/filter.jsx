import { connect } from "react-redux";
import {  useDispatch } from 'react-redux';
const Filter = ({ state }) => {

    const dispatch = useDispatch();  
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filtrar
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item">Gender</a>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" name="Male"  onClick={(e) => dispatch({type:'FILTER_DATA_GENDER',  item: e.target.name})}>Male</a></li>
                    <li><a className="dropdown-item" name="Female"  onClick={(e) => dispatch({type:'FILTER_DATA_GENDER',  item: e.target.name})}>Female</a></li>
                </ul>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" >Race</a></li>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" name="Human" onClick={(e) => dispatch({type:'FILTER_DATA_RACE',  item: e.target.name})}>Human</a></li>
                </ul>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" >Eye color</a></li>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" name="Yellow" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Yellow</a></li>
                    <li><a className="dropdown-item" name="Blue" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Blue</a></li>
                    <li><a className="dropdown-item" name="Brown" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Brown</a></li>
                    <li><a className="dropdown-item" name="Red" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Red</a></li>
                    <li><a className="dropdown-item" name="Green" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Green</a></li>
                    <li><a className="dropdown-item" name="Black" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Black</a></li>
                </ul>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" >Hair color</a></li>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" name="Blond" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Blond</a></li>
                    <li><a className="dropdown-item" name="Brown" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Brown</a></li>
                    <li><a className="dropdown-item" name="Black" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Black</a></li>
                    <li><a className="dropdown-item" name="Red" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Red</a></li>
                    <li><a className="dropdown-item" name="WHite" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>White</a></li>
                    <li><a className="dropdown-item" name="No Hair" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>No hair</a></li>
                </ul>

            </ul>
        </li>

    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const FilterCon = connect(mapStateToProps)(Filter);


export default FilterCon