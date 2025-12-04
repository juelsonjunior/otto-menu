import "./App.css";
import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { CategoryPage } from "./pages/categoryPage";
import { ContactPage } from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen space-y-3">
        <Header />

        <main className="w-full max-w-[1200px] bg-white rounded-2xl shadow-md p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:categoryId" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer className="w-full max-w-[1200px] bg-white rounded-2xl shadow-md mx-auto" />
      </div>
    </Router>
  );
}

export default App;
