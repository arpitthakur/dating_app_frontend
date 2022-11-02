import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Header />} />
        
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;