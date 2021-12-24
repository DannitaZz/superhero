const initialState = {
    data: {
        results: { results: [
        { id: '1', name: 'Superhéroe no disponible', image: 'src', 
        appearance: { gender: "male", race: "human", height: ["5'8", "180 cm"], weight: ["5'8", "180 cm"], "eye-color": "green", "hair-color": "brown" }, 
        powerstats: { speed: "30", intelligence: "40", power: "50", combat: "20", strenght: "60", durability: "80" } }, 
        { id: '2', name: 'Superhéroe no disponible 2', image: 'src', 
        appearance: { gender: "male", race: "human", height: ["5'8", "180 cm"], weight: ["5'8", "180 cm"], "eye-color": "blue", "hair-color": "black" }, 
        powerstats: { speed: "30", intelligence: "40", power: "50", combat: "20", strenght: "60", durability: "80" } }, 
        { id: '3', name: 'Superhéroe no disponible 3', image: 'src', 
        appearance: { gender: "male", race: "human", height: ["5'8", "180 cm"], weight: ["5'8", "180 cm"], "eye-color": "honey", "hair-color": "blonde" }, 
        powerstats: { speed: "30", intelligence: "40", power: "50", combat: "20", strenght: "60", durability: "80" } }] }

    },
    filters: '',
    orders: '',
};

initialState.init_data = initialState.data

export default function appReducer(state = initialState, action) {

    switch (action.type) {
        case 'PUT_DATA': {
            const new_state = { ...state }
            new_state.data.results.results[1].name = 'Superhéroe SÍ disponible'
            return new_state;
        }
        case 'ADD_DATA': {
            const new_state = { ...state }
            new_state.data.results = action.value;
            new_state.init_data.results = action.value;
            return new_state;
        }
        case 'FILTER_DATA_GENDER': {
            const new_state = { ...state }
            new_state.filters= action.item;
            const filteredData = new_state.data.results.results.filter((e) => new_state.filters === e.appearance.gender);
            new_state.data.results.results = filteredData;
            
            return new_state;
        }
        case 'FILTER_DATA_RACE': {
            const new_state = { ...state }
            new_state.filters = action.item;
            const filteredData = new_state.data.results.results.filter((e) => new_state.filters === e.appearance.race);
            new_state.data.results.results = filteredData;
            
            return new_state;
        }
        case 'FILTER_DATA_EYE': {
            const new_state = { ...state }
            new_state.filters = action.item;
            const filteredData = new_state.data.results.results.filter((e) => new_state.filters === e.appearance["eye-color"]);
            new_state.data.results.results = filteredData;
            
            return new_state;
        }
        case 'FILTER_DATA_HAIR': {
            const new_state = { ...state }
            new_state.filters = action.item;
            const filteredData = new_state.data.results.results.filter((e) => new_state.filters === e.appearance["hair-color"]);
            new_state.data.results.results = filteredData;
            
            return new_state;
        }
        case 'SORT_DATA': {
            const new_state = { ...state }
            const sortBy = action.item;
            new_state.orders = sortBy;
            new_state.data.results.results.sort((a, b) => {

                if (Number(a.powerstats[sortBy]) > Number(b.powerstats[sortBy])) {
                    return -1;
                }
                if (Number(a.powerstats[sortBy]) < Number(b.powerstats[sortBy])) {
                    return 1;
                }
                return 0;
            });
            return new_state;
        }
        default:
            return state;
    }
}

