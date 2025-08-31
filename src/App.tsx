import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuranGallery from './pages/QuranGallery';
import QuranVideoGallery from './pages/QuranVideoGallery';
import QuranPagesPreview from './pages/QuranPagesPreview';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router basename="/qf">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qurangallery" element={<QuranGallery />} />
        <Route path="/QuranVideoGallery" element={<QuranVideoGallery />} />
        <Route path="/QuranPagesPreview" element={<QuranPagesPreview />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <Footer />    
    </Router>
  );
}

export default App;
