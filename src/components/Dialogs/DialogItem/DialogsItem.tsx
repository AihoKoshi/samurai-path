import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const {name, id} = props
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink
                className={(navData) => navData.isActive ? s.active : ''}
                to={'/dialog/' + id}>
                {name}
            </NavLink>
        </div>
    )
}