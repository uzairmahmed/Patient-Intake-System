import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PatientForm from './components/PatientForm';
import Header from './components/Header';

function App() { 
  return (
    <div className="flex flex-col h-screen purple-dark text-foreground bg-background">
      <Header />
      <PatientForm />
    </div>
  );
}

export default App;
