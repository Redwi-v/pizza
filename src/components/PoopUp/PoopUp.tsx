import React, { FC } from 'react';
import style from './poopUp.module.scss';

interface PooUpProps {
    children: JSX.Element;
    isOpen: boolean;
    setCondition: (isOpen: boolean) => void;
}
const PooUp: FC<PooUpProps> = (props) => {
    const { children, isOpen, setCondition } = props;

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const close = () => {
        setCondition(false);
    };

    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');

    return (
        <div className={`${style.poopUp} ${isOpen && style.isOpen}`}>
            <div onClick={close} className={style.poopUp_placeholder}>
                <div onClick={stopPropagation} className={style.poopUp_content}>
                    <button onClick={close} className={style.closeBtn}>
                        ◈
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PooUp;
