import { useEffect, useState } from 'react';
import { MyButton } from 'shared/MyButton/MyButton';

interface BugButtonProps {
   className?: string,
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const tryError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <MyButton onClick={tryError}>try error</MyButton>
    );
};
