import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-8 py-4 flex justify-between items-center">
      <Link to="/" className="font-serif text-xl font-bold text-green-400">ANANDA<span className="text-white font-light"> NATURALS</span></Link>
      <div className="flex gap-8 text-sm tracking-widest uppercase font-light">
        {[['/',  'Home'],['/treatments','Treatments'],['/about','About'],['/booking','Book']].map(([path,label])=>(
          <Link key={path} to={path} className="hover:text-green-400 transition-colors">{label}</Link>
        ))}
      </div>
      <Link to="/booking" className="px-5 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-full text-sm tracking-widest transition-all">Book Now</Link>
    </nav>
  )
}
