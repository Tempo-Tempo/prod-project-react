import { classNames } from 'shared/lib/classNames/classNames';
import { MyModal } from 'shared/ui/MyModal/MyModal';
import { memo } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
   className: string,
   isOpen: boolean,
   isClose: () => void;
}
export const LoginModal = memo((props: LoginModalProps) => {
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
            <LoginFormAsync isClose={isClose} />
        </MyModal>
    );
});
// isClose={() => setBtnClose((prev) => !prev)   }
