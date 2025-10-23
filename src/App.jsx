import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import pages (we'll create these)
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import SignInScreen from './pages/auth/SignInScreen';
import SignUpScreen from './pages/auth/SignUpScreen';
import SignUpSuccessScreen from './pages/auth/SignUpSuccessScreen';
import ChangePasswordScreen from './pages/auth/ChangePasswordScreen';
import DashboardScreen from './pages/dashboard/DashboardScreen';
import TradingScreen from './pages/trading/TradingScreen';
import PortfolioScreen from './pages/portfolio/PortfolioScreen';
import GamingScreen from './pages/gaming/GamingScreen';
import InsightsScreen from './pages/insights/InsightsScreen';
import ProfileScreen from './pages/ProfileScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Show splash for 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    // Check if user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/signup-success" element={<SignUpSuccessScreen />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/trading"
          element={isAuthenticated ? <TradingScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/portfolio"
          element={isAuthenticated ? <PortfolioScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/gaming"
          element={isAuthenticated ? <GamingScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/insights"
          element={isAuthenticated ? <InsightsScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <ProfileScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/change-password"
          element={isAuthenticated ? <ChangePasswordScreen /> : <Navigate to="/signin" />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
