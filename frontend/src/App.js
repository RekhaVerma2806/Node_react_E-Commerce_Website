import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
