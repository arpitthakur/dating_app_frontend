import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import Header from './Header';
import Forgotpassword from "./Forgotpassword";
import Layout from "./AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout profileIcon={true} />} />
        <Route path="/reset" element={<Forgotpassword/>} />
        
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;