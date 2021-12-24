import { connect } from "react-redux";
import FilterCon from './filter';
import OrderCon from './order';
import SearchCon from "./search";
import './navbar.css'

const NavBar = ({ state }) => {

    // const dispatch = useDispatch();

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SuperHeroes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <FilterCon />
                            <OrderCon />
                        </ul>
                        <SearchCon />
                    </div>
                </div>
            </nav>


        </div>

    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const NavBarCon = connect(mapStateToProps)(NavBar);


export default NavBarCon