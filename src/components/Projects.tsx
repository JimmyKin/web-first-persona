import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Pause } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  audio?: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const [audioElements, setAudioElements] = useState<{ [key: number]: HTMLAudioElement }>({});

  const toggleAudio = (projectId: number, audioSrc: string) => {
    if (playingAudio === projectId) {
      audioElements[projectId]?.pause();
      setPlayingAudio(null);
    } else {
      // Stop any currently playing audio
      if (playingAudio) {
        audioElements[playingAudio]?.pause();
      }
      
      // Create or get audio element
      if (!audioElements[projectId]) {
        const audio = new Audio(audioSrc);
        audio.onended = () => setPlayingAudio(null);
        setAudioElements(prev => ({ ...prev, [projectId]: audio }));
        audio.play();
      } else {
        audioElements[projectId].currentTime = 0;
        audioElements[projectId].play();
      }
      
      setPlayingAudio(projectId);
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
        </p>
        
        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  {project.video ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      poster={project.image}
                      controls
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect width="400" height="225" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="16" fill="%236b7280">Project Image</text></svg>';
                      }}
                    />
                  )}
                  
                  {project.audio && (
                    <Button
                      onClick={() => toggleAudio(project.id, project.audio!)}
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                      size="sm"
                    >
                      {playingAudio === project.id ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.links.demo && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="169" viewBox="0 0 300 169"><rect width="300" height="169" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="14" fill="%236b7280">Project</text></svg>';
                        }}
                      />
                      
                      {project.audio && (
                        <Button
                          onClick={() => toggleAudio(project.id, project.audio!)}
                          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                          size="sm"
                        >
                          {playingAudio === project.id ? (
                            <Pause className="h-3 w-3" />
                          ) : (
                            <Play className="h-3 w-3" />
                          )}
                        </Button>
                      )}
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-2">
                      {project.links.demo && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full text-xs"
                        >
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full text-xs"
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
