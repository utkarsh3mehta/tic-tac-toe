import React from 'react'
import styles from './ScoreKeeper.css'
const ScoreKeeper = (props) => {
    return (
        <strong className={styles.ScoreKeeper}>{props.player}: {props.score}</strong>
    )
}
export default ScoreKeeper