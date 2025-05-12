## MCard 실습 및 정리

- 카드 정보와 신청하기 방식을 통한 프로젝트 실습

## 2025. 4/ 17일 작업

- 공통 컴포넌트 구현 - colors, Text, Button
- 공통 컴포넌트 구현 - Input, TextFieldLabel, Alert, Flex
- 데이터 준비, 설계
- Firebase 설정
- 배너 및 카드 리스트 firebase 추가 설계

## 2025. 4/ 28일 작업

- 카드 리스트 컴포넌트 구현

* react-query 설치
* QueryClientProvider -> index.tsx 설정
* components/home/AdBanners.tsx 작성
* swiper 설정
* 카드 데이터 매칭
* react-query page limit 활용
* react-infinite-scroll-component 활용 (스트롤시 데이터 로드)

## 2025. 4/ 29일 작업

- 카드 상세 페이지 구현

1. 설계

- Badge 컴포넌트 구현
- page/Card 상세페이지 생성
- FixedBottomButton 구현

2. 애니메이션

- FixedBottomButton 애니메이션
- framer-motion 애니메이션 사용
- ScrollToTop 컴포넌트 생성

3. 회원가입 구현 (설계, 폼 바인딩)

- Navbar 구현
- form 구현
- Signin page
- Signup page

4. 회원가입 구현

- 폼 value
- 폼 validator 설정 (유효성 검사)
- firebase auth 설정 및 데이터 연동
- firebase db 저장

## 2025. 4/ 30일 작업

1. 로그인 구현 (설계, 구현)

- recoil 설치 (전역 상태관리)
- signin Form 컴포넌트 구현
- 이벤트 처리 및 유효성 검사 추가
- submit 연결 테스트
- components auth 추가
- AuthGuard 인증 처리 작업
- recoil user atom 생성 후 저장
- useUser hook 생성
- 로그아웃 설계 구현

2. 카드 신청 구현 (설계)

- PrivateRoute 유저의정보를 받아서 어떤 페이지로 이동할지 지정
- router apply 상세 페이지 연결
- 약관동의, 카드 정보, 기본정보 컴포넌트 생성
- ApplyPage step 별 매칭
- 약관 동의 (Terms) 구현

## 2025. 5/ 12일 작업

1. 카드신청 구현

- 기본정보 구현
- 카드정보 구현
- 약관동의, 기본정보, 카드정보 그룹화
- 카드 신청하기 기능 구현
- 카드 발급 완료, 실패 처리
