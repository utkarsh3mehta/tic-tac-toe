import React from 'react'
import styles from './Modal.css'
const Modal = (props) => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <p>And the winner is:</p>
                <strong>{props.winner}</strong><br />
                <button className={styles.success} onClick={props.playAgain}>Play Again</button>
            </div>
        </div>
    )    
}
export default Modal;