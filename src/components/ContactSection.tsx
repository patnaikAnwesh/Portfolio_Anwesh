import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Shared by all three checks so an empty field can't slip through before the mail app opens.
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!EMAIL_REGEX.test(formData.email)) nextErrors.email = 'Please enter a valid email address (e.g., john@example.com).';
    if (!formData.message.trim()) nextErrors.message = 'Please write a message.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Anchor-click opens the default mail app more reliably than window.location.href on mobile browsers.
    const subject = formData.subject || 'Portfolio Inquiry';
    const body = `Dear Anwesh,\n\n${formData.message}\n\nWith Regards,\n${formData.name}\n${formData.email}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const anchor = document.createElement('a');
    anchor.href = mailtoUrl;
    anchor.rel = 'noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan">Exceptional</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Open for software engineering roles, backend microservice consultations, and AI engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Info Side (2 cols) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Direct Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <div className="text-sm font-bold text-white">{PERSONAL_INFO.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Phone & Location */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone Number</div>
                  <div className="text-sm font-bold text-white">{PERSONAL_INFO.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Current Location</div>
                  <div className="text-sm font-bold text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Currently open for Java Backend, Kafka Microservices, and Full-Stack development opportunities.
              </p>
            </div>

          </div>

          {/* Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800">

              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Prepared!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you! Your default email client has been launched with your message formatted for Anwesh.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => {
                          const value = e.target.value;
                          setFormData({ ...formData, name: value.charAt(0).toUpperCase() + value.slice(1) });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Anwesh Patnaik"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.name ? 'border-rose-500' : 'border-slate-800'} focus:border-cyan-500 outline-none text-sm text-white transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-[11px] font-mono text-rose-400 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.email ? 'border-rose-500' : 'border-slate-800'} focus:border-cyan-500 outline-none text-sm text-white transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-[11px] font-mono text-rose-400 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 outline-none text-sm text-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => {
                        const value = e.target.value;
                        setFormData({ ...formData, message: value.charAt(0).toUpperCase() + value.slice(1) });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      autoCapitalize="sentences"
                      placeholder="Hello Anwesh, I came across your portfolio and..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${errors.message ? 'border-rose-500' : 'border-slate-800'} focus:border-cyan-500 outline-none text-sm text-white transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-[11px] font-mono text-rose-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Anwesh</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
