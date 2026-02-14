
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Sun, Moon, Menu, X, Download, ChevronUp, Globe, 
  Linkedin, Mail, Phone, MapPin, 
  ExternalLink, User, Briefcase, GraduationCap, Award, Settings, Heart, Send,
  CheckCircle2
} from 'lucide-react';
import { 
  PRIMARY_COLOR, SECONDARY_COLOR, SKILLS, EXPERIENCE, 
  EDUCATION, CERTIFICATIONS, TOOLS, SOFT_SKILLS, 
  INTERESTS, IconMap 
} from './constants';
import { Language } from './types';

// Components
const Preloader: React.FC = () => (
  <motion.div 
    className="fixed inset-0 z-[9999] bg-[#0A2463] flex flex-col items-center justify-center"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <motion.div 
      className="w-24 h-24 border-4 border-white border-t-[#D4AF37] rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    <motion.h1 
      className="mt-6 text-white text-3xl font-bold tracking-widest font-['Poppins']"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      MAHESH SOLANKI
    </motion.h1>
    <motion.div 
      className="mt-2 h-1 bg-[#D4AF37] rounded-full"
      initial={{ width: 0 }}
      animate={{ width: 150 }}
      transition={{ delay: 0.5, duration: 1 }}
    />
  </motion.div>
);

