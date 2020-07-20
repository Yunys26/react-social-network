import React from 'react';
import './style-header.css';
// import logo from './logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__navigation">
                <div className="header__navigation__search">
                    <input type="text" className="search__input" placeholder="Search"/>
                </div>
                {/* header__navigation__search */}
                <div className="header__navigation__menu">
                    <div className="header__navigation__menu__user">
                        <img src="img/Avatar.svg" alt="Avatar" width="40px" height="40px"></img>
                        <span class="user__name">Mateusz</span>
                    </div>
                    {/* header__navigation__menu__user */}
                    <div class="header__navigation__panel">
                        <a href="#1" class="navigation__panel__link">Home</a>
                        <a href="#1" class="navigation__panel__link">Create</a>
                    </div>
                    {/* header__navigation__panel */}
                    <div class="header__navigation__menu__icon">
                        <a href="#" class="icon__links">
                            {/* <svg width="24" height="24" fill="none">
                                <use xlink:href="img/icon/headerIcon/icon.svg#addFriends"></use>
                            </svg> */}
                        </a>
                        <a href="#" class="icon__links">
                            {/* <svg width="22" height="22" fill="none">
                                <use xlink:href="img/icon/headerIcon/icon.svg#message"></use>
                            </svg> */}
                        </a>
                        <a href="#" class="icon__links">
                            {/* <svg width="16" height="22" fill="none">
                                <use xlink:href="img/icon/headerIcon/icon.svg#bell"></use>
                            </svg> */}
                        </a>
                        <a href="#" class="icon__links">
                            {/* <svg width="24" height="24" fill="none">
                                <use xlink:href="img/icon/headerIcon/icon.svg#info"></use>
                            </svg> */}
                        </a>
                        <a href="#" class="icon__links">
                            {/* <svg width="16" height="16" fill="none">
                                <use xlink:href="img/icon/headerIcon/icon.svg#caret-down"></use>
                            </svg> */}
                        </a>
                    </div>
                </div>
                {/* header__navigation__menu */}
            </div>
            {/* header__navigation */}

            {/* <a href="#1"><img src={logo} alt="Logo" width="48px" height="48px"></img></a>
            <ul className="header__menu">
            </ul> */}
        </header>
    );
};

export default Header;