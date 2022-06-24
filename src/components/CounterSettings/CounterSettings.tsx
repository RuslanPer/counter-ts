import React from 'react';
import style from "./CounterSettings.module.css";
import SuperInputNumber from "../SuperInputNumber/SuperInputNumber";
import {Button} from "../Button/Button";

const CounterSettings = () => {
    return (
        <div className={style.wrapBlock}>
            <div className={style.counterTable}>
                <div className={style.tableRow}>
                    <span>max value:</span>
                    <SuperInputNumber/>
                </div>
                <div className={style.tableRow}>
                    <span>start value:</span>
                    <SuperInputNumber/>
                </div>
            </div>
            <div className={style.buttons}>
                <Button callBack={() => {
                }}>
                    set
                </Button>
            </div>
        </div>
    )
};

export default CounterSettings;