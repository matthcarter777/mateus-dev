"use client";

import { useEffect, useState } from 'react';
import SocialMedia from '../components/socialMedia';
import Navbar from '../components/navbar';
import Profile from '../components/profile';
import Summary from '../components/summary';
import Experience from '../components/experiences';
import Image from 'next/image';
import Formations from '../components/formations';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="animate-pulse">
            <Image 
              src="/images/logo.svg" 
              alt="Logo" 
              width={150} 
              height={150} 
              className="transition-transform duration-500 transform scale-100 hover:scale-110" // Efeito de escalonamento
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 h-full">
          <div className="h-full max-h-80 box-content p-20 sticky top-0">
            <Profile />
            <Navbar />
            <SocialMedia />
          </div>
          <div className="box-content p-20 overflow-y-auto">
            <Summary />
            <Experience />
            <Formations />
          </div>
        </div>
      )}
    </div>
  );
}
