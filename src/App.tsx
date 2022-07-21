import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import CounterContainer from "./components/Counter/CounterContainer";

function App() {

    return (
        <div className="App">
            <CounterContainer/>
        </div>
    );
}

export default App;
