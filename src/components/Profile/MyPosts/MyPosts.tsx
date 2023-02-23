import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsPropsType = {
    posts: Array<PostsType>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {posts} = props

    // let postsData = [
    //     {id: v1(), message: 'Hi! How are you?', likesCount: '5 likes'},
    //     {id: v1(), message: 'This is my first post!', likesCount: '7 likes'},
    //     {id: v1(), message: 'bla-bla', likesCount: '0 likes'},
    //     {id: v1(), message: 'da-da', likesCount: '100 likes'},
    // ]

    let postsElements = posts.map(el => <Post key = {el.id} message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
};