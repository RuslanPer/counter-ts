import React, {useEffect, useState} from 'react';
import style from './Counter.module.css'
import {Button} from '../Button/Button'
import CounterSettings from './CounterSettings/CounterSettings';
import {CounterPropsType} from './CounterContainer';


export const Counter: React.FC<CounterPropsType> = (
    {
        count,
        settings,
        reset,
        inc,
        changeSettings
    }
) => {


    const [showSettings, setShowSettings] = useState(false)


    const counterClassName = count === settings.maxCount ? style.counterRed : style.counter


    return (
        <>
            {showSettings
                ? <CounterSettings counterSettings={settings}
                                   setShowSettings={setShowSettings}
                                   changeCounterSettings={changeSettings}/>

                : <div className={style.wrapBlock}>
                    <div className={style.counterTable}>
                        <span className={counterClassName}>{count ? count : settings.minCount}</span>
                    </div>
                    <div className={style.buttons}>
                        <Button disabled={count === settings.maxCount} callBack={inc}>
                            inc
                        </Button>
                        <Button disabled={count === settings.minCount} callBack={reset}
                                red>
                            reset
                        </Button>
                        <Button callBack={() => setShowSettings(true)}>set</Button>
                    </div>
                </div>
            }
        </>
    )
};
