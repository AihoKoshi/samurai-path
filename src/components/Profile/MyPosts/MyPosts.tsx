import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.MyPosts}>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message={'Hi! How are you?'} likesCount={'5 Likes'}/>
            <Post message={'This is my first post!'} likesCount={'7 Likes'}/>
        </div>
    );
};