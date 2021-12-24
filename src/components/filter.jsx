import { connect } from "react-redux";
import {  useDispatch } from 'react-redux';
const Filter = ({ state }) => {

    const dispatch = useDispatch();  
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filtrar
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#/gender">Gender</a>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" href="#/gender" name="Male"  onClick={(e) => dispatch({type:'FILTER_DATA_GENDER',  item: e.target.name})}>Male</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Female"  onClick={(e) => dispatch({type:'FILTER_DATA_GENDER',  item: e.target.name})}>Female</a></li>
                </ul>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#/race">Race</a></li>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" href="#/gender" name="Human" onClick={(e) => dispatch({type:'FILTER_DATA_RACE',  item: e.target.name})}>Human</a></li>
                </ul>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#/eye-color">Eye color</a></li>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" href="#/gender" name="Yellow" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Yellow</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Blue" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Blue</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Brown" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Brown</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Red" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Red</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Green" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Green</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Black" onClick={(e) => dispatch({type:'FILTER_DATA_EYE', item: e.target.name})}>Black</a></li>
                </ul>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#/eye-color">Hair color</a></li>
                <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" href="#/gender" name="Blond" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Blond</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Brown" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Brown</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Black" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Black</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="Red" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>Red</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="WHite" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>White</a></li>
                    <li><a className="dropdown-item" href="#/gender" name="No Hair" onClick={(e) => dispatch({type:'FILTER_DATA_HAIR', item: e.target.name})}>No hair</a></li>
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