const Navbar: React.FC<{ darkMode: boolean, setDarkMode: (d: boolean) => void, lang: Language, setLang: (l: Language) => void }> = ({ darkMode, setDarkMode, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-[#0A2463] text-[#D4AF37] rounded-lg flex items-center justify-center font-bold text-xl shadow-lg border border-[#D4AF37]/30">
            M
          </div>
          <span className={`font-bold text-lg hidden sm:block ${darkMode ? 'text-white' : 'text-[#0A2463]'}`}>
            Mahesh Solanki
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`text-sm font-medium hover:text-[#D4AF37] transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {item.name}
            </motion.a>
          ))}
          
          <div className="flex items-center space-x-4 ml-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-slate-700'} hover:scale-110 transition-transform`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative group">
              <button className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-100 text-gray-700'} flex items-center gap-1 text-xs font-bold`}>
                <Globe size={16} /> {lang}
              </button>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block glass-card rounded-lg overflow-hidden w-24">
                {Object.values(Language).map(l => (
                  <button 
                    key={l}
                    onClick={() => setLang(l)}
                    className={`block w-full px-4 py-2 text-left text-xs hover:bg-[#D4AF37] hover:text-white ${lang === l ? 'bg-[#0A2463] text-white' : ''}`}
                  >
                    {l === Language.ENGLISH ? 'English' : l === Language.HINDI ? 'हिन्दी' : 'ગુજરાતી'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Btn */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-[#D4AF37]">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={darkMode ? 'text-white' : 'text-[#0A2463]'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'} border-b border-gray-100 dark:border-slate-800`}
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-16 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block relative"
    >
      <h2 className={`text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 ${light ? 'text-white' : 'text-[#0A2463] dark:text-[#D4AF37]'}`}>
        {title}
      </h2>
      <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full" />
    </motion.div>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Hero: React.FC = () => {
  const titles = ["Chartered Accountant", "UAE Tax Specialist", "VAT & Corporate Tax Expert"];
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx(p => (p + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              backgroundColor: i % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full text-xs font-bold tracking-widest uppercase">
            Qualified (Nov 2024) | First Attempt
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-black text-[#0A2463] dark:text-white leading-none mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          CA Mahesh <span className="text-[#D4AF37]">R. Solanki</span>
        </motion.h1>

        <div className="h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
            >
              {titles[titleIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400"
        >
          <MapPin size={18} className="text-[#D4AF37]" />
          <span>Surat / Ahmedabad, Gujarat, India</span>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#experience" className="px-8 py-4 bg-[#0A2463] text-[#D4AF37] rounded-full font-bold hover:bg-[#0A2463]/90 transition-all hover:scale-105 shadow-xl border border-[#D4AF37]/30 group flex items-center gap-2">
            View My Work <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-white dark:bg-slate-800 text-[#0A2463] dark:text-[#D4AF37] rounded-full font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-xl border border-gray-200 dark:border-slate-700">
            Get In Touch
          </a>
        </motion.div>

        <motion.div 
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="https://www.linkedin.com/in/maheshrsolanki" target="_blank" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Linkedin size={28} /></a>
          <a href="mailto:solankimahesh84939@gmail.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Mail size={28} /></a>
          <a href="tel:+919313026285" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Phone size={28} /></a>
        </motion.div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const stats = [
    { label: "Tax Returns Filed", value: 150, suffix: "+" },
    { label: "GST Clients", value: 25, suffix: "+" },
    { label: "Qualified Year", value: 2024, suffix: "" },
    { label: "Years Experience", value: 3, suffix: "+" }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader title="About Me" subtitle="A modern Chartered Accountant bridging the gap between numbers and strategy." />
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 relative">
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://picsum.photos/seed/accountant/800/1000" alt="Profile" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-[#0A2463]/20" />
            </motion.div>
            <motion.div className="absolute -bottom-6 -right-6 w-full h-full bg-[#D4AF37] -z-10 rounded-2xl" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
          </div>
          <div className="md:col-span-7">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="font-semibold text-2xl text-[#0A2463] dark:text-[#D4AF37]">First Attempt Chartered Accountant with a global focus.</p>
              <p>Qualified in November 2024 with hands-on experience in accounting, audit, and taxation, and a growing specialization in <span className="text-[#0A2463] dark:text-white font-bold"> UAE Corporate Tax and VAT compliance</span>.</p>
              <p>Currently working with <span className="italic">Active Bean Counter Private Limited (Anderson Global Group)</span>, I handle complex financial statement reviews, tax computations, and cross-border compliance. I leverage advanced Excel and modern accounting tools to deliver results that are not just compliant, but practical and value-driven.</p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.5 }} className="border-l-4 border-[#D4AF37] pl-4">
                    <div className="text-3xl font-bold text-[#0A2463] dark:text-white flex items-baseline">
                      <Counter end={stat.value} duration={2} />{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter: React.FC<{ end: number, duration: number }> = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        let startTime: number;
        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        setHasAnimated(true);
      }
    }, { threshold: 0.1 });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={nodeRef}>{count}</span>;
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader title="Core Competencies" subtitle="Deep technical expertise paired with strategic business insights." />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, idx) => (
            <SkillCard key={skill.id} skill={skill} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: any, idx: number }> = ({ skill, idx }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="perspective-1000 group relative h-64 w-full">
      <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">
        <div className="absolute inset-0 backface-hidden glass-card p-8 flex flex-col items-center justify-center text-center rounded-2xl">
          <div className="w-16 h-16 bg-[#0A2463] text-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            {IconMap[skill.icon]}
          </div>
          <h3 className="text-xl font-bold text-[#0A2463] dark:text-white">{skill.name}</h3>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0A2463] p-8 flex flex-col items-center justify-center text-center rounded-2xl text-[#D4AF37]">
          <p className="text-lg font-medium text-white">{skill.description}</p>
          <div className="mt-6 w-12 h-1 bg-[#D4AF37] rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionHeader title="Professional Journey" subtitle="A track record of excellence in audit, taxation, and financial compliance." />
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-slate-700 -translate-x-1/2 hidden md:block" />
          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <ExperienceItem key={exp.id} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{ exp: any, idx: number }> = ({ exp, idx }) => {
  const isLeft = idx % 2 === 0;
  return (
    <motion.div initial={{ opacity: 0, x: isLeft ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-[#D4AF37] border-4 border-white dark:border-slate-800 rounded-full -translate-x-1/2 z-10 hidden md:block" />
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
        <div className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-[#D4AF37]/10 transition-shadow">
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-2 md:justify-end">
              <span className="px-3 py-1 bg-[#0A2463] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">{exp.type}</span>
              <span className="text-[#D4AF37] text-sm font-semibold">{exp.duration}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A2463] dark:text-white">{exp.position}</h3>
            <p className="text-[#D4AF37] font-semibold">{exp.company}</p>
          </div>
          <div className={`space-y-3 text-gray-600 dark:text-gray-400 text-sm ${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
            {/* Fixed: Added optional chaining to prevent crash if responsibilities is undefined */}
            {exp.responsibilities?.map((res: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                {!isLeft && <CheckCircle2 size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />}
                <p>{res}</p>
                {isLeft && <CheckCircle2 size={16} className="text-[#D4AF37] mt-0.5 shrink-0 hidden md:block" />}
              </div>
            ))}
          </div>
          {exp.categories && (
             <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
               {exp.categories.map((cat: any, i: number) => (
                 <div key={i} className="mb-4">
                    <p className="font-bold text-xs uppercase tracking-widest text-[#0A2463] dark:text-white mb-2">{cat.name}</p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {cat.items?.map((item: string, j: number) => (
                        <span key={j} className="text-[11px] bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">{item}</span>
                      ))}
                    </div>
                 </div>
               ))}
             </div>
          )}
        </div>
      </div>
      <div className="md:w-1/2" />
    </motion.div>
  );
};

const SoftSkillsAndInterests: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-[#0A2463] dark:text-[#D4AF37] mb-12 uppercase tracking-tight">Professional Attributes</h3>
            <div className="space-y-8">
              {SOFT_SKILLS.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                    <span className="dark:text-white">{skill.name}</span>
                    <span className="text-[#D4AF37]">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-[#0A2463] dark:bg-[#D4AF37]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#0A2463] dark:text-[#D4AF37] mb-12 uppercase tracking-tight">Beyond Work</h3>
            <div className="grid grid-cols-2 gap-6">
              {INTERESTS.map((interest, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#0A2463] text-[#D4AF37] rounded-xl flex items-center justify-center mb-4">
                    {IconMap[interest.icon] || <Heart />}
                  </div>
                  <span className="font-bold text-[#0A2463] dark:text-white uppercase tracking-widest text-xs">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader title="Education & Training" />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0A2463] dark:text-[#D4AF37] flex items-center gap-3">
              <GraduationCap /> Educational Background
            </h3>
            {EDUCATION.map((edu, idx) => (
              <motion.div key={edu.id} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform" />
                {edu.badge && <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#D4AF37] text-white px-2 py-1 rounded-md">{edu.badge}</span>}
                <p className="text-sm font-bold text-[#D4AF37] mb-1">{edu.duration}</p>
                <h4 className="text-xl font-bold text-[#0A2463] dark:text-white">{edu.degree}</h4>
                <p className="text-gray-500 mb-4">{edu.institution}</p>
                <ul className="space-y-1">
                  {edu.achievements?.map((ach, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" /> {ach}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0A2463] dark:text-[#D4AF37] flex items-center gap-3 mb-6">
                <Award /> Certifications
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div key={i} whileHover={{ x: 5 }} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
                    <Award className="text-[#D4AF37]" size={20} />
                    <span className="text-sm font-medium dark:text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A2463] dark:text-[#D4AF37] flex items-center gap-3 mb-6">
                <Settings /> Technical Toolkit
              </h3>
              <div className="flex flex-wrap gap-3">
                {TOOLS.map((tool, i) => (
                  <motion.span key={i} whileHover={{ scale: 1.1, backgroundColor: PRIMARY_COLOR, color: SECONDARY_COLOR }} className="px-4 py-2 bg-[#D4AF37]/10 text-[#0A2463] dark:text-[#D4AF37] text-xs font-bold rounded-lg border border-[#D4AF37]/30">
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader title="Let's Connect" subtitle="Ready to optimize your tax compliance and financial reporting?" />
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="grid gap-8">
              <ContactCard icon={<Mail size={24} />} label="Email Me" value="solankimahesh84939@gmail.com" link="mailto:solankimahesh84939@gmail.com" />
              <ContactCard icon={<Phone size={24} />} label="Call Me" value="+91 93130 26285" link="tel:+919313026285" />
              <ContactCard icon={<Linkedin size={24} />} label="LinkedIn" value="in/maheshrsolanki" link="https://www.linkedin.com/in/maheshrsolanki" />
              <ContactCard icon={<MapPin size={24} />} label="Location" value="Surat / Ahmedabad, India" />
            </div>
          </motion.div>
          <motion.form className="glass-card p-10 rounded-3xl shadow-2xl" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold text-[#0A2463] dark:text-[#D4AF37] mb-8">Send a Message</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all" placeholder="Hello, I'd like to discuss..."></textarea>
              </div>
              <button className="w-full py-4 bg-[#0A2463] text-[#D4AF37] font-bold rounded-xl hover:bg-[#0A2463]/90 transition-all shadow-lg flex items-center justify-center gap-2 group">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactCard: React.FC<{ icon: any, label: string, value: string, link?: string }> = ({ icon, label, value, link }) => (
  <motion.div whileHover={{ y: -5 }} className="flex items-center gap-6 p-6 glass-card rounded-2xl">
    <div className="w-14 h-14 bg-[#0A2463] text-[#D4AF37] rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-[#D4AF37]/30">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-1">{label}</p>
      {link ? (
        <a href={link} target="_blank" className="text-lg font-bold text-[#0A2463] dark:text-white hover:text-[#D4AF37] transition-colors">{value}</a>
      ) : (
        <p className="text-lg font-bold text-[#0A2463] dark:text-white">{value}</p>
      )}
    </div>
  </motion.div>
);

const Footer: React.FC = () => (
  <footer className="bg-[#0A2463] py-16 text-white overflow-hidden relative">
     <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-32 -mt-32" />
     <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -ml-32 -mb-32" />
     <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white text-[#0A2463] rounded-2xl flex items-center justify-center font-bold text-3xl mb-8 border-4 border-[#D4AF37]">M</div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">CA Mahesh R. Solanki</h2>
          <div className="flex space-x-6 mb-12">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#D4AF37] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>
          <div className="flex space-x-8 mb-12">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-all hover:scale-110"><Linkedin /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-all hover:scale-110"><Mail /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-all hover:scale-110"><Phone /></a>
          </div>
          <div className="w-full max-w-lg h-px bg-white/10 mb-8" />
          <p className="text-gray-400 text-sm mb-2">© 2025 CA Mahesh R. Solanki. All rights reserved.</p>
          <p className="text-gray-500 text-xs flex items-center gap-1">Made with <Heart size={12} className="text-red-500" /> in India</p>
        </div>
     </div>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState(Language.ENGLISH);
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const handleMouseMove = (e: MouseEvent) => setCursorXY({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} selection:bg-[#D4AF37] selection:text-[#0A2463]`}>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <div className="custom-cursor hidden lg:block" style={{ transform: `translate(${cursorXY.x - 10}px, ${cursorXY.y - 10}px)` }} />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-[60]" style={{ scaleX }} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <SoftSkillsAndInterests />
        <Education />
        <Contact />
      </main>
      <Footer />
      <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 p-3 bg-[#0A2463] text-[#D4AF37] rounded-full shadow-2xl z-40 border border-[#D4AF37]/30">
        <ChevronUp />
      </motion.button>
      <div className="fixed bottom-8 left-8 hidden md:flex flex-col gap-3 z-40">
        <a href="#" className="p-3 bg-white dark:bg-slate-800 text-[#0A2463] dark:text-[#D4AF37] rounded-full shadow-xl hover:scale-110 transition-transform border border-gray-200 dark:border-slate-700 group flex items-center gap-2">
          <Download size={20} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold">Download CV</span>
        </a>
      </div>
    </div>
  );
}
