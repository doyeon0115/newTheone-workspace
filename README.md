# The1Seoul Project

Next.js와 NestJS를 사용한 풀스택 웹 애플리케이션

## 프로젝트 구조

```
the1seoulNextProj/
├── frontend/                     # Next.js 프론트엔드 (App Router)
├── backend/                      # NestJS 백엔드
└── adm/                          # 관리자 페이지 (Next.js)
```

## 기술 스택

### 프론트엔드 (Next.js)

- JavaScript
- Tailwind CSS
- Redux Toolkit
- React Testing Library
- Jest

### 백엔드 (NestJS)

- TypeScript
- MySQL
- JWT 인증
- Swagger API 문서
- TypeORM

## 시작하기

### 프론트엔드 실행

```bash
cd frontend
npm install
npm run dev
```

### 백엔드 실행

```bash
cd backend
npm install
npm run start:dev
```

## 환경 설정

### 프론트엔드

- 포트: 3000 (기본값)

### 백엔드

- 포트: 4000 (기본값)
- 데이터베이스: MySQL
- 환경 변수: `.env` 파일 참조

## API 문서

- Swagger UI: http://localhost:4000/api

## 테스트

```bash
# 프론트엔드 테스트
cd frontend
npm test

# 백엔드 테스트
cd backend
npm test
```

## 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.

<!--

1. 현재 적용된 기술 스택
프론트엔드 (Next.js)
Next.js
App Router 사용
서버 사이드 렌더링 (SSR) 지원
자동 코드 분할
내장된 이미지 최적화
관련 페이지: https://nextjs.org/docs
Tailwind CSS
유틸리티 기반 CSS 프레임워크
반응형 디자인 지원
커스텀 테마 설정 가능
관련 페이지: https://tailwindcss.com/docs
Redux Toolkit
상태 관리 라이브러리
미들웨어 지원 (thunk, saga 등)
DevTools 통합
관련 페이지: https://redux-toolkit.js.org/
React Testing Library + Jest
컴포넌트 테스트
유닛 테스트
관련 페이지:
https://testing-library.com/docs/react-testing-library/intro/
https://jestjs.io/docs/getting-started


백엔드 (NestJS)
NestJS
모듈 기반 아키텍처
의존성 주입
미들웨어 지원
관련 페이지: https://docs.nestjs.com/
TypeORM
객체 관계 매핑 (ORM)
데이터베이스 마이그레이션
쿼리 빌더
관련 페이지: https://typeorm.io/
MySQL
관계형 데이터베이스
트랜잭션 지원
관련 페이지: https://dev.mysql.com/doc/
JWT (JSON Web Token)
토큰 기반 인증
관련 페이지: https://jwt.io/
Swagger
API 문서화
API 테스트 인터페이스
관련 페이지: https://swagger.io/



2. 추가로 적용하면 좋을 기술들
프론트엔드
React Query
서버 상태 관리
캐싱
자동 백그라운드 리프레시
관련 페이지: https://tanstack.com/query/latest
Zustand
경량 상태 관리
Redux 대안
관련 페이지: https://github.com/pmndrs/zustand
Framer Motion
애니메이션 라이브러리
관련 페이지: https://www.framer.com/motion/
Storybook
컴포넌트 문서화
컴포넌트 테스트
관련 페이지: https://storybook.js.org/


백엔드
Redis
캐싱
세션 관리
관련 페이지: https://redis.io/
Docker
컨테이너화
개발/배포 환경 통일
관련 페이지: https://www.docker.com/
GraphQL
API 쿼리 언어
타입 시스템
관련 페이지: https://graphql.org/
Elasticsearch
검색 엔진
로그 분석
관련 페이지: https://www.elastic.co/
DevOps
GitHub Actions
CI/CD
자동화된 테스트
관련 페이지: https://github.com/features/actions
Sentry
에러 모니터링
성능 모니터링
관련 페이지: https://sentry.io/
Prometheus + Grafana
메트릭 수집
대시보드
관련 페이지:
https://prometheus.io/
https://grafana.com/


보안
Helmet
보안 헤더 설정
관련 페이지: https://helmetjs.github.io/
Rate Limiting
API 요청 제한
관련 페이지: https://docs.nestjs.com/security/rate-limiting
CORS
크로스 오리진 리소스 공유
관련 페이지: https://docs.nestjs.com/security/cors



3. 프로젝트 구조 개선 제안
모노레포 구조
pnpm workspaces
관련 페이지: https://pnpm.io/workspaces
API 클라이언트 자동 생성
OpenAPI/Swagger 기반
관련 페이지: https://openapi-generator.tech/
인터셉터 패턴
API 요청/응답 가로채기
에러 처리 통합
미들웨어 체인
로깅
인증
요청 검증


이러한 기술들을 추가하면 프로젝트의 확장성, 유지보수성, 성능이 더욱 향상될 것입니다. 특히 모니터링과 로깅 도구는 프로덕션 환경에서 필수적입니다. -->
