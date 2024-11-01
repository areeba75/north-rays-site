"use client"; // Ensure this is at the top for client-side components
import Header from './Home/page'; // Adjust import path based on file structure
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    // Initialize AOS on the client side
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
      });
      AOS.refresh(); // Refresh animations
    }
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
