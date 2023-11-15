'use client'
import { useState } from 'react';
import style from '../Header/style.module.scss'

const arr = ['HELLO', 'it', 'is', 'Alex', ':)'];



export default function Header() {
    const [btn, setBtn] = useState(false);

    return (
        <header className={style.wrapper}>
            <div className={style.logo}></div>

            <nav>
                <ul className={!btn ? style.ul : [style.ul, style.active].join(' ')}>
                    {arr.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
            </nav>

            <div onClick={() => setBtn(!btn)}
                className={btn ? style.close : style.open}></div>
        </header >
    )
};