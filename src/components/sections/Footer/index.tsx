import { AnimatedSection } from 'components/AnimatedSection';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <a
              href="mailto:a33256448@gmail.com"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>a33256448@gmail.com</span>
            </a>
            <a
              href="https://github.com/una3325"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>github.com/una3325</span>
            </a>
            <div className="shrink-0 h-px w-full my-8 bg-gray-600"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <p className="text-gray-400">© 2025 YangYuna All rights reserved.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
