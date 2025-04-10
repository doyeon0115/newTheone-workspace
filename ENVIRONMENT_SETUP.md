# The1Seoul 환경 설정 가이드

## 필수 요구사항
- Docker
- Docker Compose
- Git

## 환경 설정 단계

1. **저장소 클론**
```bash
git clone [repository-url]
cd the1seoul
```

2. **환경 변수 설정**
```bash
cp .env.example .env
# .env 파일을 열어 필요한 환경 변수 값을 설정
```

3. **Docker 이미지 로드 (이미 저장된 이미지가 있는 경우)**
```bash
docker load -i the1seoul_images.tar
```

4. **서비스 실행**
```bash
docker-compose up -d
```

5. **서비스 상태 확인**
```bash
docker-compose ps
```

## 서비스 접속 정보
- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Database: localhost:3306

## 문제 해결
1. **이미지 빌드 실패**
```bash
docker-compose build --no-cache
```

2. **서비스 재시작**
```bash
docker-compose restart [service-name]
```

3. **로그 확인**
```bash
docker-compose logs [service-name]
```

## 데이터베이스 백업/복원
1. **백업**
```bash
docker-compose exec db mysqldump -u root -proot the1seoul > backup.sql
```

2. **복원**
```bash
docker-compose exec -T db mysql -u root -proot the1seoul < backup.sql
```

## 다른 프로젝트에서 환경 재사용하기

### 1. 환경 파일 복사
```bash
# 새로운 프로젝트 디렉토리에서
cp -r /path/to/the1seoul/docker-compose.yml .
cp -r /path/to/the1seoul/.env.example .
cp -r /path/to/the1seoul/frontend/Dockerfile ./frontend/
cp -r /path/to/the1seoul/backend/Dockerfile ./backend/
```

### 2. 포트 번호 변경 (필요한 경우)
- docker-compose.yml 파일에서 포트 매핑 수정:
```yaml
services:
  frontend:
    ports:
      - "3001:3000"  # 외부 포트를 3001로 변경
  backend:
    ports:
      - "4001:4000"  # 외부 포트를 4001로 변경
  db:
    ports:
      - "3307:3306"  # 외부 포트를 3307로 변경
```

### 3. 환경 변수 수정
- .env 파일 생성 및 수정:
```bash
cp .env.example .env
# .env 파일에서 다음 항목들을 새 프로젝트에 맞게 수정:
# - 데이터베이스 이름
# - 데이터베이스 사용자
# - 데이터베이스 비밀번호
# - JWT 시크릿
# - API URL
```

### 4. 프로젝트별 설정
1. **프론트엔드 설정**
- package.json의 의존성 확인 및 수정
- 환경 변수 파일(.env.local) 생성 및 설정
- API 엔드포인트 수정

2. **백엔드 설정**
- package.json의 의존성 확인 및 수정
- 데이터베이스 연결 설정 수정
- API 라우트 및 컨트롤러 수정

### 5. 실행 및 테스트
```bash
# 이미지 빌드
docker-compose build

# 서비스 시작
docker-compose up -d

# 서비스 상태 확인
docker-compose ps

# 로그 확인
docker-compose logs -f
```

### 6. 문제 해결
1. **포트 충돌**
- docker-compose.yml에서 포트 매핑 확인
- 실행 중인 다른 컨테이너 확인: `docker ps`

2. **데이터베이스 연결 문제**
- 환경 변수 확인
- 데이터베이스 컨테이너 상태 확인
- 로그 확인: `docker-compose logs db`

3. **의존성 문제**
- package.json 파일 확인
- node_modules 볼륨 삭제 후 재빌드:
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

### 7. 주의사항
1. **보안**
- 프로덕션 환경에서는 반드시 비밀번호와 시크릿 키를 변경
- .env 파일을 .gitignore에 추가
- 민감한 정보는 환경 변수로 관리

2. **리소스 관리**
- 메모리 사용량 모니터링
- 불필요한 컨테이너 정리: `docker system prune`

3. **데이터 백업**
- 정기적인 데이터베이스 백업 수행
- 볼륨 데이터 백업: `docker volume ls` 