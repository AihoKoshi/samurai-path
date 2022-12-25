import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar image"/>
                {props.message}
                <div>
                    <button>{props.likesCount}</button>
                </div>
            </div>
        </div>
    )
};