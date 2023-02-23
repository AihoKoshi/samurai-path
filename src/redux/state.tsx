import React from 'react'
import {v1} from 'uuid';

export type PostsType = {
    id: string
    message: string
    likesCount: string
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}


export type FriendsType = {
    id: string
    name: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: AppStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi! How are you?', likesCount: '5 likes'},
            {id: v1(), message: 'This is my first post!', likesCount: '7 likes'},
            {id: v1(), message: 'bla-bla', likesCount: '0 likes'},
            {id: v1(), message: 'da-da', likesCount: '100 likes'},
        ],

    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Victor'},
            {id: v1(), name: 'Valera'},
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your studying?'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
        ],
    },
    sidebar: {
        friends: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Victor'},
            {id: v1(), name: 'Valera'},
        ]
    },
};