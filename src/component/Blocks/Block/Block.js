import React from 'react';
const Block = (props) => {
    let hiflag = null;
    let status = false;
    if(props.flag === 0) {
        hiflag = 'click me';
        status = true;
    }
    else if(props.flag === 1) {
        hiflag = 'O';
    }
    else {
        hiflag = 'X';
    }
    return status ? <button onClick={() => props.clicked(props.row, props.col)} >{hiflag}</button> : <button>{hiflag}</button>
}
export default Block;