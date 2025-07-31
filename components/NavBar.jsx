import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png'; // Asegurate de que la ruta sea correcta

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo Vino Nacional" style={styles.logo} />
      </div>
      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#6b1f1f',
    color: 'white'
  },
  logoContainer: {
    width: '150px'
  },
  logo: {
    width: '100%',
    height: 'auto'
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem'
  }
};

export default NavBar;