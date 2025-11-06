import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { NewsletterModal } from './components/NewsletterModal';
import { SearchOverlay } from './components/SearchOverlay';

// Pages
import { HomePage } from './pages/HomePage';
import { BlogListingPage } from './pages/BlogListingPage';
import { SingleBlogPage } from './pages/SingleBlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          
          {/* Global Modals and Overlays */}
          <NewsletterModal />
          <SearchOverlay />
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </ThemeProvider>
  );
}
