import { Testimonial, CurriculumItem, FaqItem, NicheItem } from './types';

// REPLACE THIS WITH YOUR ACTUAL YOUTUBE VIDEO ID
export const VIDEO_ID = "dQw4w9WgXcQ"; // Example ID, replace with yours (e.g. intro video)
export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/your-group-invite-link";
export const PAYSTACK_PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // REPLACE WITH YOUR KEY

export const VA_NICHES: NicheItem[] = [
  {
    title: "General Admin VA",
    description: "The perfect starting point. Help busy entrepreneurs organize their lives.",
    avgEarnings: "$15 - $25/hr",
    icon: "briefcase",
    tasks: ["Email Management", "Calendar Scheduling", "Data Entry", "Travel Booking"]
  },
  {
    title: "Social Media VA",
    description: "Manage content for creators and businesses without needing to be an 'influencer'.",
    avgEarnings: "$20 - $35/hr",
    icon: "instagram",
    tasks: ["Scheduling Posts", "Replying to Comments", "Basic Graphics (Canva)", "Caption Writing"]
  },
  {
    title: "Tech Support VA",
    description: "For those who are tech-savvy. High demand and higher pay.",
    avgEarnings: "$30 - $50/hr",
    icon: "monitor",
    tasks: ["Website Updates", "Managing CRM Tools", "Automating Workflows", "Handling Customer Tickets"]
  },
  {
    title: "Creative/Design VA",
    description: "Monetize your eye for design by creating assets for brands.",
    avgEarnings: "$25 - $45/hr",
    icon: "pen-tool",
    tasks: ["Presentation Design", "Video Editing clips", "Thumbnail Creation", "Brand Kits"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Chioma Okeke",
    role: "Former Bank Teller",
    image: "https://picsum.photos/id/1011/150/150",
    content: "I was skeptical at first because 15k naira seemed too cheap for the value promised. But within 3 weeks, I landed a client paying me $800/month to manage their emails. This course changed my life!",
    earnings: "$800/mo",
    platform: "LinkedIn"
  },
  {
    id: 2,
    name: "Emmanuel Adebayo",
    role: "Student",
    image: "https://picsum.photos/id/1012/150/150",
    content: "The templates for reaching out to clients are pure gold. I used the 'Cold DM' script and got a reply in 2 hours. I've made my course fee back 20 times over already.",
    earnings: "$350 Project",
    platform: "Upwork"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Stay-at-Home Mom",
    image: "https://picsum.photos/id/338/150/150",
    content: "Being a mom, I needed something flexible. The module on 'Time Management for VAs' was exactly what I needed. I now work 4 hours a day and earn more than my husband.",
    earnings: "$1,200/mo",
    platform: "Fiverr"
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Graphic Designer",
    image: "https://picsum.photos/id/1025/150/150",
    content: "I had skills but no clients. This Masterclass taught me how to package my offer. I'm fully booked for the next 3 months.",
    earnings: "$2,500 Total",
    platform: "LinkedIn"
  }
];

export const CURRICULUM: CurriculumItem[] = [
  {
    week: 1,
    title: "The VA Mindset & Foundations",
    topics: ["Who is a VA?", "Setting up your Payment Accounts (Grey, Payoneer, Geegpay)", "Choosing your Niche (Tech, Admin, Creative)"]
  },
  {
    week: 2,
    title: "Essential Skills Mastery",
    topics: ["Email Management & Calendar Booking", "Social Media Management Basics", "Data Entry & Lead Generation Tools"]
  },
  {
    week: 3,
    title: "Building Your Portfolio",
    topics: ["Creating a Killer CV/Resume", "Setting up LinkedIn Optimization", "Mock Projects for Experience"]
  },
  {
    week: 4,
    title: "Client Acquisition & Sales",
    topics: ["Where to find clients (Secret methods)", "Drafting Proposals that Convert", "Ace the Interview & Getting Paid"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do I need a laptop?",
    answer: "A laptop is recommended for easier work, but 70% of the course and initial jobs can be done with a good smartphone. We show you how."
  },
  {
    question: "I have a 9-5 job, can I combine it?",
    answer: "Absolutely. Virtual Assistance is designed to be flexible. You can work in the evenings or weekends to build your side hustle until it replaces your salary."
  },
  {
    question: "Is this a recorded class or live?",
    answer: "It is a hybrid. You get immediate access to high-quality recorded modules, plus 4 live weekend coaching calls for Q&A."
  },
  {
    question: "What if I don't get a client?",
    answer: "If you implement everything we teach and show proof of work, we offer a dedicated support group to review your applications. We don't guarantee jobs, but we guarantee the skills to get them."
  },
  {
    question: "How do I get access after payment?",
    answer: "Immediately after your payment is successful, you will be automatically redirected to our exclusive WhatsApp group where onboarding takes place."
  }
];