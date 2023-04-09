import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import Home from './pages/Home';
import Upload from './pages/Upload';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/readMore' element={<Product/>}/>
            <Route path='/upload' element={<Upload/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
