import logo from './logo.svg';
import Header from './component/Header';
import Footer from './component/Footer';
import Teammate from './component/Teammate';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Vision from './component/Vision';
import About from './component/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Home />}>
          </Route>
          <Route path="/vision" element={<Vision />} />
          <Route path="/teammate" element={<Teammate />} />
          <Route path="/teammate/:member" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
