const initialState = {
    score: 0
}

const Reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                score: state.score + 1
            }
        case 'SUB':
            return {
                ...state,
                score: state.score - 1
            }
        case 'RESET':
            return {
                ...state,
                score: 0
            }
        default:
            return state
    }
}

export default Reducer