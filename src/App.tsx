import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DepartmentPage from './pages/DepartmentPage'
import AllDepartmentsPage from './pages/AllDepartmentsPage'
import MessageFromHead from './pages/MessageFromHead'
import NdliClubPage from './pages/NdliClubPage'
import AdmissionsPopup from './components/AdmissionsPopup'
import { useReveal } from './hooks/useReveal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useReveal(pathname)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden flex flex-col min-h-screen">
        <ScrollToTop />
        <AdmissionsPopup />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/departments" element={<AllDepartmentsPage />} />
          <Route path="/department/:slug/*" element={<DepartmentPage />} />
          <Route path="/message-from-head" element={<MessageFromHead />} />
          <Route path="/ndli-club" element={<NdliClubPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
