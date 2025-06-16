
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { toast } from 'sonner';

interface ContactProps {
  email: string;
  social: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

const Contact: React.FC<ContactProps> = ({ email, social }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast.success('Email client opened! Your message is ready to send.');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="rounded-lg resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about web development and design.
              </p>
              
              <div className="flex items-center gap-3 text-gray-600 mb-6">
                <Mail className="h-5 w-5" />
                <a 
                  href={`mailto:${email}`}
                  className="hover:text-gray-900 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">
                Find me online
              </h4>
              <div className="flex gap-4">
                {social.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600 rounded-full transition-all duration-300"
                    aria-label={link.platform}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
