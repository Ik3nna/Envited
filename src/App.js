import './App.css';
import  HomeComponent from "./home";
import Create from './create';
import Event from './event';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path='/create' element= {<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
