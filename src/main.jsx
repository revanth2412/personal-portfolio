import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { Award, BookOpen, BriefcaseBusiness, ChevronRight, Cloud, Code2, Cpu, ExternalLink, GraduationCap, Mail, Menu, Moon, Sparkles, Sun, Trophy, X, User } from 'lucide-react';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJavascript, SiPython, SiDocker, SiRazorpay, SiC, SiGit, SiHtml5 } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';
import './overrides.css';
import './contact.css';
gsap.registerPlugin(ScrollTrigger);

const GithubMark=()=> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.9c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg>;
const LinkedInMark=()=> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.04H3.56V8.98h3.56v11.47Z"/></svg>;
const projects=[['Pixel Crop','AI background-removal SaaS with Razorpay payments.','AI / SAAS','https://pixelcrop.vercel.app/',Sparkles],['Easily','Job application platform using MVC, JWT, file handling and recruiter workflows.','WEB PLATFORM','https://easily-delta.vercel.app/',BriefcaseBusiness],['Edutech','An education information application developed in collaboration with Educity.','EDUCATION','https://greatstack.in/',GraduationCap],['IMS','A comprehensive inventory system for warehouse and store operations.','INVENTORY','https://inventorymanagementsystem-ypaw.onrender.com/login',Cloud],['SocialMedia Backend','Robust backend with authentication, posts, comments, likes and password recovery.','BACKEND','https://socialmedia-ufly.onrender.com/',Code2],['E-Commerce Backend','API-first commerce operations for products, carts, categories and users.','BACKEND','https://e-commerce-tgiy.onrender.com/',BriefcaseBusiness],['Task Manager','A focused browser-based daily task tracking utility.','PRODUCTIVITY','https://revanth2412.github.io/taskmanager/',Sparkles],['Akasavani','A lightweight weather utility for checking conditions wherever you are.','WEATHER','https://revanth2412.github.io/akasavani/',Cloud]];
const awards=[['Best Tyro','BGSW · Dec 2024'],['Crowd Sourcing Champ','BGSW · Oct 2024'],['Growth Driver','BGSW 2WP Ideathon winner · Aug 2024'],['Bravo','BGSW · Dec 2023']];
const techs=[['React',SiReact,'#61dafb'],['Node.js',SiNodedotjs,'#83cd29'],['Express',SiExpress,'#ffffff'],['MongoDB',SiMongodb,'#4db33d'],['MySQL',SiMysql,'#4479a1'],['Azure',Cloud,'#0089d6'],['JavaScript',SiJavascript,'#f7df1e'],['Python',SiPython,'#3776ab'],['Docker',SiDocker,'#2496ed'],['Razorpay',SiRazorpay,'#0c2451'],['Embedded C',SiC,'#a8b9cc'],['Git',SiGit,'#f05032'],['HTML5',SiHtml5,'#e34f26'],['CSS3',Code2,'#1572b6']];
function App(){
  const root=useRef(null);
  const [menu,setMenu]=useState(false);
  const [open,setOpen]=useState(0);
  const [dark,setDark]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  
  // Form submission and bubble toast state
  const [toast, setToast] = useState({ show: false, message: '', type: 'success', exiting: false });
  const [submitting, setSubmitting] = useState(false);

  const haptic=()=>{if('vibrate'in navigator)navigator.vibrate(20)};
  
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>30);
    addEventListener('scroll',onScroll,{passive:true});
    return()=>removeEventListener('scroll',onScroll)
  },[]);

  const showToastNotification = (message, type) => {
    setToast({ show: true, message, type, exiting: false });
    
    // Bubble bounce exit timing
    setTimeout(() => {
      setToast(prev => {
        if (!prev.show) return prev;
        return { ...prev, exiting: true };
      });
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false, exiting: false }));
      }, 400);
    }, 3500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        showToastNotification("Message sent successfully! I'll get back to you soon.", "success");
        e.target.reset();
      } else {
        showToastNotification(data.message || "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      showToastNotification("Network error. Please check your connection and try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  useLayoutEffect(()=>{
    const c=gsap.context(()=>{
      const q=gsap.utils.selector(root);
      gsap.timeline().from(q('.nav'),{y:-18,opacity:0,duration:.5}).from(q('.intro-anim'),{y:40,opacity:0,stagger:.12,duration:.8,ease:'power3.out'},'-.1');
      gsap.to(q('.ring'),{rotate:360,duration:28,repeat:-1,ease:'none'});
      gsap.to(q('.spark'),{y:-12,duration:1.7,repeat:-1,yoyo:true,ease:'sine.inOut'});
      gsap.utils.toArray(q('.reveal')).forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:'top 85%'},y:38,opacity:0,duration:.75,ease:'power3.out'}));
      
      // Buttery smooth GSAP Horizontal Scroll for Projects on Desktop
      if (window.innerWidth > 800) {
        const track = q('.projects-track')[0];
        const section = q('#projects')[0];
        if (track && section) {
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth + 120),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1.2, // smooth scrub with lag inertia
              start: "top top",
              end: () => "+=" + track.scrollWidth,
              invalidateOnRefresh: true,
            }
          });
        }
      }
    },root);
    return()=>c.revert()
  },[]);

  return <main ref={root} className={dark?'dark':''}>
    {toast.show && createPortal(
      <div className="toast-container" id="toast-notification">
        <div className={`toast-bubble ${toast.type} ${toast.exiting ? 'exiting' : ''}`}>
          <span className="toast-icon">
            {toast.type === 'success' ? '✓' : '✕'}
          </span>
          <span className="toast-message">{toast.message}</span>
        </div>
      </div>,
      document.body
    )}
      <header className="mobile-header">
        <a onClick={haptic} className="brand" href="#top">revanth<span>.</span></a>
        <button className="theme" aria-label="Toggle dark mode" onClick={()=>{haptic();setDark(!dark)}}>{dark?<Sun/>:<Moon/>}</button>
      </header>
