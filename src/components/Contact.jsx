import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import '../styles/portfolio.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error
  const set = field => e => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Por favor completa nombre, email y mensaje.');
      return;
    }
    setStatus('sending');
    emailjs.send("service_qga89wm", "template_gk7unne", {
      from_name:  form.name,
      from_email: form.email,
      subject:    form.subject,
      message:    form.message,
    }, "N14k3bz_FkkrEXquC")
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="ae-contact" id="contact">
      <div className="ae-card-wrap">
        <div className="ae-card-shadow" />
        <div className="ae-card">

          <h3>Contact me</h3>

          <label className="ae-label">Name:</label>
          <input className="ae-input" value={form.name} onChange={set('name')} />

          <label className="ae-label">Email:</label>
          <input className="ae-input" type="email" value={form.email} onChange={set('email')} />

          <label className="ae-label">Subject:</label>
          <input className="ae-input" value={form.subject} onChange={set('subject')} />

          <label className="ae-label">Message:</label>
          <textarea className="ae-input" value={form.message} onChange={set('message')} />

          {status === 'success' && <p className="ae-form-msg ae-form-ok">¡Mensaje enviado!</p>}
          {status === 'error'   && <p className="ae-form-msg ae-form-err">Error al enviar. Intenta de nuevo.</p>}

          <button className="ae-send" onClick={handleSubmit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Send'}
          </button>

        </div>
      </div>
    </section>
  );
}
