import React, {Dispatch, SetStateAction, useState} from 'react';
import style from "./CounterSettings.module.css";
import SuperInputNumber from "../../SuperInputNumber/SuperInputNumber";
import {Button} from "../../Button/Button";
import {counterSettingsType} from '../../../BLL/counter-reducer';

type CounterSettingsPropsType = {
    counterSettings: counterSettingsType
    setShowSettings: (showSettings: boolean) => void
    changeCounterSettings: (newMinCount: number, newMaxCount: number) => void
}

const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {
        counterSettings,
        setShowSettings,
        changeCounterSettings}
) => {

    const [error, setError] = useState(false)
    const [newMinCount, setNewMinCount] = useState(counterSettings.minCount);
    const [newMaxCount, setNewMaxCount] = useState(counterSettings.maxCount);


    const buttonCallbackHandler = () => {
        changeCounterSettings(newMinCount,newMaxCount)
        setShowSettings(false)
    }

    const changeNewMinCount = (value: number) => {
        if (value < 0 || value >= newMaxCount) {
            setError(true)
            setNewMinCount(value)
        }else {
            setError(false)
            setNewMinCount(value)
        }

    }
    const changeNewMaxCount = (value: number) => {
        if (value <= newMinCount) {
            setError(true)
            setNewMaxCount(value)
        }else {
            setError(false)
            setNewMaxCount(value)
        }

    }


    return (
        <div className={style.wrapBlock}>
            <div className={style.counterTable}>
                <div className={style.tableRow}>
                    <span className={style.settingsTitle}>Max value:</span>
                    <SuperInputNumber value={newMaxCount}
                                      onChangeNumber={changeNewMaxCount} error={error}/>
                </div>
                <div className={style.tableRow}>
                    <span className={style.settingsTitle}>Start value:</span>
                    <SuperInputNumber value={newMinCount}
                                      onChangeNumber={changeNewMinCount} error={error}/>
                </div>

                {error && <div className={style.errorValue}>invalid value entered</div>}

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