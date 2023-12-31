import React, { useState, useEffect } from 'react';
import style from "./header.module.scss";
import logo from "./Meteora-logotipo-branco.svg";
import MenuHamburger from './MenuHamburger';

const Header = ({ searchReturn }) => {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);
  const [search, setSearch] = useState('');
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setLarguraTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearch = () => {
    setIsSearchButtonClicked(true);
    searchReturn(search);
  };

  return (
    <header className={style.header}>
      <img className={style.logo__header} src={logo} alt="logotipo da meteora" />
      {larguraTela <= 390 ? (
        <MenuHamburger className={style.menuHamburger__header} />
      ) : (
        <nav className={style.nav__header}>
          <a href="/">Home</a>
          <a href="/">Nossas lojas</a>
          <a href="/">Novidades</a>
          <a href="/">Promoções</a>
        </nav>
      )}
      <div className={style.search__header}>
        <input
          type="search"
          placeholder="Digite o produto"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </header>
  );
}

export default Header;