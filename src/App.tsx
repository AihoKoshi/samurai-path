import React from 'react';
import './App.module.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import s from './App.module.css'
import {AppStateType} from './redux/state';


type AppPropsType = {
    state: AppStateType
}

const App: React.FC<AppPropsType> = (props) => {
    const {state} = props;
    return (
        <div className={s.appWrapper}>
        <BrowserRouter>
                <Header/>
                <Navbar friends={state.sidebar.friends}/>
                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route
                            path="/profile"
                            element={<Profile posts={state.profilePage.posts}/>}
                        />
                        <Route
                            path="/dialogs"
                            element={<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}
                        />
                    </Routes>
                </div>
        </BrowserRouter>
        </div>
    );
};

export default App;