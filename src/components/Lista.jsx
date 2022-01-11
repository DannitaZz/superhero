import { connect } from "react-redux";

import { FixedSizeList as List } from 'react-window';
import { Chart } from "react-google-charts";
import './Lista.css'

const Row = ({ index, style, state }) => {
  const data = [
    ["Stat", "Max"],
    ["Intelligence", Number(state.data.results.results[index].powerstats.intelligence)],
    ["Speed", Number(state.data.results.results[index].powerstats.speed)],
    ["Durability", Number(state.data.results.results[index].powerstats.durability)],
    ["Power", Number(state.data.results.results[index].powerstats.power)],
    ["Combat", Number(state.data.results.results[index].powerstats.combat)],
    ["Strenght", Number(state.data.results.results[index].powerstats.strenght)],
  ];
  const options = {
    title: "Powerstats",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Total Powerstats",
      minValue: 0,
    },
  };
  return (

    <div className="card" >
      {/* <div className="card" style={style}>
        <img src={state.data.results.results[index] && state.data.results.results[index].image.url} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{state.data.results.results[index] && state.data.results.results[index].name}</h5>
          <h6 className='card-text'>Appearance</h6>
          <p className="card-text">Gender: {state.data.results.results[index] && state.data.results.results[index].appearance.gender}    Race: {state.data.results.results[index] && state.data.results.results[index].appearance.race}</p>
          <p className="card-text">Eye color: {state.data.results.results[index] && state.data.results.results[index].appearance["eye-color"]}    Hair color: {state.data.results.results[index] && state.data.results.results[index].appearance["hair-color"]}</p>
          <p className="card-text">Height: {state.data.results.results[index].appearance.height[1]}    Weight: {state.data.results.results[index].appearance.weight[1]}</p>
          <h6 className='card-text'>Power Stats</h6>
            <p className="card-text">Intelligence: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.intelligence}    Speed: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.speed}    Durability: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.durability}</p>
            <p className="card-text">Power: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.power}    Combat: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.combat}    Strength: {state.data.results.results[index] &&  state.data.results.results[index].powerstats.strength}</p>
          <Chart
            chartType="BarChart"
            width="100%"
            height="200px"
            data={data}
            options={options}
          />
        </div>
      </div> */}

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <img src={state.data.results.results[index] && state.data.results.results[index].image.url} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{state.data.results.results[index] && state.data.results.results[index].name}</h5>
                <h6 className='card-text'>Appearance</h6>
                <p className="card-text">Gender: {state.data.results.results[index] && state.data.results.results[index].appearance.gender}    Race: {state.data.results.results[index] && state.data.results.results[index].appearance.race}</p>
                <p className="card-text">Eye color: {state.data.results.results[index] && state.data.results.results[index].appearance["eye-color"]}    Hair color: {state.data.results.results[index] && state.data.results.results[index].appearance["hair-color"]}</p>
                <p className="card-text">Height: {state.data.results.results[index].appearance.height[1]}    Weight: {state.data.results.results[index].appearance.weight[1]}</p>
              </div>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Chart
                chartType="BarChart"
                width="100%"
                height="200px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}

const Lista = (length) => ({height, width}) => (

      <List

        height={height}

        itemCount={length}

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

      // const Lista = connect(mapStateToProps)(Lista2);
      const RowCon = connect(mapStateToProps)(Row);


      export default Lista
