import logo from './logo.svg';
import './App.css';
import Display from './Componet/Display';
import ViewData from "./Componet/ViewData";
import { Routes, Route } from "react-router-dom";
import AddData from './Componet/AddData';
import UpdateData from './Componet/UpdateData';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/view" element={<ViewData />} />
        <Route path="/view/:id" element={<ViewData />} />
        <Route path="/add" element={<AddData />} />
      </Routes>
    </>
  );
}

export default App;
