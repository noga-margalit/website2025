'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/background.jpg)',
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
            NM
          </Link>
        </nav>

        {/* Main Content - Centered */}
        <section className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
          <Link href="/aboutme">
            <h1 className="text-7xl md:text-9xl font-bold mb-12 text-white font-semibold hover:text-orange-600 transform hover:scale-103 transition-all duration-200">
              NOGA MARGALIT
                
            </h1>
          </Link>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* <a 
                href="/aboutme" 
                className="px-8 py-4 text-white font-semibold text-lg hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
              >
                ABOUT ME
              </a> */}
              <a 
                href="/photos" 
                className="px-8 py-4 text-white font-semibold text-lg hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
              >
                FILM
              </a>
              <a 
                href="/projects" 
                className="px-8 py-4 text-white font-semibold text-lg hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
              >
                PROJECTS
              </a>
            </div>
          </div>
          
        </section>

        </div>
    </main>
  );
}

