import { useState } from "react";
import { useNavigate } from 'react-router-dom'


function PicTest() {
    const navigate = useNavigate()


    return (
        <div>
            <h1>hello pictures</h1>
            <button onClick={() => navigate('/')} > back to main
            </button>
        </div>
    


)
}

export default PicTest