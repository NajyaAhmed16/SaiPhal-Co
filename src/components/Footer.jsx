import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { companyInfo, footerLinks } from '../data/constants';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-max section-padding pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="mb-6 inline-block">
              <img
                src={companyInfo.logo}
                alt="CFO Services"
                className="h-10 w-auto brightness-200"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              {companyInfo.legalName}, {companyInfo.address}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-400"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-400" />
                {companyInfo.email}
              </a>
              <a
                href={`tel:+91${companyInfo.phone}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-gold-400"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" />
                {companyInfo.phone}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-white">Our Newsletter</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Subscribe to our newsletter to get the latest updates and insights on financial management.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-navy-700 bg-navy-800 py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-gold-400"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-gold-400 px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-500"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-gray-400 transition-all hover:bg-gold-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-max flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">
            All rights reserved by CFO Services
          </p>
          <Link to="/privacy-policy" className="text-xs text-gray-500 transition-colors hover:text-gold-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
