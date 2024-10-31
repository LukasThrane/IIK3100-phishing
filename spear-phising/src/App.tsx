// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-orange-500">
      <Navbar />
      <main className="flex-grow">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
