const addx = 'ADD_X'
const addo = 'ADD_O'
const reset = 'RESET'

export const add_x_score = () => ({
    type: addx
})

export const add_o_score = () => ({
    type: addo
})

export const reset_score = () => ({
    type: reset
})