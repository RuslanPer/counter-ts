import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    disabled?: boolean
    callBack: () => void
    red?: boolean
}

export const Button: React.FC<ButtonPropsType> = (
    {
        red,
        callBack,
        disabled,
        className,
        ...restProps
    }
) => {

    const finalClassName = `${red ? style.red + ' ' + style.default : style.default} ${className}`

    return (
        <button
            onClick={callBack}
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

