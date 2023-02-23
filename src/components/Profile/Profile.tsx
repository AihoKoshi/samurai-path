import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../redux/state';


type ProfilePropsType = {
    posts: Array<PostsType>
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {posts} =props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};