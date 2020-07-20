import React from 'react';
import style from './style-main-section.module.css'
import './style-main-section.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import Content from './Content/Content';
import Dialogs from './Diaglos/Dialogs';

const MainSection = (props) => {
    return (
        <main className="main">
            <menu className="main__sidebar">
                <li><NavLink to="/profile" activeClassName={style.sidebar__link}>Profile</NavLink></li>
                <li><NavLink to="/messages" activeClassName={style.sidebar__link}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={style.sidebar__link}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={style.sidebar__link}>Music</NavLink></li>
                <li><NavLink to="/setting" activeClassName={style.sidebar__link}>Setting</NavLink></li>
            </menu>
            <section className="content">
                <Route path="/profile" component={Content}/>
                <Route path="/messages" component={Dialogs}/>
            </section>

        </main>
    );
}

export default MainSection;