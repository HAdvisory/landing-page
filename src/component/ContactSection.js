// src/components/ContactSection.js
import React, { useState } from 'react';

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xldnalne" , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
  if (res.ok) {
    setStatus('Message sent! ✅');
    setForm({ name: '', email: '', message: '' });
  } else {
    setStatus('Oops! Something went wrong.');
  }

  };

  return (
    <section style={{ padding: '80px 20px', background: '#f7f7f7', textAlign: 'center' }}>
      <h2>📬 Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px', maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px"
       }}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{padding: "10px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc"}}
        /><br />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          required
          style={{padding: "10px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc"}}
        /><br />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          required
          style={{padding: "12px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", minHeight: "150px", resize: "vertical", boxSizing: "border-box"}}
        /><br />
        <button type="submit" style={{padding: "12px", fontSize: "16px", borderRadius: "6px", backgroundColor: "#4a90e2", color: "#fff", border: "none", cursor: "pointer"}}>Send Message</button>
      </form>
      <p>{status}</p>
    </section>
  );
}

export default ContactSection;
