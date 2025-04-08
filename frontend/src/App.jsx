import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RLogin from "./pages/Rlogin";
import RSignup from "./pages/Rsignup";
import Restaurant from "./components/Restaurant";
import Navbar from "./components/Navbar"; // Ensure Navbar is included
import Collection from './components/Collection';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      {/* <Navbar /> Navbar is placed outside Routes to persist across pages */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Fixed Home route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/collection/:restaurantId" element={<Collection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Rlogin" element={<RLogin />} />
          <Route path="/Rsignup" element={<RSignup />} />
        </Routes>
      </main>
      {/* <footer/> */}
    </Router>
  );
}

export default App;
