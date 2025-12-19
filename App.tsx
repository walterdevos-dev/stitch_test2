
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BrowsePage from './pages/BrowsePage';
import SubmitPage from './pages/SubmitPage';
import DetailsPage from './pages/DetailsPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-dark">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<BrowsePage />} />
            <Route path="/submit" element={<SubmitPage />} />
            <Route path="/station/:id" element={<DetailsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <footer className="border-t border-border-dark py-12 bg-surface-dark">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined text-primary !text-[32px]">radio</span>
                <span className="text-xl font-black tracking-tight">RadioDirectory</span>
              </div>
              <p className="text-[#92a4c9] text-sm">© 2024 RadioDirectory Inc. Connecting global airwaves.</p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm font-bold text-[#92a4c9]">
              <a href="#" className="hover:text-white transition-colors">Broadcasters</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
