import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './MyInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface MyInputProps extends HTMLInputProps {
   typeInput?: string,
   value?: string,
   autoFocus?: boolean,
   onChange?: (value: string) => void,
   disabled?: boolean,
}

export const MyInput = memo((props: MyInputProps) => {
    const {
        typeInput = 'text', value, onChange, autoFocus, disabled, ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
        }
    }, [autoFocus]);

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={inputRef}
            className={cls.MyInput}
            type={typeInput}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => onChangeHandler(e)}
            disabled={disabled}
            {...otherProps}
        />
    );
});
