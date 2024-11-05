import './App.css';
import PatientForm from './pages/PatientForm';
import Header from './components/Header';
import { useState } from 'react';
import TitleScreen from './pages/TitleScreen';

function App() {
  const [enter, setEnter] = useState(false);

  return (
    <div className="flex flex-col h-screen purple-dark text-foreground bg-background">
      {enter ?
        <>
          <Header />
          <PatientForm />
        </> :
        <TitleScreen enterForm={() => setEnter(true)}/>
      }
    </div>
  );
}

export default App;
