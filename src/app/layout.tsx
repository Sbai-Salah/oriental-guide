"use client";

import Home from './page';

import './globals.css'
import { Righteous } from 'next/font/google';
import Script from 'next/script';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </head>
      <body className={righteous.className}>
          {children}
          <footer className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Explorer</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">Tours</a></li>
              <li><a href="#" className="hover:underline">Activities</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
         
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 MoroccoEast. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white/80"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white/80"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white/80"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
      </body>
   
    </html>
    
  );
}