import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <p>© 2025 Quraner Fariwala | Powered by Ethical Legacy</p>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/quranlab">QuranLab</Link> | <Link to="/district">Districts</Link> | <Link to="/legal">Legal</Link>
    </nav>
  </div>
);

export default Footer;
