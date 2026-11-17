"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "bhuvanaaradhithak@gmail.com";
  const githubUrl = "https://github.com/BhuvanaAradhithaK";
  const linkedinUrl = "https://linkedin.com/in/BhuvanaAradhithaK";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Gothic Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-gothic text-xs tracking-[0.3em] uppercase text-red-500 font-semibold">
          ✦ Initiate Contact ✦
        </span>
        <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-zinc-100">
          Get in Touch
        </h2>
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="h-[1px] w-12 bg-red-800/80" />
          <span className="text-red-600 text-xs">❖</span>
          <div className="h-[1px] w-12 bg-red-800/80" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto pt-2">
          Have an interesting project, question, or simply want to connect? Send a dispatch or reach out through my channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Quick-Copy Card */}
          <div className="p-6 rounded-sm bg-gradient-to-b from-zinc-900/90 to-black border border-zinc-800/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-sm group hover:border-red-900/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 rounded-sm bg-zinc-950 border border-zinc-800 text-red-500 group-hover:border-red-800/60 transition-colors">
                <Mail size={20} />
              </span>
              <div>
                <h3 className="font-gothic text-sm uppercase tracking-widest text-zinc-400">
                  Direct Dispatch
                </h3>
                <p className="text-zinc-100 font-mono text-sm sm:text-base break-all">
                  {emailAddress}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 text-center py-2 px-3 rounded-sm bg-zinc-950 border border-zinc-800 text-xs font-gothic uppercase tracking-widest text-zinc-200 hover:text-white hover:border-red-800 hover:bg-red-950/20 transition-all duration-200"
              >
                Send Direct Mail
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 py-2 px-3 rounded-sm bg-zinc-950 border border-zinc-800 text-xs font-gothic uppercase tracking-widest text-zinc-300 hover:text-red-300 hover:border-zinc-700 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="space-y-3">
            <h4 className="font-gothic text-xs uppercase tracking-widest text-zinc-500 px-1">
              Social Archives
            </h4>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-sm bg-black/70 border border-zinc-850 hover:border-red-900/80 hover:bg-zinc-950/90 hover:shadow-[0_0_20px_rgba(153,27,27,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-red-400 transition-colors">
                  <Github size={18} />
                </span>
                <div>
                  <h5 className="font-gothic text-sm font-bold uppercase tracking-wider text-zinc-200 group-hover:text-white">
                    GitHub
                  </h5>
                  <p className="text-xs font-mono text-zinc-500 group-hover:text-red-400/80">
                    @BhuvanaAradhithaK
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-sm bg-black/70 border border-zinc-850 hover:border-red-900/80 hover:bg-zinc-950/90 hover:shadow-[0_0_20px_rgba(153,27,27,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-red-400 transition-colors">
                  <Linkedin size={18} />
                </span>
                <div>
                  <h5 className="font-gothic text-sm font-bold uppercase tracking-wider text-zinc-200 group-hover:text-white">
                    LinkedIn
                  </h5>
                  <p className="text-xs font-mono text-zinc-500 group-hover:text-red-400/80">
                    /in/BhuvanaAradhithaK
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative p-6 sm:p-8 rounded-sm bg-gradient-to-b from-[#111116] via-[#0d0d12] to-black border border-zinc-800/90 shadow-[0_15px_35px_rgba(0,0,0,0.85)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-red-950/50 border border-red-700/80 flex items-center justify-center text-red-400 shadow-[0_0_25px_rgba(220,38,38,0.4)]">
                  <Check size={28} />
                </div>
                <h3 className="font-gothic text-2xl font-bold uppercase tracking-wider text-zinc-100">
                  Message Transmitted
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base max-w-sm mx-auto font-sans leading-relaxed">
                  Thank you, <span className="text-zinc-200 font-semibold">{formData.name}</span>. Your dispatch has been received. I will review it and reply back to <span className="text-red-400">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-sm bg-zinc-950 border border-zinc-800 text-zinc-300 font-gothic text-xs uppercase tracking-widest hover:border-red-800 hover:text-white transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={18} className="text-red-500" />
                  <h3 className="font-gothic text-base font-bold uppercase tracking-wider text-zinc-200">
                    Dispatch A Message
                  </h3>
                </div>

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-gothic text-xs uppercase tracking-widest text-zinc-400 mb-2"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Byron / Ada Lovelace"
                    className="w-full px-4 py-3 rounded-sm bg-zinc-950/90 border border-zinc-800 text-zinc-100 placeholder-zinc-600 font-sans text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-gothic text-xs uppercase tracking-widest text-zinc-400 mb-2"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. wanderer@domain.com"
                    className="w-full px-4 py-3 rounded-sm bg-zinc-950/90 border border-zinc-800 text-zinc-100 placeholder-zinc-600 font-sans text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-gothic text-xs uppercase tracking-widest text-zinc-400 mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Speak your mind or propose an endeavor..."
                    className="w-full px-4 py-3 rounded-sm bg-zinc-950/90 border border-zinc-800 text-zinc-100 placeholder-zinc-600 font-sans text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-colors resize-y"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="group relative w-full py-3.5 px-6 rounded-sm bg-gradient-to-r from-red-950 via-zinc-900 to-black border border-red-900/80 text-zinc-100 font-gothic text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2"
                >
                  <Send size={15} className="text-red-400 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-zinc-500 text-center font-sans">
                  UI prototype ready for API integration (Formspree, Resend, or Next.js Route Handlers).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
