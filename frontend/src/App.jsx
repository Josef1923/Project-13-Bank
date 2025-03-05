import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import UserDashboard from "./pages/profile";
import "./app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<UserDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;