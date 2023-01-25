import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

type NavbarPropsType = {}

export const Navbar: React.FC<NavbarPropsType> = ({...props}) => {
    const {} = props;
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink
                className={(navData) => navData.isActive ? s.active : s.item} to="/profile"
                >Profile</NavLink>
            </div>
            <div className={s.item}><NavLink to="/dialogs">Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news">News</NavLink></div>
            <div className={s.item}><NavLink to="/music">Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings">Settings</NavLink></div>
        </nav>
    );
};