import { AnimatedSection } from 'components/AnimatedSection';
import { Card, CardContent } from 'components/ui/Card';
import { Github, Globe, Mail } from 'lucide-react';

export default function Profile() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        </AnimatedSection>

        <div className="flex gap-6 max-h-[470px] items-stretch flex-col md:flex-row">
          <AnimatedSection delay={400}>
            <Card className="flex-1 h-full p-6 shadow-xl border-0 bg-white/80 backdrop-blur-sm flex flex-col">
              <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    안녕하세요! 웹 개발에 열정을 가진 <span className="font-semibold">양유나</span>
                    입니다. 사용자 중심의 직관적인 인터페이스를 만드는 것을 좋아하며, 깔끔한 코드
                    작성을 지향합니다.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    팀워크를 중시하고 새로운 기술 학습에 적극적입니다. 지속적인 학습을 통해 더 나은
                    개발자가 되기 위해 노력하고 있습니다.
                  </p>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <a
                      href="mailto:a33256448@gmail.com"
                      className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                    >
                      a33256448@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-gray-600" />
                    <a
                      href="https://github.com/una3325"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                    >
                      github.com/una3325
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-600" />
                    <a
                      href="https://diddbskb.tistory.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                    >
                      diddbskb.tistory.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
