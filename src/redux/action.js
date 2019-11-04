import store from "./store"

const add = 'ADD'
const sub = 'SUB'
const reset = 'RESET'

export const add_score = () => ({
    type: add
})

export const sub_score = () => ({
    type: sub
})

export const reset_score = () => ({
    type: reset
})