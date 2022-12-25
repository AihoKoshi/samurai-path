import React from 'react';
import s from './Header.module.css';

export function Header() {
    return (
        <div className={s.header}>
            <header>
                <img
                    src="https://it-kamasutra.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d6688bc5.png&w=384&q=75"
                    alt="IT-KAMASUTRA-LOGO"/>
            </header>
            {/*<a href="">Home </a>*/}
            {/*<a href="">News Feed </a>*/}
            {/*<a href="">Messages</a>*/}
        </div>
    )
}