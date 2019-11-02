import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import styles from './App.css';
import Blocks from '../component/Blocks/Blocks';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: false,
      flag: {
        row0 : {
          col0: 0,
          col1: 0,
          col2: 0,
        },
        row1: {
          col0: 0,
          col1: 0,
          col2: 0,
        },
        row2: {
          col0: 0,
          col1: 0,
          col2: 0,
        }
      }
    }
  }

  resetHandler = () => {
    let oldFlag = {...this.state.flag}
    let newFlag = Object.keys(oldFlag).map(rowid => {
      return Object.keys(oldFlag[rowid]).map(colid => {
        console.log(rowid, colid);
        return oldFlag[rowid][colid] = 0;
      })
    })
    console.log(newFlag);
    this.setState({
      flag: oldFlag
    })
  }

  blockClickHandler = (row, col) => {
    let oldFlag = {...this.state.flag}
    if(this.state.turn) {
      oldFlag[row][col]  = 1;
    } else {
      oldFlag[row][col] = 2;
    }
    this.setState(prevState => {
      return {
        flag: oldFlag,
        turn: !prevState.turn,
      }
    });
  }
  
  render () {
    return (
      <div className={styles.App}>
        <img src={logo} className={styles.Logo} alt="logo" onClick={this.resetHandler}/>
        <Blocks flag={this.state.flag} blockClicked={this.blockClickHandler} />
      </div>
    );
  }
}

export default App;
