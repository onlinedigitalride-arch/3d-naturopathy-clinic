import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { treatments } from '../store/treatments'
export default function Booking() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ name:'', email:'', phone:'', date:'', notes:'' })
  return (
    <div className="min-h-screen pt-24 px-8 max-w-3xl mx-auto pb-20">
      <h1 className="font-serif text-5xl font-bold mb-4">Book a <span className="text-green-400">Session</span></h1>
      <div className="flex gap-2 mb-10">
        {['Select Treatment','Your Details','Confirm'].map((s,i)=>(
          <div key={s} className={`flex-1 py-2 text-center text-xs uppercase tracking-widest rounded-full transition-all ${step===i+1?'bg-green-500 text-black font-bold':'glass text-gray-400'}`}>{s}</div>
        ))}
      </div>
      {step===1 && (
        <div className="grid gap-4">
          {treatments.map(t=>(
            <div key={t.id} onClick={()=>{setSelected(t);setStep(2)}} className={`glass rounded-xl p-5 cursor-pointer hover:border-green-400 transition-all flex items-center gap-4 ${selected?.id===t.id?'border-green-400':''}`}>
              <span className="text-3xl">{t.icon}</span>
              <div className="flex-1">
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-gray-400 text-sm">{t.duration} min</p>
              </div>
              <span className="text-green-400 font-bold">${t.price}</span>
            </div>
          ))}
        </div>
      )}
      {step===2 && (
        <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="glass rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-2">Selected: <span className="text-green-400">{selected?.name}</span></h3>
          <p className="text-gray-400 text-sm mb-6">${selected?.price} · {selected?.duration} min</p>
          <div className="space-y-4 mb-6">
            {['name','email','phone','date'].map(field=>(
              <input key={field} type={field==='date'?'date':'text'} placeholder={field.charAt(0).toUpperCase()+field.slice(1)} value={form[field]} onChange={e=>setForm({...form,[field]:e.target.value})} className="w-full bg-transparent border border-gray-700 focus:border-green-400 rounded-lg px-4 py-3 outline-none transition-colors"/>
            ))}
            <textarea placeholder="Special notes or health concerns..." value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} className="w-full bg-transparent border border-gray-700 focus:border-green-400 rounded-lg px-4 py-3 outline-none transition-colors h-28 resize-none"/>
          </div>
          <div className="flex gap-3">
            <button onClick={()=>setStep(1)} className="px-6 py-3 glass rounded-full hover:border-green-400 transition-all">Back</button>
            <button onClick={()=>setStep(3)} className="flex-1 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all">Continue →</button>
          </div>
        </motion.div>
      )}
      {step===3 && (
        <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="glass rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🌿</div>
          <h2 className="font-serif text-3xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-gray-400 mb-4">Thank you, <span className="text-green-400">{form.name||'friend'}</span>. We will send a confirmation to {form.email||'your email'}.</p>
          <div className="glass rounded-xl p-4 mb-6 text-sm">
            <p className="text-green-400 font-semibold">{selected?.name}</p>
            <p className="text-gray-400">{form.date} · {selected?.duration} min · ${selected?.price}</p>
          </div>
          <button onClick={()=>{setStep(1);setSelected(null);setForm({name:'',email:'',phone:'',date:'',notes:''})}} className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all">Book Another</button>
        </motion.div>
      )}
    </div>
  )
}
