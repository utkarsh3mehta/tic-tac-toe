import React from 'react'
import styles from './ScoreKeeper.css'
const ScoreKeeper = (props) => {
    let style = null
    if(props.score === 4) {
        style = {
            'color': 'green'
        }
    }
    return (
        <strong style={style} className={styles.ScoreKeeper}>{props.player}: {props.score}</strong>
    )
}
export default ScoreKeeper