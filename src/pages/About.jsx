import React from 'react'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <div className="min-h-screen pt-24 px-8 max-w-5xl mx-auto pb-20">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
        <h1 className="font-serif text-6xl font-bold mb-6">Our <span className="text-green-400">Philosophy</span></h1>
        <p className="text-gray-300 text-xl font-light leading-relaxed mb-12 max-w-2xl">At Ananda Naturals, we believe healing is not the absence of disease — it is the presence of vitality, balance, and harmony.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[['🌱','Natural First','Every remedy begins with nature — herbs, breath, touch, and intention'],['🧬','Evidence-Based','All treatments are backed by both ancient wisdom and modern naturopathic research'],['🤝','Personalized Care','No two bodies are alike. Your healing plan is uniquely yours']].map(([icon,title,desc])=>(
            <div key={title} className="glass rounded-2xl p-6">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2 text-green-400">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <div className="glass rounded-2xl p-8">
          <h2 className="font-serif text-3xl font-bold mb-4">Our <span className="text-green-400">Team</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{name:'Dr. Priya Sharma',role:'Chief Naturopath · 15 years',bio:'Certified in Ayurveda and integrative medicine. PhD in Naturopathic Sciences.'},
              {name:'Dr. Arjun Mehta',role:'Acupuncture Specialist · 12 years',bio:'Licensed TCM practitioner with expertise in pain management and oncology support.'}].map(d=>(
              <div key={d.name} className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex-shrink-0 flex items-center justify-center font-bold text-black text-lg">{d.name[3]}</div>
                <div>
                  <h4 className="font-bold">{d.name}</h4>
                  <p className="text-green-400 text-sm mb-1">{d.role}</p>
                  <p className="text-gray-400 text-sm">{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
