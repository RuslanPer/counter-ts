import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {FullCounter} from "./components/FullCounter/FullCounter";

function App() {

    return (
        <div className="App">
            <Counter/>
            <FullCounter/>
        </div>
    );
}

export default App;
