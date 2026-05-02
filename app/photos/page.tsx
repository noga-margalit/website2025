'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Photos() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black relative">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
          NM
        </Link>
      </nav>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-12 text-white text-center">
            FILM
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for photos - you can replace these with actual images */}
            <div className="aspect-square bg-gray-800 lg flex items-center justify-center">
              <p className="text-gray-500">Photo 1</p>
            </div>
            <div className="aspect-square bg-gray-800 lg flex items-center justify-center">
              <p className="text-gray-500">Photo 2</p>
            </div>
            <div className="aspect-square bg-gray-800 lg flex items-center justify-center">
              <p className="text-gray-500">Photo 3</p>
            </div>
            <div className="aspect-square bg-gray-800 lg flex items-center justify-center">
              <p className="text-gray-500">Photo 4</p>
            </div>
            <div className="aspect-square bg-gray-800 lg flex items-center justify-center">
              <p className="text-gray-500">Photo 5</p>
            </div>
            <div className="aspect-square bg-gray-800 lg flex items-center justify-center">
              <p className="text-gray-500">Photo 6</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="/projects"
          className="px-3 py-2 text-white font-semibold hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
        >
          PROJECTS
        </a>
        <a
          href="/aboutme"
          className="px-3 py-2 text-white font-semibold hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
        >
          ABOUT ME
        </a>
        </div>
      </footer>

    </main>
  );
}

