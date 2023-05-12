import React, { useState } from 'react'

import MyButton from './components/UI/MyButton.jsx';

const App = () => {
    const [from, setFrom] = useState(10);
    const [to, setTo] = useState(8);
    const [input, setInput] = useState(0)

    return (
        <div className='app'>
            <div className='buttons'>
                <MyButton value={2} currentValue={from} setValue={setFrom} />
                <MyButton value={8} currentValue={from} setValue={setFrom} />
                <MyButton value={10} currentValue={from} setValue={setFrom} />
                <MyButton value={16} currentValue={from} setValue={setFrom} />
                <MyButton value={36} currentValue={from} setValue={setFrom} />
            </div >
            <input className='input' value={input} onChange={e => setInput(e.target.value)} />
            <div className='buttons'>
                <MyButton value={2} currentValue={to} setValue={setTo} />
                <MyButton value={8} currentValue={to} setValue={setTo} />
                <MyButton value={10} currentValue={to} setValue={setTo} />
                <MyButton value={16} currentValue={to} setValue={setTo} />
                <MyButton value={36} currentValue={to} setValue={setTo} />
            </div >
            <div className="output">
                <div className='output'>{parseInt(input, from).toString(to)}</div>
            </div>
        </div>
    )
}

export default App