import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Components/Common/ThemeProvider';
import DevOpsPortfolio2 from './Components/Pages/Portfolio2';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<DevOpsPortfolio2 />} />
            </Routes>
          </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;