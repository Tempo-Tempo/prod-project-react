import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MySelect.module.scss';

export interface OptionsProps {
   value: string,
   content: string,
}

interface MySelectProps {
   className?: string
   label?: string,
   options?: OptionsProps[],
   value?: string,
   onChange?: (value: string) => void
}

export const MySelect = memo((props: MySelectProps) => {
    const {
        className = '', label, options, onChange, value,
    } = props;

    const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            className={classNames(cls.optionsValue)}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.selectWrapper, {}, [className])}>
            {label && (
                <span className={classNames(cls.label)}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={classNames(cls.options)}
                onChange={handlerChange}
                value={value}
            >
                {optionsList}
            </select>
        </div>
    );
});
