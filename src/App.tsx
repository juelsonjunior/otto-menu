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
      <div className="flex flex-col items-center min-h-screen px-2 sm:px-4">
        {/* Header ocupa sempre 100% */}
        <div className="w-full">
          <Header />
        </div>

        {/* Main responsivo */}
        <main className="w-full max-w-[1200px] bg-white rounded-xl sm:rounded-2xl shadow-md p-3 sm:p-6 mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:categoryId" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer responsivo */}
        <div className="w-full max-w-[1200px] mt-4">
          <Footer className="w-full bg-white rounded-xl sm:rounded-2xl shadow-md" />
        </div>
      </div>
    </Router>
  );
}

export default App;
