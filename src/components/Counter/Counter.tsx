import React, {useState} from 'react';
import style from './Counter.module.css'
import {Button} from "../Button/Button";

export const Counter = () => {
    const minCount = 0;
    const maxCount = 5;

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
        <div className={style.wrapBlock}>
            <div className={style.counterWrap}>
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
    )
};
