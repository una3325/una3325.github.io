import { useState } from 'react';
import { AnimatedSection } from 'components/AnimatedSection';
import { Card, CardContent } from 'components/ui/Card';
import type { Category } from './TechStackTypes';
import { categories, techStackData } from './TechStackData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('FE');

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Tech Stack</h2>
        </AnimatedSection>

        <div className="flex justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStackData[selectedCategory].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <AnimatedSection key={`${selectedCategory}-${tech.name}`} delay={index * 100}>
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0">
                  <CardContent className="flex flex-col items-center gap-3">
                    <div className="text-gray-700 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-gray-700">{tech.name}</span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
