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

export default function Board() {
    const [squares, setSquares] = useState<(string | null)[]>(Array(25).fill(null));
    const [isXNext, setXNext] = useState(true)

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
        {board}
        </>

    )
  }