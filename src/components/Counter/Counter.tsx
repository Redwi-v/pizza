import React, { FC } from 'react'

import style from './counter.module.scss'

interface CounterProps {
  plusCallBack: () => void
  minusCallBack: () => void
  count: number
}
const Counter: FC<CounterProps> = (props) => {
  const {plusCallBack,  minusCallBack, count} = props



  return (
    <div className={style.counter}>
      <button onClick={minusCallBack} className={`${style.count_button} ${style.minus}`}></button>
      <span className={style.count}>{count || 0}</span>
      <button onClick={plusCallBack} className={`${style.count_button} ${style.plus}`}></button>
    </div>
  );
}



export default Counter;