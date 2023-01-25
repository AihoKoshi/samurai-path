import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.post}>
                <Post message={'Hi! How are you?'} likesCount={'5 Likes'}/>
                <Post message={'This is my first post!'} likesCount={'7 Likes'}/>
            </div>
        </div>
    );
};