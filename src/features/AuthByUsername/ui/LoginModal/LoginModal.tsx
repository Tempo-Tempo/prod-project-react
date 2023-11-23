import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { MyModal } from 'shared/ui/MyModal/MyModal';
import { LoginFrom } from '../LoginForm/LoginForm';

interface LoginModalProps {
   className: string,
   isOpen: boolean,
   isClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, isClose } = props;

    // КОСТЫЛЕК НАДО БЫ ИСПРАВИТЬ
    //  const [btnClose, setBtnClose] = useState<boolean>();

    return (
        <MyModal
            isOpen={isOpen}
            isClose={isClose}
            //   btnClose={btnClose}
            lazy
            className={classNames('', {}, [className])}
        >
            <LoginFrom />
        </MyModal>
    );
};
// isClose={() => setBtnClose((prev) => !prev)   }
