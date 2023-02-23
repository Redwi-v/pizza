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

    return (
        <PooUp isOpen={isOpen} setCondition={setCondition}>
            <PayForm setCondition={setCondition} />
        </PooUp>
    );
};

export default PayPoopUp;
