import React, {Dispatch, SetStateAction, useState} from 'react';
import style from "./CounterSettings.module.css";
import SuperInputNumber from "../../SuperInputNumber/SuperInputNumber";
import {Button} from "../../Button/Button";
import {counterSettingsType} from "../Counter";

type CounterSettingsPropsType = {
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    setSettingsHaveChanged: Dispatch<SetStateAction<boolean>>
    counterSettings: counterSettingsType
    changeCounterSettings: (newMinCount: number, newMaxCount: number) => void
}

const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {
        error,
        setError,
        setSettingsHaveChanged,
        counterSettings,
        changeCounterSettings}
) => {

    const [newMinCount, setNewMinCount] = useState(counterSettings.minCount);
    const [newMaxCount, setNewMaxCount] = useState(counterSettings.maxCount);

    const [errorMinCount, setErrorMinCount] = useState(false);
    const [errorMaxCount, setErrorMaxCount] = useState(false);

    const buttonCallbackHandler = () => {
        changeCounterSettings(newMinCount,newMaxCount)
    }

    const changeNewMinCount = (value: number) => {
        if (value < 0 || value >= newMaxCount) {
            setErrorMinCount(true)
            setError(true)
            setNewMinCount(value)
        }else {
            setErrorMinCount(false)
            setError(false)
            setSettingsHaveChanged(true)
            setNewMinCount(value)
        }

    }
    const changeNewMaxCount = (value: number) => {
        if (value <= newMinCount) {
            setErrorMaxCount(true)
            setError(true)
            setNewMaxCount(value)
        }else {
            setErrorMaxCount(false)
            setError(false)
            setSettingsHaveChanged(true)
            setNewMaxCount(value)
        }

    }


    return (
        <div className={style.wrapBlock}>
            <div className={style.counterTable}>
                <div className={style.tableRow}>
                    <span className={style.settingsTitle}>max value:</span>
                    <SuperInputNumber value={newMaxCount}
                                      onChangeNumber={changeNewMaxCount} error={errorMaxCount}/>
                </div>
                <div className={style.tableRow}>
                    <span className={style.settingsTitle}>start value:</span>
                    <SuperInputNumber value={newMinCount}
                                      onChangeNumber={changeNewMinCount} error={errorMinCount}/>
                </div>
            </div>
            <div className={style.buttons}>
                <Button callBack={buttonCallbackHandler} disabled={error}>
                    set
                </Button>
            </div>
        </div>
    )
};

export default CounterSettings;