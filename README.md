<div id="top"></div>

<h1 align="center">알고싶은 서울물가</h1>
<div align="center">
  <a href="https://github.com/chansoo1280/priceView">
    <img src="https://user-images.githubusercontent.com/62010067/144936941-baa1596e-5e49-4916-8c8e-113f06d679d9.png" alt="알고싶은 서울물가" width="300" height="300">
  </a>

  <p align="center">
    알고싶은 서울물가 앱
    <br />
    <a href="https://github.com/chansoo1280/priceView"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/chansoo1280/priceView">View Demo</a>
    ·
    <a href="https://github.com/chansoo1280/priceView/issues">Report Bug</a>
    ·
    <a href="https://github.com/chansoo1280/priceView/issues">Request Feature</a>
  </p>
</div>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#preview">Preview</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

<details>
<summary>Git Rules</summary>

1. branch
   - 상시 브랜치
     - master: 운영 코드
     - develop: 개발
   - 일시적인 브랜치
     - hotfix-#: 운영 코드에서 급한 수정
     - release-#: 출시 버전 준비
     - feature-#: 기능 개발
2. commit
   - Feat : 새로운 기능에 대한 커밋
   - Fix : build 빌드 관련 파일 수정에 대한 커밋
   - Build : 빌드 관련 파일 수정에 대한 커밋
   - Chore : 그 외 자잘한 수정에 대한 커밋(rlxk qusrud)
   - Ci : CI 관련 설정 수정에 대한 커밋
   - Docs : 문서 수정에 대한 커밋
   - Style : 코드 스타일 혹은 포맷 등에 관한 커밋
   - Refactor : 코드 리팩토링에 대한 커밋
   - Test : 테스트 코드 수정에 대한 커밋

</details>

---

## About The Project

> 서울특별시 물가조회 앱

### Built With

**React Native**와 **Next.js**(typescript)로 이루어진 웹앱입니다!

- [React Native](https://reactnative.dev/)
- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)

서버는 aws의 EC2에 docker nginx를 사용하여 운영중입니다.

- [AWS](https://aws.amazon.com/ko/?nc2=h_lg)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/ko/)

### Installation

#### 웹 서버 실행하기

1. 프로젝트 경로 이동
   ```sh
   cd ${project root}/frontend
   ```
2. npm packages 설치
   ```sh
   npm i
   ```
3. 개발서버/운영서버 실행
   ```sh
   npm run dev
   # or
   npm run build && npm run start
   ```
4. [localhost:3000](http://localhost:3000/) or [localhost:10010](http://localhost:10010/)로 접속

#### 앱 실행하기

1. 프로젝트 경로 이동
   ```sh
   cd ${project root}/app
   ```
2. npm packages 설치
   ```sh
   npm i
   #if ios
   cd ios
   pod install
   ```
3. 개발서버 실행
   ```sh
   npm run android
   #if ios
   npm run ios
   ```

#### 앱 빌드하기

1. 프로젝트 경로 이동
   ```sh
   cd ${project root}/app
   ```
2. npm packages 설치
   ```sh
   npm i
   #if ios
   cd ios
   pod install
   ```
3. 빌드
   ```sh
   cd android
   ./gradlew assembleRelease
   #/app/android/app/build/outputs/apk 여기 경로에 .apk 파일이 생성됩니다.
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [ ] Add Ios 지원
- [ ] Add back to top link
- [ ] Add Theme
  - [ ] default
  - [ ] dark
  - [ ] color
- [ ] Multi-language Support
  - [x] en
  - [ ] jp

<p align="right">(<a href="#top">back to top</a>)</p>

## Preview

<p align="right">(<a href="#top">back to top</a>)</p>

## License

프로젝트의 무단 복사/배포를 금지합니다.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

chansoo kim - chansoo1280@naver.com
Project Link: [https://github.com/chansoo1280/priceView](https://github.com/chansoo1280/priceView)

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- [XEIcon](https://xpressengine.github.io/XEIcon/)

<p align="right">(<a href="#top">back to top</a>)</p>
