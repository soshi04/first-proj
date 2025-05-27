import "./tiktaktoe.css"
import { useState } from 'react'

type SquaresProp = {
    value: string | null;
    onSquareClick : () => void;
};


function Square( {value, onSquareClick}:SquaresProp ){
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}

export default function Board() {
    const [squares, setSquares] = useState<(string | null)[]>(Array(25).fill(null));
    function handleClick(i:number) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
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
    /*
    the syntax above tells typescript that state for the array can be either null or type string. 
    */
    return (
        <>
        {board}
        </>

    )
  }