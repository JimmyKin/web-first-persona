
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  headline: string;
  subheadline: string;
  profileImage: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, profileImage, ctaText, ctaLink }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
            onError={(e) => {
              // Fallback for missing profile image
              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="14" fill="%236b7280">Profile</text></svg>';
            }}
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
          {headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection(ctaLink)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            {ctaText}
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => scrollToSection('#about')}
            className="text-gray-600 hover:text-gray-900 px-4 py-3 rounded-full transition-all duration-300"
          >
            Learn More <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
