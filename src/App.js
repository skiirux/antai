// Importing components
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';

// Main App component
function App() {
  return (
    <>
      {/* Setting up the Router for navigation */}
      <Router>
        <Routes>
          {/* Route for the Dashboard component */}
          <Route path="/" element={<Dashboard />} />
          {/* Route for the HomePage component */}
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;