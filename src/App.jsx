// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './Components/Common/ThemeProvider';
// import DevOpsPortfolio2 from './Components/Pages/Portfolio2';
// import ProjectsPage from './Components/Pages/ProjectsPage';


// const App = () => {
//   return (
//     <ThemeProvider>
//       <Router>
//           <div className="flex-1">
//             <Routes>
//               <Route path="/" element={<DevOpsPortfolio2 />} />
//               <Route path="/projects" element={<ProjectsPage />} />
//             </Routes>
//           </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './Components/Common/ThemeProvider';
import DevOpsPortfolio2 from './Components/Pages/Portfolio2';
import ProjectsPage from './Components/Pages/ProjectsPage';
import ReactGA from 'react-ga4';

// Initialize Google Analytics with your measurement ID
ReactGA.initialize('G-RVX7ZQ39BP'); // Replace with your actual measurement ID

// Create a component to track page views
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Send pageview with the current location path
    ReactGA.send({ hitType: "pageview", page: location.pathname });
    console.log('Page view tracked:', location.pathname);
  }, [location]);
  
  return null;
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <RouteTracker /> {/* Add the tracker component inside Router */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<DevOpsPortfolio2 />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;