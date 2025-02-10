import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Footer Placeholder */}
        <footer className="bg-gray-800 text-white text-center p-4">
          © {new Date().getFullYear()} News Website. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
