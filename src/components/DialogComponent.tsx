import { ReactNode, useEffect, useState } from 'react';
import clsx from "clsx";

interface DialogComponentProps {
    visible: boolean;
    onClose: () => void;
    onClickOutside?: boolean;
    className?: string;
    children: ReactNode;
}

const DialogComponent = ({ visible, onClose, children , onClickOutside = false, className }: DialogComponentProps) => {
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (visible) {
            setShowDialog(true);
        } else {
            setTimeout(() => {
                setShowDialog(false);
            }, 300);
        }
    }, [visible]);

    if (!visible && !showDialog) return null;

    return (
        <div
            className={
            clsx('fixed inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-300',
                visible ? 'opacity-100' : 'opacity-0',
                className
            )}
            onClick={onClickOutside ? onClose : undefined}
        >
            <div
                className={` transition-transform duration-300 ${
                    visible ? 'scale-100' : 'scale-90'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default DialogComponent;
