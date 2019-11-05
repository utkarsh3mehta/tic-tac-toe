import React from 'react'
import styles from './Slider.css'
const Slider = (props) => {
    return (
        <div className={styles.slidecontainer}>
            <strong>O</strong><input readOnly type="range" min="-6" max="6" value={props.score} className={styles.slider} id="myRange" /><strong>X</strong>
        </div>
    )
}
export default Slider;