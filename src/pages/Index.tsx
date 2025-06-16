
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import data files
import siteConfig from '@/data/siteConfig.json';
import projectsData from '@/data/projects.json';
import blogData from '@/data/blog.json';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = `${siteConfig.site.title} - ${siteConfig.site.tagline}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.site.description);
    }
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        siteTitle={siteConfig.site.title}
        navigation={siteConfig.navigation}
      />
      
      <main>
        <Hero {...siteConfig.hero} />
        <About {...siteConfig.about} />
        <Projects projects={projectsData} />
        <Blog posts={blogData} />
        <Contact 
          email={siteConfig.site.email}
          social={siteConfig.social}
        />
      </main>
      
      <Footer 
        siteTitle={siteConfig.site.title}
        social={siteConfig.social}
      />
    </div>
  );
};

export default Index;
