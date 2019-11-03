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
          col0: 'x',
          col1: null,
          col2: 'o',
        },
        row1: {
          col0: 'o',
          col1: 'x',
          col2: null,
        },
        row2: {
          col0: 'x',
          col1: 'o',
          col2: 'x',
        }
      }
    }
  }

  clearFieldHandler = () => {
    let oldFlag = {...this.state.flag}
    Object.keys(oldFlag).map(rowid => {
      return Object.keys(oldFlag[rowid]).map(colid => {
        //console.log(rowid, colid);
        oldFlag[rowid][colid] = null;
        return oldFlag;
      })
    })
    //console.log(newFlag);
    this.setState({
      flag: oldFlag,
    })
  }

  resetStatHandler = () => {
    this.clearFieldHandler()
    this.setState({
      score: 0,
      turn: false
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
