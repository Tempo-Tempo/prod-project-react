import { useTheme } from 'app/providers/ThemeProviders';
import {
    ReactNode, useState, MouseEvent, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/Portal/Portal';
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

    const { theme } = useTheme();

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handlerClose = useCallback(() => {
        if (isClose) {
            isClose();
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                isClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [isClose]);

    const onHandlerClose = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Escape') handlerClose();
        });
        return () => {
            clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <Portal>
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
        </Portal>
    );
};
