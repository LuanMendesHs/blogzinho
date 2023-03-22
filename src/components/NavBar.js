//Meu CSS
import styles from './NavBar.module.css'

//Meus Imports
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={ `${styles.navbar} d-flex justify-content-between align-items-center p-4 ` }>
        <NavLink to="/"  className={styles.brand}>
            <span>Blogzinho</span>
        </NavLink>

        <ul className={ styles.link_list}>
            <li> <NavLink to="/"
            className={ ({ isActive }) => (isActive ? styles.active : "") }> Home </NavLink> </li>
            <li> <NavLink to="/login"
            className={ ({ isActive }) => (isActive ? styles.active : "") }> Entrar </NavLink> </li>
            <li> <NavLink to="/register"
            className={ ({ isActive }) => (isActive ? styles.active : "") }> Cadastrar </NavLink> </li>
            <li> <NavLink to="/about"
            className={ ({ isActive }) => (isActive ? styles.active : "") }> Sobre </NavLink> </li>
        </ul>
    </nav>
  )
};

export default NavBar