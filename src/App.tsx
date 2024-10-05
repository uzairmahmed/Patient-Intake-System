import React from 'react';
import logo from './logo.svg';
import './App.css';
import PatientForm from './components/PatientForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen purple-dark text-foreground bg-background">
      <Header />
      <PatientForm />
      <Footer />
    </div>
  );
}

export default App;
