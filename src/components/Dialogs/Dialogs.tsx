import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {v1} from 'uuid';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={v1()}/>
                <DialogItem name={'Andrey'} id={v1()}/>
                <DialogItem name={'Sveta'} id={v1()}/>
                <DialogItem name={'Sasha'} id={v1()}/>
                <DialogItem name={'Victor'} id={v1()}/>
                <DialogItem name={'Valera'} id={v1()}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your studying?'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const {name, id} = props
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink
                className={(navData) => navData.isActive ? s.active : ''}
                to={'/dialog/' + id}>
                {name}
            </NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    const {message} = props
    return (
        <div className={s.dialogs}>{message}</div>
    )
}