import React from 'react';
import Block from './Block/Block';
const Blocks = (props) => {
    let blocks = Object.keys(props.flag).map(rowid => {
        return [Object.keys(props.flag[rowid]).map(colid => {
            return <Block key={'block'+rowid+colid} flag={props.flag[rowid][colid]}
            row={rowid} col={colid}
            clicked={props.blockClicked} />
        }), <br key={'newLine' + rowid}/>]
    })

    return blocks;
}
export default Blocks;