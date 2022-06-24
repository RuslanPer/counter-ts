import React, {useState} from 'react';
import style from './Counter.module.css'
import {Button} from "../Button/Button"
import CounterSettings from "../CounterSettings/CounterSettings";

export const Counter = () => {

    const [minCount,setMinCount] = useState(0);
    const [maxCount, setMaxCount] = useState(5);

    const [count, setCount] = useState(minCount)

    const inc = () => {
        if (count !== maxCount) {
            let newCount = count + 1
            setCount(newCount)
        }
    }
    const reset = () => {
        setCount(minCount)
    }


    const counterClassName = count === maxCount ? style.counterRed : style.counter

    return (
        <>
            <CounterSettings/>

            <div className={style.wrapBlock}>
                <div className={style.counterTable}>
                    <span className={counterClassName}>{count}</span>
                </div>
                <div className={style.buttons}>
                    <Button disabled={count === maxCount} callBack={inc}>
                        inc
                    </Button>
                    <Button disabled={count === minCount} callBack={reset} red>
                        reset
                    </Button>
                </div>
            </div>
        </>

    )
};
