'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Projects() {
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
            PROJECTS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for projects - you can replace these with actual project cards */}
            <div className="bg-gray-800 lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Project 1</h3>
              <p className="text-gray-400 mb-4">
                Description of your first project. Add details about what you worked on, the technologies used, and the outcome.
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                View Project →
              </a>
            </div>
            <div className="bg-gray-800 lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Project 2</h3>
              <p className="text-gray-400 mb-4">
                Description of your second project. Add details about what you worked on, the technologies used, and the outcome.
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                View Project →
              </a>
            </div>
            <div className="bg-gray-800 lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Project 3</h3>
              <p className="text-gray-400 mb-4">
                Description of your third project. Add details about what you worked on, the technologies used, and the outcome.
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                View Project →
              </a>
            </div>
            <div className="bg-gray-800 lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Project 4</h3>
              <p className="text-gray-400 mb-4">
                Description of your fourth project. Add details about what you worked on, the technologies used, and the outcome.
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                View Project →
              </a>
            </div>
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

