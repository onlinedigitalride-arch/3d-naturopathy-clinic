import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
const Home = lazy(() => import('./pages/Home'))
const Treatments = lazy(() => import('./pages/Treatments'))
const Booking = lazy(() => import('./pages/Booking'))
const About = lazy(() => import('./pages/About'))

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1A12]">
      <Navbar />
      <Suspense fallback={<div className="fixed inset-0 bg-[#0D1A12] flex items-center justify-center"><div className="w-12 h-12 border-2 border-green-400 border-t-transparent rounded-full animate-spin"/></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  )
}
