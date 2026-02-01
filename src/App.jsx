import caseLogo from '/Img_HeaderLogo_365-Labs_Light.webp'
import './App.css'
import { SignInButton, SignOutButton, AuthStatus } from './components/AuthButtons'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import SignIn from './components/SignIn'
import CaseHome from './components/CaseHome'
import ThemeToggle from './components/ThemeToggle'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <a href="https://365labs.com/law-enforcement/" target="_blank">
          <img src={caseLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <div className="auth-area">
        <AuthStatus />
        <div style={{ display: 'flex', gap: '8px' }}>
          <SignInButton />
          <SignOutButton />
        </div>
      </div>

      <p style={{ marginTop: 16 }}>
        <Link to="/profile">Go to Profile (protected)</Link>
      </p>
    </>
  )
}

function App() {
  return (
    <div className="app-root">
      <nav style={{ padding: 12, borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/cases" style={{ marginRight: 12 }}>Cases</Link>
        <Link to="/profile">Profile</Link>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <ThemeToggle />
        </div>
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
          <Route path="/cases" element={<CaseHome />} />
          {/* <Route path="/cases" element={<ProtectedRoute><CaseHome /></ProtectedRoute>} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
