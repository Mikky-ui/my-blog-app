import LoginPage from "./components/Auth/LoginPage"
import RegisterPage from "./components/Auth/RegisterPage"
import HomePage from "./components/Posts/HomePage";
import PostDetails from "./components/Posts/PostDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/posts" element={<PostDetails />} />
        <Route path="/posts/:postID" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}
export default App;