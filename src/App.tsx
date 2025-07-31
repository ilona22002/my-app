import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import FormPage from './pages/FormPage.tsx';
import ContentPage from './pages/ContentPage.tsx';
import AccessibilityStatement from './components/AccessibilityStatement.tsx';
import './styles/global.css';
import './styles/components.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app" lang="en">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;