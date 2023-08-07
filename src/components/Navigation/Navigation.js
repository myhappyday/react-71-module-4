import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { memo } from "react";

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      Форма
    </NavLink>
    <NavLink
      to="/colorpicker"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      Колорпікер
    </NavLink>
    <NavLink
      to="/counter"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      Лічильник
    </NavLink>
    <NavLink
      to="/clock"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      Годинник
    </NavLink>
    <NavLink
      to="/pokemon"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      Покемони з хуками
    </NavLink>
    <NavLink
      to="/skip-first-render"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      Пропуск першого рендера
    </NavLink>
    <NavLink
      to="/counter-4.2"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      useReducer
    </NavLink>
    <NavLink
      to="/notes"
      className={styles.link}
      // activeClassName={styles.linkActive}
    >
      useMemo
    </NavLink>
    <NavLink
      to="/news"
      className={styles.link}
      // activeStyle={styles.linkActive}
    >
      Новини
    </NavLink>
  </nav>
);

// export default Navigation;

export default memo(Navigation);
