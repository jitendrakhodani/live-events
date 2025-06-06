import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BrowseEvents from './pages/BrowseEvents'
import CreateEvent from './pages/CreateEvent'
import EventDetails from './pages/EventDetails'
import Contact from './pages/Contact'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

function AppContent() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<BrowseEvents />} />
            <Route path="events/create" element={<CreateEvent />} />
            <Route path="events/:eventId" element={<EventDetails />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="auth/register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

export default App;
