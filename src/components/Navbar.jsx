import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, companyInfo } from '../data/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={companyInfo.logo}
              alt="CFO Services"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  link.active
                    ? 'text-gold-400'
                    : 'text-navy-800 hover:text-gold-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href={companyInfo.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-800 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 pb-4 lg:hidden">
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                    link.active
                      ? 'bg-gold-50 text-gold-400'
                      : 'text-navy-800 hover:bg-gray-50 hover:text-gold-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <a
                  href={companyInfo.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
