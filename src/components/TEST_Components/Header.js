// components/Header.js
"use client";


 function Header() {
    return (
      <header className="absolute top-0 w-full z-10">
        <nav className="flex justify-between items-center p-6 bg-transparent">
          <div className="text-white text-xl font-bold">TRAVEL</div>
          <ul className="flex space-x-6 text-white">
            <li>HOME</li>
            <li>HOLIDAYS</li>
            <li>DESTINATIONS</li>
            <li>FLIGHTS</li>
            <li>OFFERS</li>
            <li>CONTACTS</li>
          </ul>
        </nav>
      </header>
    );
  }
  