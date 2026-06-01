import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { treatments } from '../store/treatments'
export default function Treatments() {
  return (
    <div className="min-h-screen pt-24 px-8 max-w-6xl mx-auto pb-20 bg-[#F4FBF7]">
      <h1 className="font-serif text-5xl font-bold mb-4 text-gray-900">Our <span className="text-green-500">Treatments</span></h1>
      <p className="text-gray-400 mb-12">Each treatment is tailored to your unique constitution and healing needs</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t,i)=>(
          <motion.div key={t.id} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}}
            className="bg-white rounded-2xl p-6 hover:shadow-xl hover:shadow-green-50 transition-all border border-gray-100">
            <div className="text-5xl mb-4">{t.icon}</div>
            <span className="text-xs text-green-500 tracking-widest uppercase font-medium">{t.category}</span>
            <h3 className="font-serif text-xl font-bold mt-1 mb-3 text-gray-900">{t.name}</h3>
            <p className="text-gray-400 text-sm mb-5">{t.description}</p>
            <div className="flex justify-between items-center">
              <div><span className="text-2xl font-bold text-gray-900">${t.price}</span><span className="text-gray-400 text-sm ml-2">{t.duration} min</span></div>
              <Link to="/booking" className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-full text-sm font-semibold transition-all">Book</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
