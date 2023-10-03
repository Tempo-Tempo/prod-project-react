import { classNames } from 'shared/lib/classNames/classNames';
import { SpinnerLoader } from 'shared/spinnerLoader/spinnerLoader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
   className?: string,
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div>
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <SpinnerLoader />
        </div>
    </div>
);
