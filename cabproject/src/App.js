import logo from './logo.svg';
import Header from './Components/Header'
import Footer from './Components/Footer';
import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import { Routes,Route,Link, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
