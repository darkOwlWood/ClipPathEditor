import React from 'react';
import '../../assets/styles/components/Header.scss';

const Header = () => (
    <header className="header">
        <img className="header__img" src="icon" alt=""/>
        <nav>
            <ul className="header__list">
                <li>
                    <a href="#">
                        <span>Editor</span>
                        <span className="underline"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>How to use</span>
                        <span className="underline"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>About</span>
                        <span className="underline"></span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;