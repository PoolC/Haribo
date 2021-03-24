# Haribo - PoolC 홈페이지 프론트엔드 리뉴얼 2021 [![travis build status](https://travis-ci.com/github/PoolC/Haribo.png)](https://travis-ci.com/github/PoolC/Haribo)

URL : https://poolc.org/

## Prerequisites
 - yarn 1.22.4
 - Docker

## 개발
### 설정
필요한 라이브러리 설치
```
yarn install
```
환경 변수 설정
```
cp .env.example .env
vi .env
```

### 실행
```
yarn start
```

### 배포
```
# Build react
yarn build

# Build docker image
docker build -t poolc/haribo .

# Run docker container
docker run -p 8080:8080 poolc/haribo
```
