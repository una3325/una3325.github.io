'use client';

import { X } from 'lucide-react';
import { Badge } from 'components/ui/Badge';
import Button from 'components/ui/Button';
import { Project, ProjectsModalProps } from './ProjectType';

export default function projectsModal({ isOpen, onClose, project }: ProjectsModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative animate-fadeIn">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 제목 */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h2>

        {/* 이미지 */}
        <div className="aspect-video bg-gray-100 rounded mb-4 overflow-hidden">
          <img
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 기본 정보 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-6">
          <div className="bg-gray-50 p-3 rounded">
            <div className="font-semibold text-gray-700 mb-1">개발 기간</div>
            <div className="text-gray-600">{project.duration}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="font-semibold text-gray-700 mb-1">팀 구성</div>
            <div className="text-gray-600">{project.teamSize}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="font-semibold text-gray-700 mb-1">담당 역할</div>
            <div className="text-gray-600">{project.role}</div>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">사용 기술</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <Badge key={idx} className="bg-gray-100 text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* 상세 설명 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">프로젝트 소개</h3>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* 링크들 */}
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <Button variant="outline" onClick={() => window.open(project.github, '_blank')}>
              GitHub
            </Button>
          )}
          {project.notion && (
            <Button variant="outline" onClick={() => window.open(project.notion, '_blank')}>
              문서
            </Button>
          )}
          {project.demo && (
            <Button variant="primary" onClick={() => window.open(project.demo, '_blank')}>
              데모 보기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
