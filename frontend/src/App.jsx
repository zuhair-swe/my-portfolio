import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Admin Page */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={
          <ProtectedRoute>
              <Admin />
          </ProtectedRoute>
            }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;