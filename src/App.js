import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;