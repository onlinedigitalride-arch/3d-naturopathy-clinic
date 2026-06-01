import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-8 py-4 flex justify-between items-center">
      <Link to="/" className="font-serif text-xl font-bold text-green-600">ANANDA<span className="text-gray-700 font-light"> NATURALS</span></Link>
      <div className="flex gap-8 text-sm tracking-widest uppercase font-light text-gray-500">
        {[['/', 'Home'],['/treatments','Treatments'],['/about','About'],['/booking','Book']].map(([path,label])=>(
          <Link key={path} to={path} className="hover:text-green-600 transition-colors">{label}</Link>
        ))}
      </div>
      <Link to="/booking" className="px-5 py-2 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded-full text-sm tracking-widest transition-all">Book Now</Link>
    </nav>
  )
}
