import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/state';


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {dialogs, messages} = props

    let dialogsElement = dialogs.map(el => (<DialogItem key={el.id} name={el.name} id={el.id}/>))
    let messagesElement = messages.map(el => (<Message key={el.id} message={el.message}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};