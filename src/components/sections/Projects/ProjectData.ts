import { Project } from './ProjectType';
import grabbmeImage from '../../../assets/grabbme.png';
import PriceTrendAI from '../../../assets/priceTrendAI.png';

export const projects: Project[] = [
  {
    title: '[GrabbMe] 팀 빌딩 서비스',
    description: '프로그래머스 팀프로젝트로 진행한 팀 빌딩 서비스',
    detailedDescription: `GrabbMe는 사이드 프로젝트 팀원을 모집하고, 팀을 구성하며 관리할 수 있는 플랫폼입니다.
    프로그래머스 풀스택 부트캠프 과정을 참여하던 중 슬랙 채널을 통해 팀을 꾸리는 것에 불편함을 느껴 팀 빌딩의 편의성을 높이고자 개발하게 되었습니다.
    `,
    role: '백엔드 개발',
    tech: ['TypeScript', 'Nest.js', 'MySQL', 'JWT', 'Swagger', 'AWS'],
    image: grabbmeImage,
    github: 'https://github.com/GrebbMe/grabbme-be',
    notion: '',
    demo: '',
    duration: '2024.09 ~ 2024.10 (6주)',
    teamSize: '8명',
  },
  {
    title: '[PriceTrendAI] 부동산 가격 예측 서비스',
    description: '부동산 시세를 예측하고 시각화하는 서비스',
    detailedDescription: `부동산 데이터를 기반으로 미래의 매매/전세 가격을 예측하는 서비스입니다.\n
    Python의 Prophet 라이브러리로 예측 모델을 구성하고, React 기반의 프론트엔드에서 그래프와   필터링 기능을 제공합니다.`,
    role: '프론트엔드 개발',
    tech: [
      'Python',
      'Prophet',
      'selenium',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'Recharts',
      'Zustand',
    ],
    image: PriceTrendAI,
    github: 'https://github.com/PriceTrendAI',
    notion: '',
    demo: '',
    duration: '2025.03 ~ 2025.04',
    teamSize: '3명',
  },
];
