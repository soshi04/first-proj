import "./tiktaktoe.css"
import { useState } from 'react'

type SquaresProp = {
    value: string | null;
    /*
    the syntax above tells typescript that state for the array can be either null or type string. 
    */
    onSquareClick : () => void;
    /*
    Initalize the function for clicking
    */
};


function Square( {value, onSquareClick} :SquaresProp ){
    /*
    in the function square we need to specifiy the parameters (value and the onsquareclick function) from Props
    */
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}


function calculateWinnerFromMove(
    squares: (string | null)[],
    index: number,
    boardSize = 5,
    winLength = 5
    /*
    parameters for the function, squares is the board, index is the index that we just clicked on. 
    */
  ): string | null {
    const player = squares[index];
    if (!player) return null;
  
    const directions = [
      { dr: 0, dc: 1 },   // →
      { dr: 1, dc: 0 },   // ↓
      { dr: 1, dc: 1 },   // ↘
      { dr: -1, dc: 1 },  // ↗
    ];
  
    const getIndex = (r: number, c: number) => r * boardSize + c;
  
    const row = Math.floor(index / boardSize);
    const col = index % boardSize;
  
    for (const { dr, dc } of directions) {
      let count = 1;
  
      // check in +direction
      for (let i = 1; i < winLength; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        if (
          r < 0 || r >= boardSize || c < 0 || c >= boardSize ||
          squares[getIndex(r, c)] !== player
        ) break;
        count++;
      }
  
      // check in -direction
      for (let i = 1; i < winLength; i++) {
        const r = row - dr * i;
        const c = col - dc * i;
        if (
          r < 0 || r >= boardSize || c < 0 || c >= boardSize ||
          squares[getIndex(r, c)] !== player
        ) break;
        count++;
      }
  
      if (count >= winLength) return player;
    }
  
    return null;
  }

export default function Board() {
    const [squares, setSquares] = useState<(string | null)[]>(Array(25).fill(null));
    const [isXNext, setXNext] = useState(true)
    const [status, setStatus] = useState("Next Player: X")

    /*
    useState of string or null array type, initalized to null
    */
    function handleClick(i:number) {
        const nextSquares = squares.slice();
        if (squares[i]) {
            return
        }
        if (isXNext){
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O"
        }
        const winner = calculateWinnerFromMove(nextSquares, i)
        if (winner){
            setStatus("Winner " + winner)
        } else {
            setStatus("Next player is: " + (isXNext ? "O" : "X"))
          }
        setXNext(!isXNext);
        setSquares(nextSquares);
    }

    const board = [];
    for (let row = 0; row < 5; row++) {
        const rowSquares = [];
        for (let col = 0; col < 5; col++) {
            const index = row * 5 + col;
            rowSquares.push(
                <Square
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index)}
                />
            );
        }
        board.push(<div className="board-row" key={row}>{rowSquares}</div>);
    }
    return (
        <>
        <div>{status}</div>
        {board}
        </>

    )
  }