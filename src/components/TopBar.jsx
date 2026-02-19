import { Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/constants';

export default function TopBar() {
  return (
    <div className="hidden bg-navy-900 text-sm text-gray-300 md:block">
      <div className="container-max flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href={`tel:+91${companyInfo.phone}`}
            className="flex items-center gap-2 transition-colors hover:text-gold-400"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{companyInfo.phoneFormatted}</span>
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-center gap-2 transition-colors hover:text-gold-400"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>{companyInfo.email}</span>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href={companyInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold-400"
            aria-label="LinkedIn"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
