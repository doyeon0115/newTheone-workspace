theone-project/
├── frontend/ # Next.js 프론트엔드 (App Router)
├── backend/ # NestJS 백엔드
└── adm/ # 관리자 페이지 (Next.js)

## 프론트엔드 구조 (Next.js - App Router)

frontend/
├── public/ # 정적 파일
│ ├── images/ # 이미지 파일
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── layout.jsx # 루트 레이아웃
│ │ ├── page.jsx # 홈페이지
│ │ ├── globals.css # 전역 스타일
│ │ ├── (auth)/ # 인증 관련 그룹
│ │ │ ├── login/
│ │ │ │ ├── page.jsx
│ │ │ │ └── login.module.css
│ │ │ └── register/
│ │ │ ├── page.jsx
│ │ │ └── register.module.css
│ │ ├── theone/ # 더원서울안과 메뉴
│ │ │ ├── layout.jsx # 해당 섹션의 공통 레이아웃
│ │ │ ├── company/
│ │ │ │ ├── page.jsx
│ │ │ │ └── company.module.css # 디렉토리 기준 css모듈 생성성
│ │ │ ├── medical-team/
│ │ │ │ ├── page.jsx
│ │ │ │ └── medical-team.module.css
│ │ │ ├── product/
│ │ │ │ ├── page.jsx
│ │ │ │ └── product.module.css
│ │ │ └── location/
│ │ │ ├── page.jsx
│ │ │ └── location.module.css
│ │ ├── retinal/ # 망막 클리닉
│ │ │ ├── layout.jsx
│ │ │ ├── page.jsx
│ │ │ ├── retinal.module.css
│ │ │ ├── macular-degeneration/
│ │ │ │ ├── page.jsx
│ │ │ │ └── macular-degeneration.module.css
│ │ │ ├── diabetic-retinopathy/
│ │ │ │ ├── page.jsx
│ │ │ │ └── diabetic-retinopathy.module.css
│ │ │ ├── uveitis/
│ │ │ │ ├── page.jsx
│ │ │ │ └── uveitis.module.css
│ │ │ ├── retinal-vascular-disease/
│ │ │ │ ├── page.jsx
│ │ │ │ └── retinal-vascular-disease.module.css
│ │ │ ├── retinal-detachment/
│ │ │ │ ├── page.jsx
│ │ │ │ └── retinal-detachment.module.css
│ │ │ └── myiodesopsia/
│ │ │ ├── page.jsx
│ │ │ └── myiodesopsia.module.css
│ │ ├── glaucoma/ # 녹내장 클리닉
│ │ │ ├── layout.jsx
│ │ │ ├── page.jsx
│ │ │ ├── glaucoma.module.css
│ │ │ └── clinic/
│ │ │ ├── page.jsx
│ │ │ └── glaucoma-clinic.module.css
│ │ ├── cataract/ # 백내장 클리닉
│ │ │ ├── layout.jsx
│ │ │ ├── clinic/
│ │ │ │ ├── page.jsx
│ │ │ │ └── cataract-clinic.module.css
│ │ │ ├── dislocation/
│ │ │ │ ├── page.jsx
│ │ │ │ └── dislocation.module.css
│ │ │ └── dry-eye/
│ │ │ ├── page.jsx
│ │ │ └── dry-eye.module.css
│ │ ├── lasek/ # 시력교정술
│ │ │ ├── layout.jsx
│ │ │ ├── today/
│ │ │ │ ├── page.jsx
│ │ │ │ └── today.module.css
│ │ │ └── lens-implantation/
│ │ │ ├── page.jsx
│ │ │ └── lens-implantation.module.css
│ │ ├── myopia/ # 근시 클리닉
│ │ │ ├── layout.jsx
│ │ │ ├── dream/
│ │ │ │ ├── page.jsx
│ │ │ │ └── dream.module.css
│ │ │ └── mysite/
│ │ │ ├── page.jsx
│ │ │ └── mysite.module.css
│ │ ├── examination/ # 안종합검진
│ │ │ ├── layout.jsx
│ │ │ ├── page.jsx
│ │ │ └── examination.module.css
│ │ ├── community/ # 고객지원
│ │ │ ├── layout.jsx
│ │ │ ├── news/
│ │ │ │ ├── page.jsx
│ │ │ │ └── news.module.css
│ │ │ ├── review/
│ │ │ │ ├── page.jsx
│ │ │ │ └── review.module.css
│ │ │ ├── inquiry/
│ │ │ │ ├── page.jsx
│ │ │ │ └── inquiry.module.css
│ │ │ └── notice/
│ │ │ ├── page.jsx
│ │ │ └── notice.module.css
│ │ ├── academic/
│ │ │ ├── page.jsx
│ │ │ └── academic.module.css
│ │ └── api/ # API 라우트
│ │ ├── auth/ # 인증 API
│ │ │ └── [...nextauth]/
│ │ │ └── route.ts
│ │ └── other-api-routes/
│ ├── components/ # 컴포넌트
│ │ ├── layout/ # 레이아웃 컴포넌트
│ │ │ ├── header.jsx
│ │ │ ├── footer.jsx
│ ├── styles/ # 스타일 파일
│ │ ├── globals.css # 전역 스타일
├── next.config.js # Next.js 설정
└── package.json # 의존성 및 스크립트

## 백엔드 구조 (NestJS)

## 관리자 페이지 구조(Next.js - App Router)

## 폴더/파일명 역할 및 설명

components/ 재사용 가능한 UI 컴포넌트 모음
hooks/ 커스텀 훅 (ex: useAuth.ts, useFetch.ts)
lib/ or utils/ 유틸 함수나 외부 모듈 래퍼 등
services/ API 호출, 비즈니스 로직 처리
types/ 타입스크립트 타입 선언
constants/ 상수값 정의 (ex: ROUTES.ts, COLORS.ts)
assets/ 이미지, 폰트 등 정적 파일
styles/ CSS, Tailwind 설정, 전역 스타일
store/ 전역 상태 관리 (Redux, Zustand 등)
middleware.ts Next.js에서 미들웨어 처리 (로그인 체크 등)
layout.tsx 공통 레이아웃 정의 (App Router에서 사용)
globals.css 전역 스타일 파일
