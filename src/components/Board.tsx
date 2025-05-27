import "./tiktaktoe.css"
import { useState } from 'react'


function Square(){
    const [state, setState] = useState<string | null>(null)
    /*
    the syntax above tells typescript that state can be either
    null or type string.
    */
    function handleClick () {
        setState('X')
    }
    return (
        <button className="square" onClick={handleClick}>{state}</button>
    )
}




export default function Board() {
    return (
        <>
        <div className="board-row">
            <Square/>
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>

        </>

    )
  }
