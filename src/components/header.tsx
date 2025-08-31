import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <p>📖 Quraner Fariwala</p>
    <nav>
      <Link to="/">Home</Link> | <Link to="/qurangallery">gallery</Link> | <Link to="/quranvideogallery">videogallery</Link> | <Link to="/quranpagespreview">QuranPagesPreview</Link></nav>
  </div>
);

export default Header;
