import React, { FC } from 'react'

import style from './counter.module.scss'

interface CounterProps {
}
const Counter: FC<CounterProps> = (props) => {
  const { } = props
  return (
    <div className={style.counter}>
      <button className={`${style.count_button} ${style.minus}`}></button>
      <span className={style.count}>02</span>
      <button className={`${style.count_button} ${style.plus}`}></button>
    </div>
  );
}



export default Counter;