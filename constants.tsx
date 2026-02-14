
import React from 'react';
import { 
  FileText, Briefcase, Calculator, PieChart, Search, Layout, Database, ShieldCheck, 
  MapPin, Mail, Phone, Linkedin, GraduationCap, Award, Wrench, BookOpen, User,
  Github, Twitter, MessageSquare, Download, ChevronRight, CheckCircle2,
  Trophy, Globe, Activity, Rocket, Zap, Palette, Music, Clapperboard
} from 'lucide-react';

export const PRIMARY_COLOR = '#0A2463';
export const SECONDARY_COLOR = '#D4AF37';

export const SKILLS = [
  { id: '1', name: 'UAE Corporate Tax', description: 'Expert in compliance & regulatory updates.', icon: 'FileText' },
  { id: '2', name: 'Tax Return Filing', description: 'Specialized in accurate corporate submissions.', icon: 'Briefcase' },
  { id: '3', name: 'VAT Review', description: 'Reconciliation & compliance audits.', icon: 'Calculator' },
  { id: '4', name: 'Financial Review', description: 'Tax-perspective financial statement analysis.', icon: 'PieChart' },
  { id: '5', name: 'Accounts Analysis', description: 'Ledger scrutiny and transaction auditing.', icon: 'Search' },
  { id: '6', name: 'Excel for Finance', description: 'Advanced modelling and reporting automation.', icon: 'Database' },
  { id: '7', name: 'Software Proficiency', description: 'Tally, QBO, Xero, and more.', icon: 'Layout' },
  { id: '8', name: 'Audit Compliance', description: 'Statutory and tax audit execution.', icon: 'ShieldCheck' },
];

export const EXPERIENCE = [
  {
    id: 'exp1',
    position: 'Account and Tax Associate',
    company: 'Active Bean Counter Private Limited (Anderson Global Group)',
    location: 'Ahmedabad, Gujarat, India',
    duration: 'July 2025 – Present',
    type: 'Full-time',
    responsibilities: [
      'Review financial statements from a taxation perspective',
      'Handle UAE Corporate Tax compliance including tax computations',
      'Perform VAT reviews and reconciliations',
      'Prepare working papers and tax adjustments',
      'Advanced Excel implementation for reporting'
    ]
  },
  {
    id: 'exp2',
    position: 'Assistant Accountant',
    company: 'Auzin Advisory Private Limited',
    location: 'Surat, Gujarat, India',
    duration: 'March 2025 – May 2025',
    type: 'Full-time',
    responsibilities: [
      'Performed bank reconciliations and ledger scrutiny',
      'Assisted in preparation of personal income tax returns',
      'Supported day-to-day accounting compliance'
    ]
  },
  {
    id: 'exp3',
    position: 'Article Assistant',
    company: 'M D Dudawala & Co.',
    location: 'Surat, Gujarat, India',
    duration: 'April 2022 – February 2025',
    type: 'Internship',
    responsibilities: [], // Fixed: Added empty array to prevent map errors
    categories: [
      {
        name: 'Income Tax & GST',
        items: ['ITR for 150+ clients', 'TDS/TCS payments', 'GST for 25+ clients', 'E-invoicing implementation']
      },
      {
        name: 'Auditing',
        items: ['Statutory & Tax audits', 'Diamond & Jewellery sector', 'Form 3CB/3CD preparation']
      }
    ]
  }
];

export const EDUCATION = [
  {
    id: 'edu1',
    degree: 'Chartered Accountant',
    institution: 'ICAI',
    duration: '2020 – 2024',
    badge: 'First Attempt Success',
    achievements: ['CA Final: 61% (4 Exemptions)', 'CA Inter: 52% (2 Exemptions)', 'CA Foundation: 60%']
  },
  {
    id: 'edu2',
    degree: 'Higher Secondary (Class XII)',
    institution: 'GSEB',
    duration: '2020',
    achievements: ['Score: 88.71%', '3rd Rank in School']
  }
];

export const CERTIFICATIONS = [
  'ICAI IT & Advanced IT Training',
  'ICITSS Orientation Course',
  'AICITSS Management & Communication Skills'
];

export const TOOLS = [
  'Tally ERP', 'QuickBooks (QBO)', 'Xero', 'Genius', 'Hubdoc', 'MS Excel', 'MS Word'
];

export const SOFT_SKILLS = [
  { name: 'Client Communication', level: 90 },
  { name: 'Time Management', level: 95 },
  { name: 'Team Collaboration', level: 88 },
  { name: 'Analytical Thinking', level: 92 }
];

export const INTERESTS = [
  { name: 'Cricket', icon: 'Rocket' },
  { name: 'Chess', icon: 'ShieldCheck' },
  { name: 'Music', icon: 'Music' },
  { name: 'Movies', icon: 'Clapperboard' }
];

export const IconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={24} />,
  Briefcase: <Briefcase size={24} />,
  Calculator: <Calculator size={24} />,
  PieChart: <PieChart size={24} />,
  Search: <Search size={24} />,
  Layout: <Layout size={24} />,
  Database: <Database size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  MapPin: <MapPin size={24} />,
  Mail: <Mail size={24} />,
  Phone: <Phone size={24} />,
  Linkedin: <Linkedin size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  Award: <Award size={24} />,
  Tool: <Wrench size={24} />,
  BookOpen: <BookOpen size={24} />,
  User: <User size={24} />,
  Rocket: <Rocket size={24} />,
  Activity: <Activity size={24} />,
  Zap: <Zap size={24} />,
  CheckCircle2: <CheckCircle2 size={16} />,
  Music: <Music size={24} />,
  Clapperboard: <Clapperboard size={24} />
};
