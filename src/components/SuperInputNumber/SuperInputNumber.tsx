import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeNumber?: (value: number) => void
    error?: string
    spanClassName?: string
}

const SuperInputNumber: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeNumber,
        onKeyPress,
        error,
        className, spanClassName,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeNumber && onChangeNumber(Number(e.currentTarget.value))
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? s.superInput + ' ' + s.errorInput : s.superInput} ${className}`

    return (
        <>
            <input
                type={'number'}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    )
}

export default SuperInputNumber
