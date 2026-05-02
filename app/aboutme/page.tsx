'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutMe() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main
      className="min-h-screen flex flex-col relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/backgroundabout.jpg)',
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
          NM
        </Link>
      </nav>

      {/* Title */}
      {/* <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-12 text-white text-center">
          ABOUT ME
        </h1>
      </div> */}

      {/* 1. THE MAGIC DIV: This grows to fill all space, pushing text down */}
      <div className="flex-grow"></div>

      {/* 2. THE TEXT SECTION: Now uses padding-bottom instead of absolute bottom */}
      <section className="relative z-10 w-full pb-10 md:pb-[10vh]">
        <div className="container mx-auto px-6">
          {/* max-w-md or max-w-lg is safer than 50% for mobile readability */}
          <div className="space-y-1 text-left max-w-full md:max-w-[50%]">
            <p className="text-orange-600 text-lg leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Hello! My name is Noga Margalit.
            </p>
            <p className="text-orange-600 text-lg leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              I enjoy graphic design, sign making, film photography & more.
            </p>
            <p className="text-orange-600 text-lg leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              I'm passionate about fonts & lettering working both in Hebrew & English.
            </p>
            <p className="text-orange-600 text-lg leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              I'm currently studying mechanical engineering at the Technion - Israel Institue of Technology in Haifa.
            </p>
            <p className="text-orange-600 text-lg leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              For inquiries -- margalitnoga@gmail.com
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="/photos"
          className="px-3 py-2 text-white font-semibold hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
        >
          FILM
        </a>
        <a
          href="/projects"
          className="px-3 py-2 text-white font-semibold hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
        >
          PROJECTS
        </a>
        </div>
      </footer>
    </main>
  );

}

