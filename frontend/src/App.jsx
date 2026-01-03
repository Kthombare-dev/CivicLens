import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { TranslationProvider } from './context/TranslationContext'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ReportPage from './pages/ReportPage'
import './App.css'

function App() {
  return (
    <Router>
      <AuthProvider>
        <TranslationProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/report" element={<ReportPage />} />
            </Routes>
          </Layout>
        </TranslationProvider>
      </AuthProvider>
    </Router>
  )
}

export default App