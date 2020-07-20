import React from 'react';
import style from './style-dialogs.module.css';
import { NavLink } from 'react-router-dom';
const Dialogs = (props) => {
    return (
        <div className={style.contentDialogs}>
            
            <div className={style.dialogsUser}>
                <h2>Dialogs</h2>
                <ul>
                    {/* <NavLink>Artem</NavLink>
                    <NavLink>Yunys</NavLink>
                    <NavLink>Vlad</NavLink>
                    <NavLink>Stella</NavLink>
                    <NavLink>Polina</NavLink>
                    <NavLink>Sasha</NavLink>
                    <NavLink>Victor</NavLink> */}
                </ul>
            </div>
            <div className={style.dialogsMessage}>
                <h2>Message</h2>
                <div>Hello</div>
                <div>Hi</div>
                <div>How are you</div>
                <div>It's good u</div>
            </div>
        </div>
    );
};

export default Dialogs;