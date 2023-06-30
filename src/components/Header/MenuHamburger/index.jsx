import React, { useState } from 'react';
import style from "./MenuHamburger.module.scss";

const MenuHamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.conteiner__hamburger__menu}>
            <div className={style.hamburger__menu} onClick={handleClick}>
                <span className={style.line}></span>
                <span className={style.line}></span>
                <span className={style.line}></span>
            </div>
            {isOpen && (
                <ul className={style.menu__list}>
                    <div className={style.menu__close} onClick={handleClick}>
                        <span className={style.line__close}></span>
                        <span className={style.line__close}></span>
                    </div>
                    <li>Home</li>
                    <li>Nossas lojas</li>
                    <li>Novidades</li>
                    <li>Promoções</li>
                </ul>
            )}
        </div>
    );
};

export default MenuHamburger;