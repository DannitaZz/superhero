const initialState = {
    data: {
        results: [{id: '1', name: 'Superhéroe no disponible', image: 'src'}, {id: '2', name: 'Superhéroe no disponible 2', image: 'src'} , {id: '3', name: 'Superhéroe no disponible 3', image: 'src'}]
    }   
};


export default function appReducer(state=initialState, action) {
    switch (action.type) {
        case 'PUT_DATA': {
            const new_state = {...state}
            new_state.data.results[0].name = 'Superhéroe SÍ disponible'
            return new_state;
        }
        default:
            return state;
    }
}

