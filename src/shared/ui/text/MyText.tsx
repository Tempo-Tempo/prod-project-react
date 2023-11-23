import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MyText.module.scss';

export enum TextTheme {
   primary = 'primary',
   error = 'error',
}

interface MyTextPorps {
   title?: string,
   body?: string,
   theme: TextTheme,
}

export const MyText = (props: MyTextPorps) => {
    const { title, body, theme = TextTheme.primary } = props;
    return (
        <div>
            <p className={classNames(cls.title, {}, [cls[theme]])}>{title}</p>
            <p className={classNames(cls.body, {}, [cls[theme]])}>{body}</p>
        </div>
    );
};
