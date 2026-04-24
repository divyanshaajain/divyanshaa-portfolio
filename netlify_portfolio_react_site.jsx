import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio(){
  const projects = [
    {title:'Cricbuzz LiveStats Platform',metric:'Real-Time Analytics',desc:'Engineered a live analytics platform using APIs, SQL, and Streamlit to unify score data, automate reporting, and support faster insight generation.'},
    {title:'IPL Performance Dashboard',metric:'Executive KPI Reporting',desc:'Built interactive dashboards evaluating team efficiency, venue patterns, player trends, and decision variables across seasons.'},
    {title:'FedEx Operations EDA',metric:'Operational Efficiency',desc:'Analyzed logistics datasets to identify delay drivers, service bottlenecks, and process improvement opportunities.'},
    {title:'Housing Price Prediction',metric:'1,000+ Records Modelled',desc:'Developed a regression model to estimate housing values and isolate core commercial demand drivers.'},
  ];

  const skills = ['Business Analysis','Consulting','Strategy','SQL','Python','Power BI','Tableau','Excel','Research','Executive Communication','AI Productivity'];

  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]' />

      <section className='max-w-7xl mx-auto px-6 pt-28 pb-20'>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
          <p className='text-amber-300 tracking-[0.4em] uppercase text-xs md:text-sm'>DIVYANSHAA JAIN • IIM SAMBALPUR</p>
          <h1 className='mt-6 text-6xl md:text-8xl font-semibold leading-[0.95] max-w-6xl bg-gradient-to-r from-white via-white to-amber-300 bg-clip-text text-transparent'>Business Analyst for High-Growth Teams & Complex Decisions</h1>
          <p className='mt-8 text-xl text-slate-300 max-w-3xl'>I combine analytical rigor, commercial judgment, and execution discipline to solve business problems, improve performance, and support leadership decisions.</p>
          <div className='mt-10 flex flex-wrap gap-4'>
            <a href='#projects' className='px-6 py-3 rounded-full bg-amber-300 text-black font-medium hover:scale-105 transition-all duration-300 inline-flex items-center gap-2'>Review Portfolio <ArrowRight size={18}/></a>
            <a href='#contact' className='px-6 py-3 rounded-full border border-white/15 hover:border-amber-300/40 transition-all duration-300'>Open Conversation</a>
          </div>
        </motion.div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6'>
        {['Strategy Thinking','Data-Led Execution','Executive Communication'].map((item,i)=><div key={i} className='p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10'>{item}</div>)}
      </section>

      <section className='max-w-7xl mx-auto px-6 py-16'>
        <h2 className='text-4xl font-semibold mb-6'>Executive Summary</h2>
        <p className='text-slate-300 max-w-4xl text-lg leading-8'>Indian Institute of Management Sambalpur candidate with distinction across strategy, analytics, communication, and operating improvement. Recognized for ownership, disciplined execution, and converting ambiguity into clear action plans.</p>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-16'>
        <h2 className='text-4xl font-semibold mb-8'>Advisory Toolkit</h2>
        <div className='flex flex-wrap gap-3'>
          {skills.map(skill => <span key={skill} className='px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-amber-300/40 transition-all duration-300'>{skill}</span>)}
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-16'>
        <h2 className='text-4xl font-semibold mb-8'>Experience & Leadership</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='p-7 rounded-3xl bg-white/5 border border-white/10'>
            <h3 className='text-xl font-medium'>Prashray Foundation</h3>
            <p className='mt-3 text-slate-400'>Tracked 5+ performance metrics, built executive dashboards, and supported leadership decisions through structured impact analysis.</p>
          </div>
          <div className='p-7 rounded-3xl bg-white/5 border border-white/10'>
            <h3 className='text-xl font-medium'>Deloitte Australia via Forage</h3>
            <p className='mt-3 text-slate-400'>Delivered dashboard-led recommendations, analytical problem solving, and client-style insights in a consulting simulation environment.</p>
          </div>
        </div>
      </section>

      <section id='projects' className='max-w-7xl mx-auto px-6 py-16'>
        <h2 className='text-4xl font-semibold mb-8'>Selected Strategic Work</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {projects.map((project,i)=>(
            <motion.div key={i} whileHover={{y:-6}} className='p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-all duration-300'>
              <p className='text-xs uppercase tracking-[0.3em] text-amber-300'>{project.metric}</p>
              <h3 className='mt-3 text-2xl font-medium'>{project.title}</h3>
              <p className='mt-3 text-slate-400 leading-7'>{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-16'>
        <h2 className='text-4xl font-semibold mb-8'>Credentials, Awards & Merit</h2>
        <div className='p-7 rounded-3xl bg-white/5 border border-white/10 text-slate-300 leading-8'>Google Analytics Certified • Oracle AI Foundations • NFLAT Central Zone Rank #2 • TERI Global Rank #3 • Consistent academic excellence</div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-16'>
        <h2 className='text-4xl font-semibold mb-8'>Venture Build</h2>
        <div className='p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-amber-300/20'>
          <p className='text-xs uppercase tracking-[0.3em] text-amber-300'>Product Innovation</p>
          <h3 className='mt-3 text-3xl font-medium'>SchoolBridge</h3>
          <p className='mt-4 text-slate-300 leading-8 max-w-4xl'>Designed a multi-tenant education SaaS platform serving administrators, teachers, and families through one mobile-first operating system built for scale, governance, adoption, and premium user experience.</p>
        </div>
      </section>

      <section id='contact' className='max-w-7xl mx-auto px-6 py-24'>
        <div className='p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div>
            <h2 className='text-4xl font-semibold'>Open Conversation</h2>
            <p className='mt-3 text-slate-400'>Available for internships, analyst roles, consulting opportunities, and strategic projects.</p>
          </div>
          <a href='mailto:divyanshaa.jain@gmail.com' className='px-6 py-3 rounded-full bg-amber-300 text-black inline-flex items-center gap-2 font-medium'>divyanshaa.jain@gmail.com <Mail size={18}/></a>
        </div>
      </section>
    </div>
  )
}
