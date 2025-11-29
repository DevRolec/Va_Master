import React, { useState, useEffect } from 'react';
import { ChevronDown, Clock, Globe, BookOpen, Menu, X, DollarSign, Laptop, PlayCircle, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, CURRICULUM, FAQS, VA_NICHES, VIDEO_ID } from './constants';
import { Button } from './components/Button';
import { TestimonialCard } from './components/TestimonialCard';
import { PricingCard } from './components/PricingCard';
import { PaymentProof } from './components/PaymentProof';
import { VideoPlayer } from './components/VideoPlayer';
import { NicheCard } from './components/NicheCard';
import { RegistrationModal } from './components/RegistrationModal';

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 59, seconds: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev; // Timer finished
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openPaymentModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Top Banner - Urgency */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold sticky top-0 z-50 shadow-md flex justify-center items-center">
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <Clock size={16} />
          <span>Batch Closing: </span>
          <span className="font-mono bg-red-800 px-2 rounded inline-block">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 py-4 px-4 md:px-8 flex justify-between items-center relative z-40">
        <div className="font-heading font-black text-xl tracking-tighter text-brand-dark flex items-center gap-1">
          <Laptop className="text-brand-gold" size={24} />
          <span>VA<span className="text-brand-gold">MASTERCLASS</span></span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-semibold text-sm text-gray-600">
          <button onClick={() => scrollToSection('about')} className="hover:text-brand-dark">About VAs</button>
          <button onClick={() => scrollToSection('niches')} className="hover:text-brand-dark">Niches</button>
          <button onClick={() => scrollToSection('curriculum')} className="hover:text-brand-dark">Curriculum</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-brand-dark">Stories</button>
        </div>
        
        <div className="hidden md:block">
          <Button variant="primary" onClick={openPaymentModal} className="!py-2 !px-6 !text-sm shadow-md hover:shadow-lg">
            Join the Class
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden z-50">
            <button onClick={() => scrollToSection('about')} className="text-left font-semibold py-2">About VAs</button>
            <button onClick={() => scrollToSection('niches')} className="text-left font-semibold py-2">Niches</button>
            <button onClick={() => scrollToSection('reviews')} className="text-left font-semibold py-2">Success Stories</button>
            <Button variant="primary" onClick={openPaymentModal}>Get Started Now</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-brand-dark text-white pt-10 pb-20 px-4 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/20 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-brand-gold font-bold text-xs md:text-sm uppercase tracking-wider mb-8 border border-yellow-400/30">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Registration for October Batch is OPEN
          </div>
          
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Make Money from Home as a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              Virtual Assistant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Watch the short video below to see how complete beginners are earning <strong>$500 - $2,000/month</strong> using just their smartphone and basic skills.
          </p>

          {/* Video Placeholder */}
          <div className="mb-12">
            <VideoPlayer videoId={VIDEO_ID} title="How to become a VA" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" onClick={openPaymentModal} className="w-full sm:w-auto text-xl px-12 py-5 animate-pulse-fast shadow-brand-gold/50 shadow-lg">
              Yes! I Want to Join for ₦15,000
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            <span className="text-brand-gold font-bold">Risk Free:</span> 100% Money Back Guarantee if you don't learn a skill.
          </p>
        </div>
      </header>

      {/* What is a VA? (Educational/Lead Gen Content) */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" alt="Happy VA working" className="w-full object-cover" />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                   <p className="font-bold text-lg">Work from anywhere, anytime.</p>
                 </div>
               </div>
            </div>
            <div className="order-1 md:order-2">
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                 What Exactly is a Virtual Assistant?
               </h2>
               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 A Virtual Assistant (VA) is a remote worker who provides support to business owners online. Think of it as a personal assistant, but you work from your own home, set your own prices, and can have multiple clients at once.
               </p>
               <div className="space-y-4 mb-8">
                 {[
                   "No Degree Required: Your skills matter more than certificates.",
                   "Earn in Dollars: Foreign clients pay standard rates ($15/hr+).",
                   "Low Barrier to Entry: You don't need to know how to code."
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <CheckCircle className="text-brand-green mt-1 shrink-0" size={20} />
                     <span className="font-medium text-gray-800">{item}</span>
                   </div>
                 ))}
               </div>
               <Button variant="secondary" onClick={openPaymentModal}>
                 Start Your Career Today
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section id="niches" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-goldDark font-bold tracking-widest uppercase text-sm">Where can you fit in?</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 text-gray-900">High-Paying VA Niches</h2>
            <p className="text-gray-600 mt-4 text-lg">You don't need to do everything. Pick one path and master it. We teach you all of these.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VA_NICHES.map((niche, idx) => (
              <NicheCard key={idx} niche={niche} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-gray-800 mb-6">Not sure which one to pick? We help you decide in Week 1.</p>
            <Button variant="primary" onClick={openPaymentModal} className="mx-auto">
              Get Access to All Modules
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4 bg-gray-900 text-white relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Course Syllabus</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">The 4-Week Roadmap</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CURRICULUM.map((item) => (
              <div key={item.week} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-gold transition-all group">
                <div className="text-brand-gold font-bold text-sm mb-2 uppercase tracking-wide">Week {item.week}</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <ul className="space-y-3">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-brand-gold to-yellow-600 rounded-2xl p-8 md:p-12 text-center shadow-xl">
             <h3 className="text-2xl font-bold text-brand-dark mb-4">🎁 BONUS: Exclusive WhatsApp Support Group</h3>
             <p className="text-brand-dark/80 text-lg mb-6 max-w-2xl mx-auto">
               You're not doing this alone. Join hundreds of other VAs, share job leads, and get answers to your questions instantly.
             </p>
             <div className="inline-flex items-center justify-center bg-brand-dark text-white px-6 py-3 rounded-xl font-bold gap-2">
               <Laptop size={20} />
               <span>Access included in ₦15,000 fee</span>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="reviews" className="py-20 px-4 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Real People. Real Dollar Earnings.</h2>
            <p className="text-xl text-gray-600 mt-4">These results could be yours in 30 days.</p>
          </div>

          {/* Horizontal Scroll Area */}
          <div className="flex gap-6 overflow-x-auto pb-12 px-4 scrollbar-hide snap-x">
            {TESTIMONIALS.map((t) => (
               <div key={t.id} className="snap-center">
                 <TestimonialCard data={t} />
               </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
             <PaymentProof />
             <div className="max-w-md text-center md:text-left">
               <h4 className="font-bold text-xl mb-2">They started exactly where you are.</h4>
               <p className="text-gray-600 mb-4">With zero experience and a lot of doubt. Now they pay their bills in dollars. What are you waiting for?</p>
               <button onClick={openPaymentModal} className="text-brand-accent font-bold hover:underline flex items-center justify-center md:justify-start gap-1">
                 Read more success stories <Globe size={16} />
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50 relative">
         <div className="container mx-auto relative z-10">
            <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900">One Price. Full Access.</h2>
               <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                 We've made this a "no-brainer" price so money doesn't stop you from changing your life.
               </p>
            </div>
            
            <div onClick={openPaymentModal} className="cursor-pointer">
              <PricingCard />
            </div>

            <div className="mt-8 text-center">
               <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> Secure Payment</span>
                  <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> Instant Access</span>
                  <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> Lifetime Updates</span>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 group cursor-pointer transition-all hover:bg-white hover:shadow-md">
                <summary className="font-bold text-lg list-none flex justify-between items-center text-gray-800 group-hover:text-brand-gold transition-colors">
                  {faq.question}
                  <ChevronDown className="transform group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pl-2 border-l-2 border-brand-gold">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="font-heading font-black text-2xl tracking-tighter mb-6">
            VA<span className="text-brand-gold">MASTERCLASS</span>
          </div>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            We are dedicated to reducing unemployment in Africa by equipping young people with high-income digital skills.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500 mb-8">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} VA Masterclass. All rights reserved. <br/>
            This site is not a part of the Facebook website or Facebook Inc.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-xs text-red-500 font-bold">Ends Soon!</span>
            <span className="font-bold text-xl text-gray-900">₦15,000</span>
         </div>
         <Button onClick={openPaymentModal} className="!py-3 !px-8 !text-sm shadow-none">
           Enroll Now
         </Button>
      </div>
    </div>
  );
}

export default App;