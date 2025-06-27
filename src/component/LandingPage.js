// src/components/LandingPage.js
import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import useScrollColor from '../hooks/useScrollColor';
import ProjectList from './ProjectList'; // if available
import ContactSection from './ContactSection'; // if available
import ChatApp from './ChatApp'; // <-- add this

// Inside return (suggested near bottom of LandingPage)



function LandingPage() {
  const bgColor = useScrollColor([
    { scrollY: 0, color: '#f5f7fa' },
    { scrollY: 300, color: '#c3cfe2' },
    { scrollY: 800, color: '#a0d2eb' }
  ]);

  return (
    <div style={{
      background: bgColor,
      transition: "background 0.6s ease",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{ textAlign: 'center', padding: '50px' }}>
        <img src="/Resize.png" alt="Profile" style={{ width: 150, borderRadius: '50%' }} />
        <h1>Hi, I'm Dwight Hendricks</h1>
        <p style={{ fontSize: "20px", maxWidth: 500, margin: "0 auto" }}>
          Full Stack Developer | JavaScript | PostgreSQL
        </p>
      </header>

      <section style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Featured Projects</h2>
        <ProjectList />
      </section>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <ScrollLink to="about" smooth duration={500}>
          <button>About Me</button>
        </ScrollLink>
        <ScrollLink to="ContactSection" smooth duration={500}>
          <button style={{ marginLeft: '10px' }}>Contact</button>
        </ScrollLink>
      </div>

      <Element name="about">
        <section style={{ padding: '80px 20px', background: '#fff', textAlign: 'center' }}>
          <h2>About Me</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto' }}>
            I build fast, accessible, responsive web apps using React, Node.js, and PostgreSQL.
            Send me a message below if you would like to work on a project. 
          </p>
        </section>
      </Element>

      <Element name="ContactSection">
        <ContactSection />
      </Element>
    </div>
  );
}

export default LandingPage;
