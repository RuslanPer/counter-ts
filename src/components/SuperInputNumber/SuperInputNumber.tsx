import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeNumber?: (value: number) => void
    error?: boolean
}

const SuperInputNumber: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeNumber,
        error,
        className,
        value,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeNumber && onChangeNumber(Number(e.currentTarget.value))
    }


    const finalInputClassName = `${error ? s.superInput + ' ' + s.errorInput : s.superInput} ${className}`

    return (
        <>
            <input
                type={'number'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                value={value}

                {...restProps}
            />
        </>
    )
}

export default SuperInputNumber
