import React from 'react';
import './App.module.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import s from './App.module.css'

type AppPropsType = {}

const App: React.FC<AppPropsType> = ({...props}) => {
    const {} = props;
    return (
        <div className={s.appWrapper}>
        <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
                </div>
        </BrowserRouter>
        </div>
    );
};

export default App;