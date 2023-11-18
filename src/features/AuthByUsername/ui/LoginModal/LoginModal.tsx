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

    console.log(isClose);

    return (
        <MyModal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            isClose={() => isClose()}
        >
            <LoginFrom />
        </MyModal>
    );
};
