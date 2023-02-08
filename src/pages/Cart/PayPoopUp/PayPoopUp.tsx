import React, { FC } from 'react';
import PooUp from '../../../components/PoopUp/PoopUp';
import { cart } from '../../../redux/Slices/cart/cart';
import PayForm from './PayFrom';

interface PayPoopUpProps {
    isOpen: boolean;
    setCondition: (isOpen: boolean) => void;
}
const PayPoopUp: FC<PayPoopUpProps> = (props) => {
    const { isOpen, setCondition } = props;

    //redux logic
    const { clear } = cart.actions;

    return (
        <PooUp isOpen={isOpen} setCondition={setCondition}>
            <PayForm />
        </PooUp>
    );
};

export default PayPoopUp;
