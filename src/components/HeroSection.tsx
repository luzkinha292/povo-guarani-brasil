
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleScrollToContent = () => {
    const contentSection = document.getElementById('content');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/forest-bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-guarani-dark/40 to-guarani-green/60"></div>
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Povo Guarani
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
          Conhecendo a história, cultura e contribuições dos Guarani para a sociedade brasileira
        </p>
        <Button 
          onClick={handleScrollToContent}
          className="bg-guarani-gold hover:bg-guarani-brown text-guarani-dark hover:text-white transition-colors"
        >
          Explorar
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
