import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Teammate from "./pages/Teammate";
import Vision from './pages/Vision';
import NoPage from './pages/NoPage';
import Custom from './pages/Custom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Layout />}>
        <Route index element = {<Home/>}/>
        <Route path ="teammate" element = {<Teammate />}/>
        <Route path ="vision" element = {<Vision />}/>
        <Route path ="custom" element = {<Custom/>}/>
        <Route path ="*" element = {<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
