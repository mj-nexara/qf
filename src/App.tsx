import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import reactLogo from './assets/logo.png'
import viteLogo from '/mjahmad.jpg'
import './App.css'



const App = () => (
  <Router>
 <div>
        <a href="" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>📖 Quraner Fariwala</h1>
        <h3>Research • Printing • Distribution</h3>
        <h3> of Holy Quran</h3></div>
        <div class="mj-buttonr">
         <button>Explore Mission</button>
         <button>Explore Mission</button>
         <button>Explore Mission</button>
        </div>
        <p>এটি একটি নৈতিক স্মারক, একটি আধ্যাত্মিক দলিল, এবং একটি ভবিষ্যতের সেতুবন্ধন।</p>
    <Routes>
      <Route path="/" element={<Home />} />
           </Routes>
    <Footer />
  </Router>
);

export default App;

