
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Introduce from './Components/Introduce';
import Contents from './Components/Contents';
import Vision from './Components/Vision';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contents" element={<Contents/>}/>
        <Route path="/introduce" element={<Introduce/>}/>
        <Route path="/vision" element={<Vision/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
