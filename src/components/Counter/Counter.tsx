import React, {useEffect, useState} from 'react';
import style from './Counter.module.css'
import {Button} from "../Button/Button"
import CounterSettings from "./CounterSettings/CounterSettings";

export type counterSettingsType = {
    minCount: number
    maxCount: number
}

const getLocalCounterSettings = () => {
    let localSettings = localStorage.getItem('counterSettings')
    if (localSettings) {
        return (JSON.parse(localSettings))
    }else return {
        minCount: 0,
        maxCount: 5
    }
}


export const Counter: React.FC = () => {

    const [counterSettings, setCounterSettings] = useState<counterSettingsType>(getLocalCounterSettings())
    const [count, setCount] = useState(counterSettings.minCount)
    const [error, setError] = useState(false)
    const [settingsHaveChanged, setSettingsHaveChanged] = useState(false)

    useEffect( () => {
        localStorage.setItem('counterSettings', JSON.stringify(counterSettings))
    }, [counterSettings])

    const changeCounterSettings = (newMinCount: number, newMaxCount: number) => {
        setCounterSettings({...counterSettings, minCount: newMinCount, maxCount: newMaxCount})
        setCount(newMinCount)
        setSettingsHaveChanged(false)

    }

    const inc = () => {
        if (count !== counterSettings.maxCount) {
            let newCount = count + 1
            setCount(newCount)
        }
    }
    const reset = () => {
        setCount(counterSettings.minCount)
    }


    const counterClassName = count === counterSettings.maxCount ? style.counterRed : style.counter

    const showTableElement = () => {
        if (settingsHaveChanged) {
            if(error) {
                return <span className={style.errorValue}>incorrect value</span>
            }else return <span className={style.pressValue}>enter values and press 'set'</span>
        }else return <span className={counterClassName}>{count}</span>
    }

    return (
        <div className={style.counterContainer}>
            <CounterSettings error={error}
                             setError={setError}
                             setSettingsHaveChanged={setSettingsHaveChanged}
                             counterSettings={counterSettings}
                             changeCounterSettings={changeCounterSettings}/>

            <div className={style.wrapBlock}>
                <div className={style.counterTable}>
                    {showTableElement()}
                </div>
                <div className={style.buttons}>
                    <Button disabled={count === counterSettings.maxCount || settingsHaveChanged} callBack={inc}>
                        inc
                    </Button>
                    <Button disabled={count === counterSettings.minCount || settingsHaveChanged} callBack={reset} red>
                        reset
                    </Button>
                </div>
            </div>
        </div>

    )
};
