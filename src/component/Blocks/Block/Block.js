import React from 'react';
import styles from './Block.css';
const Block = (props) => {
    let hiflag = null;
    let btn = null;
    let status = false;
    if(props.flag === 'x') {
        hiflag = 'X';
    }
    else if(props.flag === 'o') {
        hiflag = 'O';
    }
    else {
        hiflag = '';
        status = true;
    }

    if (props.lastcol) {
        btn = status ? <button 
        className={styles.RightMost} 
        onClick={() => props.clicked(props.row, props.col)}>
            {hiflag}
        </button> : <button 
        className={styles.RightMost}>
            {hiflag}
        </button>
    }
    else {
        btn = status ? <button 
        onClick={() => props.clicked(props.row, props.col)}>
            {hiflag}
        </button> : <button>
            {hiflag}
        </button>
    }

    return <span className={styles.Block}>
        {btn}
    </span>
}
export default Block;