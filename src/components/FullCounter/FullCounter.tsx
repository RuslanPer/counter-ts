import React, {useState} from 'react';
import style from './FullCounter.module.css'
import {Button} from "../Button/Button"
import FullCounterSettings from "./FullCounterSettings/FullCounterSettings";

export type counterSettingsType = {
    minCount: number
    maxCount: number
}

export const FullCounter: React.FC = () => {

    const [counterSettings, setCounterSettings] = useState<counterSettingsType>({
        minCount: 0,
        maxCount: 5
    })
    const [count, setCount] = useState<number>(counterSettings.minCount)
    const [error, setError] = useState<boolean>(false)
    const [settingsHaveChanged, setSettingsHaveChanged] = useState<boolean>(false)
    const [showSettings, setShowSettings] = useState<boolean>(false)

    const changeCounterSettings = (newMinCount: number, newMaxCount: number) => {
        setCounterSettings({...counterSettings, minCount: newMinCount, maxCount: newMaxCount})
        setCount(newMinCount)
        setSettingsHaveChanged(false)
        setShowSettings(false)
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
            if (error) {
                return <span className={style.errorValue}>incorrect value</span>
            } else return <span className={style.pressValue}>enter values and press 'set'</span>
        } else return <span className={counterClassName}>{count}</span>
    }

    return (
        <>
            {showSettings
                ? <FullCounterSettings error={error}
                                       setError={setError}
                                       setShowSettings={setShowSettings}
                                       setSettingsHaveChanged={setSettingsHaveChanged}
                                       counterSettings={counterSettings}
                                       changeCounterSettings={changeCounterSettings}/>

                : <div className={style.wrapBlock}>
                    <div className={style.counterTable}>
                        {showTableElement()}
                    </div>
                    <div className={style.buttons}>
                        <Button disabled={count === counterSettings.maxCount || settingsHaveChanged} callBack={inc}>
                            inc
                        </Button>
                        <Button disabled={count === counterSettings.minCount || settingsHaveChanged} callBack={reset}
                                red>
                            reset
                        </Button>
                        <Button callBack={() => setShowSettings(true)}>set</Button>
                    </div>
                </div>
            }
        </>
    );
};