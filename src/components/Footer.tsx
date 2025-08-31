import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <p>© 2025 Quraner Fariwala | Powered by Ethical Legacy</p>
    <nav>
      <Link to="/qurangallery">gallery</Link> | <Link to="/quranvideogallery">videogallery</Link> | <Link to="/quranpagespreview">QuranPagesPreview</Link>
    </nav>
  </div>
);

export default Footer;
