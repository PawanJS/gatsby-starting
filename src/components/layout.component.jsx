import React from 'react';

const Layout = ({ children }) => (
  <>
    <div className="container">{children}</div>
    <Footer />
  </>
);

const Footer = () => (
  <footer className="footer">&copy; Copyright 2021 PawanJS</footer>
);

export default Layout;
