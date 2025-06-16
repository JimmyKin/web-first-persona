
import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  siteTitle: string;
  social: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({ siteTitle, social }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-medium text-lg mb-2">{siteTitle}</div>
            <p className="text-gray-400 text-sm">
              Building digital experiences with purpose
            </p>
          </div>
          
          <div className="flex gap-4">
            {social.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                aria-label={link.platform}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} {siteTitle}. Made with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
