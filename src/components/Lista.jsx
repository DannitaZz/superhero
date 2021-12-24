import { connect } from "react-redux";

import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style, state }) => {
  return (

    <div /* style="width: 18rem;" */>
      <div className="card" style={style}>
        {/* <img src={state.data.results.results[index].image.url} className="card-img-top" alt="..."></img> */}
          <div className="card-body">
            <h5 className="card-title">{state.data.results.results[index] && state.data.results.results[index].name}</h5>
            {/* <h6 className='card-text'>Appearance</h6>
            <p className="card-text">Gender: {state.data.results.results[index] &&  state.data.results.results[index].appearance.gender}    Race: {state.data.results.results[index] &&  state.data.results.results[index].appearance.race}</p>
            <p className="card-text">Eye color: {state.data.results.results[index] &&  state.data.results.results[index].appearance["eye-color"]}    Hair color: {state.data.results.results[index] &&  state.data.results.results[index].appearance["hair-color"]}</p>
            <p className="card-text">Height: {state.data.results.results[index].appearance.height[1]}    Weight: {state.data.results.results[index].appearance.weight[1]}</p> */}
            <h6 className='card-text'>Power Stats</h6>
            <p className="card-text">Intelligence: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.intelligence}    Speed: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.speed}    Durability: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.durability}</p>
            <p className="card-text">Power: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.power}    Combat: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.combat}    Strength: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.strength}</p>
          </div>
      </div>
    </div>
  );
}

const Lista = ({ height, width }) => (

  <List

    height={height}

    itemCount={730}

    itemSize={300}

    width={width}

  >

    {RowCon}

  </List>

);

const mapStateToProps = state => {
  return {
    state: state
  };
};


// const ListaCon = connect(mapStateToProps)(Lista);
const RowCon = connect(mapStateToProps)(Row);


export default Lista
