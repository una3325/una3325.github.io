import Button from 'components/ui/Button';
import { ChevronDown, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 text-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-slide-up">
          Una's Portfolio
        </h1>
        <p className="text-3xl mb-12 text-gray-600 animate-slide-up-delay">Frontend Developer</p>
        <div className="flex justify-center gap-4 animate-slide-up-delay-2">
          <a href="mailto:a33256448@gmail.com">
            <Button
              size="lg"
              className="gap-2 bg-gray-900 text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </a>
          <a href="https://github.com/una3325" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 bg-transparent px-8 py-3"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}
