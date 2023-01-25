import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: string
}

export const Post: React.FC<PostPropsType> = (props) => {
    const {
        message,
        likesCount
    } = props
    return (
        <div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar image"/>
                {message}
                <div>
                    <button>{likesCount}</button>
                </div>
            </div>
        </div>
    )
};