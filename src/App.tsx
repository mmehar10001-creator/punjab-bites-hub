import { Routes, Route } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppFab } from "./components/WhatsAppFab";
import Index from "./pages/Index";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppFab />
    </div>
  );
}