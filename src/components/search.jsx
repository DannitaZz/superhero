import { connect } from "react-redux";
const Search = ({ state }) => {

    //const dispatch = useDispatch();  
    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const SearchCon = connect(mapStateToProps)(Search);


export default SearchCon