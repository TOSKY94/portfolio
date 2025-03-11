import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import ExperiencePage from './pages/Experience';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/about"  element ={<About/>}/>
            <Route path="/experience" element ={<ExperiencePage/>}/>
            <Route path="/portfolio" element ={<Portfolio/>}/>
            <Route path="/blog"  element = {<Blog/>}/>
            <Route path="/contact" element = {<Contact/>} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
