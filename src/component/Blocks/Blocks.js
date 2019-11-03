import React from 'react';
import Block from './Block/Block';
import styles from './Blocks.css';
const Blocks = (props) => {
    let rows = Object.keys(props.flag)
    let lastrow = rows[rows.length - 1];
    let cols = Object.keys(props.flag[lastrow])
    let lastcol = cols[cols.length - 1]
    let blocks = Object.keys(props.flag).map(rowid => {
        let block = Object.keys(props.flag[rowid]).map(colid => {
            if (colid === lastcol) {
                return <Block 
                key={'block'+rowid+colid} 
                flag={props.flag[rowid][colid]}
                row={rowid} col={colid}
                lastcol
                clicked={props.blockClicked} />
            } else {
                return <Block 
                key={'block'+rowid+colid} 
                flag={props.flag[rowid][colid]}
                row={rowid} col={colid}
                clicked={props.blockClicked} />
            }
        })
        if(rowid === lastrow) {
            return [block, <br key={'newline' + rowid} />]
        }  else {
            return [block, <hr key={'newline' + rowid} />]
        }
    })

    return (
        <div className={styles.Blocks}>
            {blocks}
        </div>
    )
}
export default Blocks;