import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {FriendsType} from '../../redux/state';

type NavbarPropsType = {
    friends: Array<FriendsType>
}

export const Navbar: React.FC<NavbarPropsType> = (props) => {
    const {friends} = props;
    let myFriends = friends.map(el => <li key={el.id}>{el.name}</li>)
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
            <dl> My Friends
                <ul><span>{myFriends}</span></ul>
            </dl>
        </nav>
    );
};