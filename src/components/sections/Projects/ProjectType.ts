export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  role: string;
  tech: string[];
  image: string;
  github?: string;
  notion?: string;
  demo?: string;
  duration: string;
  teamSize: string;
}

export interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}