<nav className={`nav ${scrolled?'nav-bubble':''}`}><a onClick={haptic} className="brand" href="#top">revanth<span>.</span></a><div className="navlinks"><a onClick={haptic} href="#about"><User /><span>about</span></a><a onClick={haptic} href="#tech"><Cpu /><span>stack</span></a><a onClick={haptic} href="#projects"><BriefcaseBusiness /><span>projects</span></a><a onClick={haptic} href="#education"><GraduationCap /><span>education</span></a><a onClick={haptic} href="#journey"><Award /><span>journey</span></a><a onClick={haptic} href="#contact"><Mail /><span>contact</span></a></div><a onClick={haptic} className="sayhi" href="mailto:revanth.sharma5198@gmail.com">say hello <Mail/></a><button className="theme" aria-label="Toggle dark mode" onClick={()=>{haptic();setDark(!dark)}}>{dark?<Sun/>:<Moon/>}</button><button className="menu-button" onClick={()=>{haptic();setMenu(!menu)}}>{menu?<X/>:<Menu/>}</button></nav>{menu&&<div className="mobile"><a onClick={()=>{haptic();setMenu(false)}} href="#about">about</a><a onClick={()=>{haptic();setMenu(false)}} href="#tech">stack</a><a onClick={()=>{haptic();setMenu(false)}} href="#projects">projects</a><a onClick={()=>{haptic();setMenu(false)}} href="#education">education</a><a onClick={()=>{haptic();setMenu(false)}} href="#journey">journey</a><a onClick={()=>{haptic();setMenu(false)}} href="#contact">contact</a></div>}
<section id="top" className="hero"><div className="hero-copy"><p className="chip intro-anim">SOFTWARE DEVELOPMENT ENGINEER</p><h1 className="intro-anim">Hello, I’m<br/><em>Revanth.</em></h1><p className="intro-anim">A self-taught engineer crafting clean web products and inventive embedded prototypes at <b>Bosch Global Software Technologies.</b></p><div className="hero-actions intro-anim"><a onClick={haptic} className="primary" href="#about">Explore my world <ChevronRight/></a><a onClick={haptic} className="hero-resume" href="/revanth-temididapati-resume.pdf" download>Resume <ChevronRight/></a><div className="social"><a onClick={haptic} href="https://github.com/revanth2412" target="_blank"><GithubMark/></a><a onClick={haptic} href="https://www.linkedin.com/in/revanthtemididapati/" target="_blank"><LinkedInMark/></a></div></div></div><div className="hero-image intro-anim"><img src="/revanth-profile.jpg" alt="Revanth Temididapati"/><div className="ring"><i/><i/><i/><i/><i/><i/></div><div className="spark">✦</div><div className="click-note">BUILD · LEARN · REPEAT</div></div><div className="hero-facts intro-anim"><div><b>20</b><span>public repositories</span></div><div><b>08</b><span>featured projects</span></div><div><b>AZ-900</b><span>Azure certified</span></div></div></section>
<section id="about" className="about"><p className="eyebrow reveal">01 / SHORT PROFILE</p><div className="about-grid"><h2 className="reveal">Making the complex<br/>feel <em>surprisingly clear.</em></h2><div className="about-text reveal"><p>My strength is converting intricate business logic into tangible, user-friendly software. I move comfortably between web engineering, cloud fundamentals, and embedded development.</p><div className="languages"><span>ENGLISH <b>●</b></span><span>TELUGU <b>●</b></span><span>HINDI <b>●</b></span><span>GERMAN <i>basic</i></span></div></div></div></section>
<section className="dashboard"><article className="dash-card work-card reveal"><span className="icon"><BriefcaseBusiness/></span><p className="eyebrow">CURRENTLY</p><h3>Software Development Engineer</h3><b>Bosch Global Software Technologies</b><p>Rapid prototyping for innovation projects and automotive systems.</p></article><article className="dash-card cert-card reveal"><span className="icon"><Award/></span><p className="eyebrow">CERTIFIED</p><h3>Microsoft Certified:<br/>Azure Fundamentals</h3><p>Microsoft · issued Aug 2024</p><div className="cert-orbit">AZ<br/>900</div></article><article className="dash-card edu-card reveal"><span className="icon"><GraduationCap/></span><p className="eyebrow">EDUCATION</p><h3>B.Tech, Vignan’s University</h3><b>2017 — 2021</b><p>GPA 9.2 / 10</p></article><article className="dash-card paper-card reveal"><span className="icon"><BookOpen/></span><p className="eyebrow">PUBLISHED</p><h3>Ultra-Low Power m-Sequence Code Generator</h3><p>IEEE · June 2019 · body sensor node applications</p><a href="#projects">Read the work <ExternalLink/></a></article></section>
<div className="tech-wrapper"><section id="tech" className="tech"><p className="eyebrow reveal">02 / TECHNOLOGY PLAYGROUND</p><div className="tech-heading"><h2 className="reveal">The tools that<br/>make ideas <em>real.</em></h2><p className="reveal">A hands-on stack across product interfaces, reliable backend systems, cloud deployment, and automotive embedded software.</p></div><div className="tech-grid">{techs.map(([name,Icon,color],i)=><article className="tech-card reveal" key={name} style={{'--brand':color,'--delay':`${i*45}ms`}}><Icon/><span>{name}</span><i>↗</i></article>)}</div></section></div>
<section id="projects" className="projects"><div className="projects-track"><div className="project-title"><p className="eyebrow">03 / THINGS I’VE BUILT</p><h2>Selected<br/><em>projects.</em></h2><p>Eight projects across SaaS, platforms, backends, productivity tools, and research.</p></div>{projects.map(([title,copy,type,url,Icon],i)=><a className={`project project-${i+1}`} href={url} target="_blank" key={title}><div className="project-visual"><Icon/><span>{String(i+1).padStart(2,'0')}</span><i/><i/></div><p>{type}</p><h3>{title}</h3><small>{copy}</small><b>Open <ExternalLink/></b></a>)}</div></section>
<section className="experience"><p className="eyebrow reveal">04 / EXPERIENCE</p><div className="experience-top"><h2 className="reveal">A record of<br/><em>momentum.</em></h2><p className="reveal">Company experience, presented as a focused timeline.</p></div><div className="timeline">{[['MAR 2022 — PRESENT','Bosch Global Software Technologies','Software Development Engineer','At Bosch, I am immersed in rapid prototyping for innovative projects in the two-wheeler domain. I develop bespoke embedded software for EPM44 ECU customer needs and contribute to concepts such as sensorless quickshifters, intelligent puncture detection and MTB traction control—turning ideas into tangible proof of concepts. Alongside engineering, I contribute technical expertise to departmental Bosch Connect pages and 2-wheeler branding activities.'],['AUG 2021 — FEB 2022','Cognizant','Trainee','Completed a six-month trainee role focused on professional software engineering foundations, team collaboration, and applied delivery practices in a production-focused environment.']].map(([date,name,role,copy],i)=><article className="timeline-item reveal" key={name}><div className="timeline-dot"><BriefcaseBusiness/></div><span>{date}</span><div><h3>{name}</h3><h4>{role}</h4><p>{copy}</p></div></article>)}</div></section>
<section id="education" className="education"><p className="eyebrow reveal">05 / EDUCATION</p><div className="education-top"><h2 className="reveal">Academic<br/><em>foundations.</em></h2><p className="reveal">My educational background and scholastic milestones.</p></div><div className="education-grid">{[['2017 — 2021', 'Under Graduation', "Vignan's University", 'B.Tech in Electronics & Communication Engineering', 'GPA 9.04 / 10'],['2015 — 2017', 'Intermediate', 'Bapatla Jr. College', 'MPC (Mathematics, Physics, Chemistry)', 'GPA 9.46 / 10'],['2015', 'Secondary Education - CBSE', 'Kendriya Vidyalaya', 'High School', 'GPA 9.6 / 10']].map(([date, level, school, stream, gpa], i) => (<article className="education-card reveal" key={level}><span className="edu-icon"><GraduationCap /></span><div className="edu-header"><span>{date}</span><h3>{school}</h3></div><h4>{level}</h4><p>{stream}</p><div className="edu-gpa"><b>{gpa}</b></div></article>)) }</div></section>
<section id="journey" className="honors"><div><p className="eyebrow">06 / RECOGNITION</p><h2>Good work,<br/><em>noticed.</em></h2><p>Recognition from BGSW for innovation, initiative, crowdsourcing and contributions to the team.</p></div><div className="award-list">{awards.map(([name,meta],i)=><article className="reveal" key={name}><span><Trophy/></span><b>{String(i+1).padStart(2,'0')}</b><h3>{name}</h3><p>{meta}</p><i>✦</i></article>)}</div></section>
<footer id="contact"><p className="eyebrow">07 / LET’S TALK</p><div className="contact-grid"><div><h2>Let’s build<br/>the <em>next thing.</em></h2><p>What are you working on? I’d love to hear about it over a virtual coffee.</p><a className="mail" href="mailto:revanth.sharma5198@gmail.com">revanth.sharma5198@gmail.com <ChevronRight/></a></div><form className="contact-form" onSubmit={handleFormSubmit} id="contact-form"><input type="hidden" name="access_key" value="58b1902b-17be-4a62-8d96-da0d2c1823ff"/><input type="hidden" name="subject" value="New portfolio message for Revanth"/><input type="checkbox" name="botcheck" className="botcheck"/><label htmlFor="contact-name">Your name<input required id="contact-name" name="name" placeholder="Jane Doe"/></label><label htmlFor="contact-email">Email address<input required type="email" id="contact-email" name="email" placeholder="jane@company.com"/></label><label htmlFor="contact-message">What’s on your mind?<textarea required id="contact-message" name="message" rows="4" placeholder="Tell me about the opportunity..."/></label><button onClick={haptic} type="submit" id="contact-submit" disabled={submitting}>{submitting ? "Sending..." : "Send message"} <ChevronRight/></button></form></div><div className="footer-end"><span>© 2026 REVANTH TEMIDIDAPATI</span><div><a href="https://github.com/revanth2412"><GithubMark/></a><a href="https://www.linkedin.com/in/revanthtemididapati/"><LinkedInMark/></a></div></div></footer>
</main>};createRoot(document.getElementById('root')).render(<App/>);
