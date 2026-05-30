import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { treatments } from '../store/treatments'
const HealingScene = lazy(() => import('../components/3d/HealingScene'))

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen">
        <div className="absolute inset-0"><Suspense fallback={null}><HealingScene /></Suspense></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-8">
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1.2}}>
            <p className="text-green-400 text-xs tracking-[0.5em] uppercase mb-6">Holistic Natural Healing</p>
            <h1 className="font-serif text-7xl font-bold leading-tight mb-6">
              Heal From<br/><span className="text-green-400">Within</span>
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg font-light">Ancient wisdom meets modern science. Restore your body's natural balance with our certified naturopathic treatments.</p>
            <div className="flex gap-4 justify-center">
              <Link to="/booking" className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition-all">Book Consultation</Link>
              <Link to="/treatments" className="px-8 py-4 glass text-green-400 rounded-full hover:border-green-400 transition-all">Our Treatments</Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-12">Popular <span className="text-green-400">Treatments</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {treatments.slice(0,3).map((t,i)=>(
            <motion.div key={t.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.15}} className="glass rounded-2xl p-6 hover:border-green-400/50 transition-all">
              <div className="text-4xl mb-4">{t.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2">{t.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{t.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-bold">${t.price}</span>
                <span className="text-gray-400 text-sm">{t.duration} min</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
