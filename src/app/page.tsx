"use client";
import Header from './Home/page';
import { useEffect } from 'react';
import AOS from 'aos';

AOS.init();



export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
      });
    }
  }, []);

  return (
    <>
      <Header />
      
    </>
  );
}
