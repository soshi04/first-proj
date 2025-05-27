import { useNavigate } from 'react-router-dom'
import Board from '../components/Board'
import '../components/tiktaktoe.css'


function TestingPage(){
    const navigate = useNavigate()

    const coffee = [
        {title: 'latte', milk: true, id: 1},
        {title: 'cappuccino', milk: true, id: 1},
        {title: 'espresso', milk: false, id: 3}
    ]

    const listCoffee = coffee.map(coffee =>
        <li
        key={coffee.id}
        style ={{
            color: coffee.milk ? 'beige' : "brown"
        }}
        >
            {coffee.title}
        </li>


    )
    return (
        <div>
            <h1>hello tests</h1>
            <button onClick={() => navigate('/')} > back to main
            </button>
            <ul>{listCoffee}</ul>
            <div>
                <Board/>
            </div>
        </div>
    );
}

export default TestingPage