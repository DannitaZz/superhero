import { connect } from "react-redux";
import {  useDispatch } from 'react-redux';
const Search = ({ state }) => {

    const dispatch = useDispatch();  
    return (
        <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => dispatch({type:'SEARCH', value: e.target.value})}></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const SearchCon = connect(mapStateToProps)(Search);


export default SearchCon