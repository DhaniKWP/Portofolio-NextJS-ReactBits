"use client";

import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import TrueFocus from './components/TrueFocus/TrueFocus';
import GlitchText from './components/GlitchText/GlitchText';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <AnimatedContent 
              distance={30}
              direction="horizontal"
              reverse={false}
              config={{ tension: 200, friction: 25 }}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">D</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">DKWP</span>
              </div>
            </AnimatedContent>
            
            <AnimatedContent 
              distance={30}
              direction="horizontal"
              reverse={true}
              config={{ tension: 200, friction: 25 }}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="hidden md:flex items-center gap-8">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                  </a>
                ))}
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Let's Talk
                </button>
              </div>
            </AnimatedContent>

            <button className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[85vh]">
            {/* Left Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="space-y-8 max-w-4xl">
                {/* Status Badge */}
                <AnimatedContent 
                  distance={50}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 200, friction: 20 }}
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.1}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-sm font-medium">Available for opportunities</span>
                  </div>
                </AnimatedContent>

                {/* Main Heading */}
                <div className="space-y-6">
                  <AnimatedContent 
                    distance={80}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 150, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    threshold={0.2}
                  >
                    <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                      Hello, I'm Dhani Kusuma Wardana Putra
                    </h1>
                  </AnimatedContent>
                  
                  <AnimatedContent 
                    distance={80}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 150, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    threshold={0.2}
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-4xl lg:text-6xl font-bold text-slate-800">a</span>
                      <RotatingText
                        texts={['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'Tech Innovator']}
                        mainClassName="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-2xl lg:text-4xl font-bold inline-flex transition-all shadow-lg"
                        staggerFrom="center"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        staggerDuration={0.03}
                        splitLevelClassName="overflow-hidden"
                        transition={{ type: "spring", damping: 25, stiffness: 400 }}
                        rotationInterval={3500}
                      />
                    </div>
                  </AnimatedContent>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <SplitText
                    text="Dhani Kusuma Wardana Putra"
                    className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,60px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-30px"
                  />
                </div>

                {/* Description */}
                <div className="max-w-2xl">
                  <BlurText
                    text="Mahasiswa semester 3 di Global Institute jurusan Software Engineering dengan passion mendalam dalam pengembangan perangkat lunak modern dan solusi digital inovatif."
                    delay={60}
                    animateBy="words"
                    direction="top"
                    className="text-xl text-slate-600 leading-relaxed"
                  />
                </div>

                {/* CTA Buttons */}
                <AnimatedContent 
                  distance={60}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 200, friction: 25 }}
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.3}
                >
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      View My Work
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    
                    <button className="px-8 py-4 border-2 border-blue-200 text-slate-700 rounded-xl font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                      Get In Touch
                    </button>
                  </div>
                </AnimatedContent>
              </div>
            </div>

            {/* Right Content - Lanyard */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <AnimatedContent 
                distance={80}
                direction="horizontal"
                reverse={true}
                config={{ tension: 120, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-16 right-8 w-20 h-20 bg-indigo-200 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/3 right-16 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute bottom-1/3 left-12 w-3 h-3 bg-indigo-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* LANYARD COMPONENT - This is where your real Lanyard goes */}
                  <div className="relative z-10 w-[300px] h-[400px]">
                    <Lanyard 
                      position={[0, 0, 20]} 
                      gravity={[0, -40, 0]}
                      segments={10}
                      enablePhysics={true}
                    />
                  </div>
                  
                  {/* Floating Card - Decorative complement */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 w-56 border border-blue-100 transform rotate-6 hover:rotate-3 transition-transform duration-500 z-20">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">D</span>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-sm">DKWP</h3>
                          <p className="text-blue-100 text-xs">Software Engineering</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-slate-600 text-xs">Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-600 text-xs">Global Institute</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span className="text-slate-600 text-xs">Jakarta, ID</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <AnimatedContent 
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 150, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">About Me</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Passionate about creating innovative solutions through code
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={false}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-slate-800">My Journey</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Currently in my 3rd semester at Global Institute studying Software Engineering. 
                    I focus on learning modern technologies to create digital solutions that can 
                    make a positive impact on society.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    My passion lies in full-stack development, where I enjoy both the logical 
                    challenges of backend systems and the creative aspects of frontend design.
                  </p>
                </div>
              </AnimatedContent>
              
              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={true}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Current Focus
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Modern web development technologies',
                      'Full-stack application development', 
                      'User experience & interface design',
                      'Digital innovation & problem solving'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <AnimatedContent 
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 150, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">Featured Projects</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A showcase of my development journey
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Finance Tracker Project ",
                  description: "A simple and user-friendly mobile application to record daily income and expenses. Built using Flutter, this app helps users manage their personal finances, track spending habits, and maintain better budgeting with categorized entries and clean UI.",
                  tech: ["Flutter","SQlite"],
                  status: "Completed",
                  statusColor: "bg-amber-100 text-amber-800 border-amber-200",
                  gradient: "from-orange-400 to-pink-400"
                },
                {
                  title: "TikTok Video Downloader", 
                  description: "A simple web-based tool to download TikTok videos without watermark. Just paste the video URL and download instantly.",
                  tech: ["HTML", "Python Flask", "SnapTik API,"],
                  status: "Completed",
                  statusColor: "bg-blue-100 text-blue-800 border-blue-200",
                  gradient: "from-blue-400 to-purple-400"
                },
                {
                  title: "Car Service Booking System",
                  description: "A fullstack web application for booking car service appointments. This system includes user and admin dashboards, booking management, status tracking, and digital invoice generation.",
                  tech: ["Express.js", "MYSQL", "Node.js", "HTML", "CSS"],
                  status: "Completed",
                  statusColor: "bg-green-100 text-green-800 border-green-200",
                  gradient: "from-green-400 to-blue-400"
                }
              ].map((project, index) => (
                <AnimatedContent 
                  key={index}
                  distance={60}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 150, friction: 25 }}
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.4}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.statusColor}`}>
                        {project.status}
                      </span>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110 duration-300">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                        <button className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110 duration-300">
                          <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4 opacity-60`}></div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <AnimatedContent 
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 150, friction: 25 }}
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">Let's Connect</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Ready to collaborate or just want to say hello?
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={false}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-slate-800">Get in Touch</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    I'm always open to discussing new opportunities, creative projects, 
                    or just having a friendly chat about technology and innovation.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                        title: "Email",
                        content: "dhani.kusuma@example.com",
                        color: "from-blue-500 to-indigo-500"
                      },
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        title: "Location",
                        content: "Jakarta, Indonesia",
                        color: "from-green-500 to-emerald-500"
                      },
                      {
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        ),
                        title: "LinkedIn",
                        content: "/in/dhani-kusuma",
                        color: "from-blue-600 to-blue-700"
                      }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 group">
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{contact.title}</h4>
                          <p className="text-slate-600">{contact.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContent>

              <AnimatedContent 
                distance={60}
                direction="horizontal"
                reverse={true}
                config={{ tension: 150, friction: 25 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.4}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-xl">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white/50 backdrop-blur-sm"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Send Message
                      <span className="ml-2">✨</span>
                    </button>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <span className="text-xl font-bold">DKWP</span>
            </div>
            
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              {[
                {
                  name: "GitHub",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
                {
                  name: "Email",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-300">© {currentYear} Dhani Kusuma Wardana Putra</p>
              <p className="text-slate-400 text-sm">Built with ❤️ using React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}