"use client";
import Header from './page'; // Adjust path as necessary
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
      });
      AOS.refresh(); // Ensure animations are refreshed
    }
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
