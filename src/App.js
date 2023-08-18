
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogContent from './pages/BlogContent/BlogContent';
import LandingPage from './pages/LandingPage/LandingPage';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blogContent' element={<BlogContent />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
