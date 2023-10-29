import {
    ReactNode, useState, MouseEvent, useRef, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MyModal.module.scss';

interface MyModalProps {
   className?: string,
   children: ReactNode,
   isOpen: boolean,
   isClose: () => void;
}

export const MyModal = (props : MyModalProps) => {
    const {
        className, children, isOpen, isClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    const ANIMATION_DELAY = 300;

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handlerClose = () => {
        if (isClose) {
            isClose();
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                isClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const onHandlerClose = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        clearTimeout(timerRef.current);
    }, []);

    return (
        <div className={classNames(
            cls.Modal,
            { [cls.oppened]: isOpen, [cls.isClosing]: isClosing },
            [className],
        )}
        >
            <div
                onClick={handlerClose}
                onKeyDown={handlerClose}
                className={classNames(cls.Overlay)}
                aria-hidden="true"
            >
                <div
                    onClick={onHandlerClose}
                    onKeyDown={handlerClose}
                    className={classNames(cls.Content)}
                    aria-hidden="true"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
