import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
   children?: ReactNode,
   elem?: HTMLElement,
}

export const
    Portal = ({ children, elem = document.body }: PortalProps) => createPortal(children, elem);
