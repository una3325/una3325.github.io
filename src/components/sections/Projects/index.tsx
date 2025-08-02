import { AnimatedSection } from 'components/AnimatedSection';
import { Badge } from 'components/ui/Badge';
import Button from 'components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'components/ui/Card';
import { ExternalLink, Github, Globe, ImageOff } from 'lucide-react';
import { useState } from 'react';
import ProjectsModal from './ProjectDetailModal';
import { projects } from './ProjectData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <Card
                onClick={() => setSelectedProject(project)}
                className="min-h-[450px] overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-gray-400">
                      <ImageOff className="w-10 h-10 mb-2" />
                      <span className="text-sm">이미지 없음</span>
                    </div>
                  )}
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 5).map((tech, techIndex) => (
                      <Badge key={techIndex}>{tech}</Badge>
                    ))}
                    {project.tech.length > 5 && <Badge>+{project.tech.length - 5}</Badge>}
                  </div>

                  {/* 링크 버튼들 */}
                  <div className="flex gap-2 flex-wrap">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Button>
                    )}

                    {project.notion && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.notion, '_blank');
                        }}
                      >
                        <Globe className="w-3 h-3 mr-1" />
                        Docs
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
          <ProjectsModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        </div>
      </div>
    </section>
  );
}
