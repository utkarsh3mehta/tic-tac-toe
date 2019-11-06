const initialState = {
    scoreX: 0,
    scoreO: 0,
}

const Reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_X':
            return {
                ...state,
                scoreX: state.scoreX + 1
            }
        case 'ADD_O':
            return {
                ...state,
                scoreO: state.scoreO + 1
            }
        case 'RESET':
            return {
                ...state,
                scoreX: 0,
                scoreO: 0,
            }
        default:
            return state
    }
}

export default Reducer