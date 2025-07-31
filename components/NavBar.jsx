import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Vino Nacional</div>
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
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem'
  }
};

export default NavBar;