import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';



const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main>
        <Header />
        
        
        <Contact />
      </main>
    </div>
  );
};
export default App;
