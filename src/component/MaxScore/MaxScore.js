import React from 'react'
const Maxscore = (props) => {
    return (
        <input onChange={props.changed} value={props.max} type="number" max='10' min='3' required />
    )
}
export default Maxscore