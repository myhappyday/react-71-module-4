import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { memo } from 'react';

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Форма
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Колорпікер
    </NavLink>

    <NavLink
      to="/counter"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Лічильник
    </NavLink>

    <NavLink
      to="/clock"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Годинник
    </NavLink>

    <NavLink
      to="/pokemon"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Покемони з хуками
    </NavLink>

    <NavLink
      to="/skip-first-render"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Пропуск першого рендера
    </NavLink>

    <NavLink
      to="/counter-4.2"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      useReducer
    </NavLink>

    <NavLink
      to="/notes"
      className={styles.link}
      // activeClassName={styles.activeLink}
    >
      useMemo
    </NavLink>
  </nav>
);

// export default Navigation;

export default memo(Navigation);
