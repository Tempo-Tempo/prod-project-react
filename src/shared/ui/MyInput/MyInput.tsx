import React, { InputHTMLAttributes } from 'react';
import cls from './MyInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface MyInputProps extends HTMLInputProps {
   typeInput?: string,
   value?: string,
   onChange: (value: string) => void;
}

export const MyInput = ({
    typeInput = 'text', value, onChange, ...otherPropss
}: MyInputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            className={cls.MyInput}
            type={typeInput}
            value={value}
            onChange={(e) => onChangeHandler(e)}
        />
    );
};
