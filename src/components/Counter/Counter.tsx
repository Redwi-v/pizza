import React, { FC } from 'react';

import style from './counter.module.scss';

interface CounterProps {
    plusCallBack: () => void;
    minusCallBack: () => void;
    count: number;
}
const Counter: FC<CounterProps> = (props) => {
    const { plusCallBack, minusCallBack, count } = props;

    const minusCallBackWithProtection = () => {
        if (count > 0) {
            minusCallBack();
        }
    };
    const plusCallBackWithProtection = () => {
        if (count < 99) {
            plusCallBack();
        }
    };

    return (
        <div className={style.counter}>
            <button onClick={minusCallBackWithProtection} className={`${style.count_button} ${style.minus}`}></button>
            <span className={style.count}>{count || 0}</span>
            <button onClick={plusCallBackWithProtection} className={`${style.count_button} ${style.plus}`}></button>
        </div>
    );
};

export default Counter;
