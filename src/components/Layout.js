import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Minha Landing Page</h1>
      </header>
      <div className="container">
        {children}
      </div>
      <footer style={{ textAlign: 'center', marginTop: '20px', color: '#555555' }}>
        <p>© 2025 Minha Empresa</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
