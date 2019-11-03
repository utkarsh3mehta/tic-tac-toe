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

  rowChecker = () => {
    // console.log('running rowChecker');
    let oldFlag = {...this.state.flag}
    let rowWinner = Object.keys(oldFlag).map(rowid => {
      let row = Object.values(oldFlag[rowid]).reduce((val, el) => {
        //console.log(val, el)
        if(val !== null) {
          if(val === el) {
            return val;
          } else {
            return false;
          }
        } else {
          return false;
        }
      })
      if(row !== false) {
        if(row === 'x') {
          return 'x';
        } else if(row === 'o') {
          return 'o';
        } else {
          return null
        }
      } else {
        return null;
      }
    })
    // console.log(rowWinner)
    rowWinner.map(row => {
      if (row === 'x') {
         this.setState(prevState => {
           return {
             score: prevState.score + 1
           }
         })
      } 
      else if(row === 'o') {
        this.setState(prevState => {
          return {
            score: prevState.score - 1
          }
        })
      }
      return null;
    })
  }

  colChecker = () => {
    // console.log('running colChecker');
    let oldFlag = {...this.state.flag}
    let rowLength = Object.keys(oldFlag).length;
    let colLength
    Object.keys(oldFlag).map(rowid => {
      colLength = Object.keys(oldFlag[rowid]).length
      return null
    })
    //console.log(rowLength, colLength)
    let colWinner = [];
    for(let col = 0; col < colLength; col++) {
      let colid = 'col'+col
      let colArr = [];
      for(let row = 0; row < rowLength; row++) {
        let rowid = 'row'+row
        // console.log()
        colArr = colArr.concat(oldFlag[rowid][colid])
      }
      // console.log(colArr);
      colWinner = colWinner.concat(colArr.reduce((prev, now) => {
        if(prev === now) {
          return prev;
        } else {
          return false;
        }
      }))
    }
    // console.log(colWinner)
    colWinner.map(col => {
      if (col === 'x') {
        this.setState(prevState => {
          return {
            score: prevState.score + 1
          }
        })
      } 
      else if(col === 'o') {
        this.setState(prevState => {
          return {
            score: prevState.score - 1
          }
        })
      }
      return null;
    })
  }

  diagonalChecker = () => {
    let oldFlag = {...this.state.flag}
    let diagLeft = [], diagRight = []
    let rowLength = Object.keys(oldFlag).length
    let colLength
    Object.keys(oldFlag).map(rowid => {
      colLength =  Object.keys(oldFlag[rowid]).length
      return null
    })
    for (let row = 0, col = colLength-1; row < rowLength, col >= 0; row++, col--) {
      let rowid = 'row'+row
      let colleftid = 'col'+row
      let colrightid = 'col'+col
      diagLeft = diagLeft.concat(oldFlag[rowid][colleftid])
      diagRight = diagRight.concat(oldFlag[rowid][colrightid])
    }
    diagLeft = diagLeft.reduce((prev, now) => {
      if (prev === now) {
        return prev
      } else {
        return false
      }
    })
    diagRight = diagRight.reduce((prev, now) => {
      if (prev === now) {
        return prev
      } else {
        return false
      }
    })
    // console.log(diagLeft, diagRight)
    if(diagLeft === 'x') {
      this.setState(prevState => {
        return {
          score: prevState.score + 1
        }
      })
    } else if (diagLeft === 'o') {
      this.setState(prevState => {
        return {
          score: prevState.score - 1
        }
      })
    }
    if(diagRight === 'x') {
      this.setState(prevState => {
        return {
          score: prevState.score + 1
        }
      })
    } else if (diagRight === 'o') {
      this.setState(prevState => {
        return {
          score: prevState.score - 1
        }
      })
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
      oldFlag[row][col]  = 'o';
    } else {
      oldFlag[row][col] = 'x';
    }
    this.setState(prevState => {
      return {
        flag: oldFlag,
        turn: !prevState.turn,
      }
    });
    this.checkWinner()
  }
  
  render () {
    return (
      <div className={styles.App}>
        <div className={styles.Header}>
          <img src={logo} className={styles.Logo} alt="logo"/>
          <div>
            <button className={styles.AppButton} onClick={this.clearFieldHandler}>Clear Fields</button>
            <button className={styles.AppButton} onClick={this.resetStatHandler}>Reset Stats</button>
          </div>
          {/* <ReactSlider
            className="horizontal-slider"
            renderThumb={(props, state) => <div {...props}>{state.score}</div>}
          /> */}
        <Blocks flag={this.state.flag} blockClicked={this.blockClickHandler} />
          {/* <div className={styles.SideRules}>
            <p>Rules:</p>
            <ul><li>First game is started by 'X'</li></ul>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
