"use client";

import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent"
import Aurora from "./components/Aurora/Aurora";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-neutral-50 via-slate-50/80 to-zinc-50/90 selection:bg-neutral-200/40">
      {/* Aurora Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <Aurora
          colorStops={["#0f172a", "#475569", "#f8fafc"]}
          blend={1.2}
          amplitude={1.5}
          speed={0.2}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 container mx-auto px-6 py-8">
        <div className="flex justify-between items-center backdrop-blur-xl bg-white/90 rounded-2xl px-8 py-4 shadow-lg shadow-neutral-200/40 border border-white/70">
          <AnimatedContent 
            distance={60}
            direction="horizontal"
            reverse={false}
            config={{ tension: 140, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-neutral-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-neutral-800 to-slate-600 bg-clip-text text-transparent">
                DKWP
              </span>
            </div>
          </AnimatedContent>
          
          <AnimatedContent 
            distance={60}
            direction="horizontal"
            reverse={true}
            config={{ tension: 140, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-neutral-700 hover:text-neutral-900 transition-all duration-300 font-medium relative group px-3 py-2"
                >
                  {item}
                  <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-neutral-800 to-slate-600 group-hover:w-[calc(100%-24px)] transition-all duration-300 rounded-full"></span>
                </a>
              ))}
            </div>
          </AnimatedContent>

          {/* Mobile Menu Button */}
          <AnimatedContent 
            distance={60}
            direction="horizontal"
            reverse={true}
            config={{ tension: 140, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <button className="md:hidden p-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </AnimatedContent>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[calc(100vh-160px)] items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex flex-col gap-8 max-w-4xl">
              {/* Status Badge */}
              <AnimatedContent 
                distance={100}
                direction="vertical"
                reverse={false}
                config={{ tension: 120, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200/60 text-neutral-700 font-medium w-fit shadow-lg">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-sm"></div>
                  Available for opportunities
                </div>
              </AnimatedContent>

              {/* Main Heading */}
              <AnimatedContent 
                distance={120}
                direction="vertical"
                reverse={false}
                config={{ tension: 100, friction: 20 }}
                initialOpacity={0.3}
                animateOpacity
                scale={1.01}
                threshold={0.2}
              >
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-neutral-800 via-slate-700 to-neutral-600 bg-clip-text text-transparent">
                      Hello, I'm
                    </span>
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-4xl lg:text-5xl font-bold text-neutral-800">aspiring to be a</span>
                    <RotatingText
                      texts={['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'Tech Innovator']}
                      mainClassName="px-8 py-4 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-800 text-white rounded-2xl text-3xl lg:text-4xl font-bold inline-flex transition-all shadow-2xl shadow-neutral-500/20 hover:shadow-neutral-500/30 transform hover:scale-[1.02] border border-white/10"
                      staggerFrom={"center"}
                      initial={{ y: "120%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.03}
                      splitLevelClassName="overflow-hidden pb-1"
                      transition={{ type: "spring", damping: 35, stiffness: 500 }}
                      rotationInterval={4000}
                    />
                  </div>
                </div>
              </AnimatedContent>

              {/* Name */}
              <div className="space-y-2">
                <SplitText
                  text="Dhani Kusuma Wardana Putra"
                  className="text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-neutral-900 via-slate-800 to-zinc-700 bg-clip-text text-transparent"
                  delay={100}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,80px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  threshold={0.2}
                  rootMargin="-30px"
                />
              </div>

              {/* Description */}
              <div className="max-w-3xl">
                <BlurText
                  text="Mahasiswa semester 3 di Global Institute jurusan Software Engineering dengan passion mendalam dalam pengembangan perangkat lunak. Saya fokus mempelajari teknologi modern untuk menciptakan solusi digital yang inovatif dan memberikan dampak positif bagi masyarakat."
                  delay={80}
                  animateBy="words"
                  direction="top"
                  className="text-xl lg:text-2xl text-neutral-600 leading-relaxed font-light"
                />
              </div>

              {/* Stats */}
              <AnimatedContent 
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 120, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.3}
              >
                <div className="grid grid-cols-3 gap-6 py-8">
                  {[
                    { value: "3+", label: "Semesters", icon: "🎓" },
                    { value: "15+", label: "Technologies", icon: "⚡" },
                    { value: "∞", label: "Learning", icon: "🚀" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-neutral-800 to-slate-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
                        <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedContent>

              {/* CTA Buttons */}
              <AnimatedContent 
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 120, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.3}
              >
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group px-10 py-5 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-800 text-white rounded-2xl font-semibold shadow-2xl shadow-neutral-500/20 hover:shadow-neutral-500/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-zinc-700 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Explore My Journey</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <button className="px-10 py-5 border-2 border-neutral-300 text-neutral-700 rounded-2xl font-semibold hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition-all duration-300 backdrop-blur-sm bg-white/60">
                    Download Resume
                  </button>
                </div>
              </AnimatedContent>

              {/* Social Links */}
              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={false}
                config={{ tension: 140, friction: 30 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="flex gap-4 pt-4">
                  {[
                    { 
                      name: 'GitHub', 
                      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                      color: 'hover:bg-neutral-800'
                    },
                    { 
                      name: 'LinkedIn', 
                      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                      color: 'hover:bg-blue-600'
                    },
                    { 
                      name: 'Instagram', 
                      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                      color: 'hover:bg-rose-500'
                    },
                    { 
                      name: 'Email', 
                      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                      color: 'hover:bg-emerald-600'
                    }
                  ].map((social, index) => (
                    <a 
                      key={social.name}
                      href="#" 
                      className={`group w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-white/60 ${social.color} hover:text-white`}
                      title={social.name}
                    >
                      <svg className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon}/>
                      </svg>
                    </a>
                  ))}
                </div>
              </AnimatedContent>
            </div>
          </div>

          {/* Right Content - 3D Lanyard - Tanpa Canvas, Lebih Ringkas */}
<div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
  <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
    {/* Decorative Background */}
    <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-neutral-500/5 to-slate-500/5 rounded-full blur-xl"></div>
    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-zinc-500/5 to-neutral-500/5 rounded-full blur-lg"></div>
    
    {/* Lanyard Display */}
    <div className="w-[250px] h-auto scale-75 lg:scale-90">
      <Lanyard 
        position={[0, 0, 10]} 
        gravity={[0, -30, 0]} 
        // segments={8}
        // quality="low"
        // enablePhysics={false}
      />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 container mx-auto px-6 py-24">
        <AnimatedContent 
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 120, friction: 25 }}
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Passionate about creating innovative digital solutions that make a meaningful impact
            </p>
          </div>
        </AnimatedContent>

        <div className="max-w-6xl mx-auto">
          <AnimatedContent 
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 140, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.4}
            scale={1.01}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-12 shadow-2xl shadow-neutral-200/40 border border-white/70">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-neutral-800 to-slate-600 bg-clip-text text-transparent mb-6">
                    My Journey
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg font-light">
                    Currently in my 3rd semester at Global Institute studying Software Engineering, 
                    I am passionate about full-stack development and creating innovative digital solutions. 
                    My focus is on mastering modern technologies and building applications that can make 
                    a positive impact on society.
                  </p>
                  
                  <div className="space-y-4 pt-6">
                    {[
                      { icon: "🎓", text: "Software Engineering Student", desc: "Global Institute - Semester 3" },
                      { icon: "💻", text: "Full-Stack Development", desc: "Modern web technologies enthusiast" },
                      { icon: "🚀", text: "Innovation & Problem Solving", desc: "Creating impactful solutions" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-5 bg-white/60 rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-neutral-100 to-slate-100 rounded-xl flex items-center justify-center text-2xl shadow-sm border border-white/60">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-neutral-800 font-semibold mb-1">{item.text}</h4>
                          <p className="text-neutral-600 text-sm font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-neutral-50 to-slate-50 rounded-xl p-8 border border-white/60 shadow-lg">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Current Focus
                    </h4>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                        Modern web development technologies
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                        Full-stack application development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                        User experience & interface design
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                        Digital innovation & problem solving
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-zinc-50 rounded-xl p-8 border border-white/60 shadow-lg">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      Goals & Vision
                    </h4>
                    <p className="text-neutral-600 leading-relaxed font-light">
                      To become a skilled software engineer who creates meaningful digital experiences 
                      and contributes to technological advancement while continuously learning and growing 
                      in this ever-evolving field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 container mx-auto px-6 py-24">
        <AnimatedContent 
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 120, friction: 25 }}
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Showcasing my journey through code and creativity
            </p>
          </div>
        </AnimatedContent>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "E-Learning Platform",
                description: "A comprehensive learning management system with modern UI/UX, featuring interactive courses, progress tracking, and collaborative learning tools.",
                tech: ["React", "Node.js", "MongoDB", "Socket.io"],
                status: "In Development",
                type: "Web Application"
              },
              {
                title: "Task Management System",
                description: "Professional productivity application with drag-and-drop functionality, team collaboration features, and comprehensive analytics dashboard.",
                tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
                status: "Completed",
                type: "SaaS Platform"
              },
              {
                title: "Portfolio Website",
                description: "Modern, responsive portfolio with smooth animations, 3D elements, and interactive components showcasing contemporary web development.",
                tech: ["Next.js", "Three.js", "Framer Motion", "CSS3"],
                status: "Live",
                type: "Personal Project"
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather application with geolocation services, detailed forecasts, and beautiful data visualizations using modern APIs.",
                tech: ["React", "Chart.js", "OpenWeather API", "PWA"],
                status: "Completed",
                type: "Mobile App"
              }
            ].map((project, index) => (
              <AnimatedContent 
                key={index}
                distance={80}
                direction={index % 2 === 0 ? "horizontal" : "horizontal"}
                reverse={index % 2 !== 0}
                config={{ tension: 140, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/70 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium border border-white/40">
                        {project.type}
                      </div>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 ${
                        project.status === 'Live' ? 'bg-emerald-100 text-emerald-700' :
                        project.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      } rounded-xl font-semibold shadow-sm`}>
                        <span className={`w-2 h-2 rounded-full ${
                          project.status === 'Live' ? 'bg-emerald-500' :
                          project.status === 'Completed' ? 'bg-blue-500' :
                          'bg-amber-500'
                        }`}></span>
                        {project.status}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-white/60 hover:bg-white/80 rounded-xl flex items-center justify-center transition-colors border border-white/50">
                        <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 bg-white/60 hover:bg-white/80 rounded-xl flex items-center justify-center transition-colors border border-white/50">
                        <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-neutral-900 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-white/70 text-neutral-700 rounded-lg text-sm font-medium border border-white/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 container mx-auto px-6 py-24">
        <AnimatedContent 
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 120, friction: 25 }}
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to collaborate on your next project or just want to say hello?
            </p>
          </div>
        </AnimatedContent>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedContent 
              distance={80}
              direction="horizontal"
              reverse={false}
              config={{ tension: 140, friction: 25 }}
              initialOpacity={0}
              animateOpacity
              threshold={0.4}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-800 mb-6">Get in Touch</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg font-light mb-8">
                    I'm always open to discussing new opportunities, creative projects, 
                    or just having a friendly chat about technology and innovation.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: "Email",
                      content: "dhani.kusuma@example.com"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      title: "Phone",
                      content: "+62 123 456 789"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: "Location",
                      content: "Jakarta, Indonesia"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-white/60 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-neutral-100 to-slate-100 text-neutral-700 rounded-xl flex items-center justify-center shadow-lg border border-white/60">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">{contact.title}</h4>
                        <p className="text-neutral-600">{contact.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent 
              distance={80}
              direction="horizontal"
              reverse={true}
              config={{ tension: 140, friction: 25 }}
              initialOpacity={0}
              animateOpacity
              threshold={0.4}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/70">
                <form className="space-y-6">
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>
                  
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-800 text-white rounded-xl font-semibold shadow-xl shadow-neutral-500/20 hover:shadow-neutral-500/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* Main Chat Button */}
        <button className="group w-16 h-16 bg-gradient-to-r from-neutral-800 via-slate-700 to-zinc-800 text-white rounded-xl shadow-2xl shadow-neutral-500/20 hover:shadow-neutral-500/30 transform hover:scale-110 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-white/80 backdrop-blur-sm text-neutral-700 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/60 hover:bg-white/95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-16 mt-20">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-12 border border-white/70 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neutral-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">D</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-neutral-800 to-slate-600 bg-clip-text text-transparent">
                  DKWP
                </span>
              </div>
              <p className="text-neutral-600 font-light leading-relaxed">
                Building the future, one line of code at a time.<br/>
                Crafting digital experiences that matter.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-neutral-600 font-medium mb-2">
                © {currentYear} Dhani Kusuma Wardana Putra
              </p>
              <p className="text-neutral-500 text-sm">
                Designed & Developed with ❤️ using React & Next.js
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end gap-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  href: "mailto:dhani.kusuma@example.com",
                  color: "hover:bg-emerald-600"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  href: "tel:+62123456789",
                  color: "hover:bg-blue-600"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  href: "#",
                  color: "hover:bg-blue-700"
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`w-12 h-12 bg-white/60 text-neutral-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-white/50 ${social.color} hover:text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Simplified Background Elements & Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Reduced Animated Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-slate-500/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-zinc-500/10 rounded-full animate-pulse delay-500"></div>
        
        {/* Lighter Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-neutral-500/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-slate-500/2 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}