import { TaskContainer } from "./components/taskContainer";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/page-acceuil/HomePage'; // Importation de la page d'accueil


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taskcontainer" element={<TaskContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
