# 3D Interactive Cards - 아임웹 통합 가이드

## 📋 기능 설명

이 프로젝트는 3D 공간에서 인터랙티브하게 동작하는 카드 섹션을 구현한 것입니다.

### 주요 기능

✅ **다양한 각도 배치**: 6개의 카드가 서로 다른 각도(rotateX, rotateY, rotateZ)로 3D 공간에 배치
✅ **겹침 방지**: 카드들이 화면 전체에 분산 배치되어 서로 겹치지 않음
✅ **클릭 인터랙션**: 카드 클릭 시 중앙으로 이동하며 정면을 향하고 확대됨
✅ **콘텐츠 표시**: 활성화된 카드의 내용이 선명하게 표시되고, 다른 카드들은 흐려짐
✅ **부드러운 애니메이션**: CSS cubic-bezier를 사용한 자연스러운 전환 효과
✅ **초기화 기능**:
  - 활성화된 카드 재클릭
  - 빈 공간 클릭
  - ESC 키 입력
  - 우측 하단 "초기화" 버튼
✅ **마우스 패럴랙스**: 마우스 움직임에 따라 카드가 미묘하게 반응
✅ **반응형 디자인**: 그라디언트 배경과 현대적인 UI

## 🎨 디자인 특징

- **6가지 그라디언트 테마**: 각 카드마다 고유한 색상 조합
- **3D 원근 효과**: perspective를 활용한 깊이감
- **부드러운 그림자**: box-shadow로 입체감 강조
- **아이콘 + 제목 + 설명 구조**: 직관적인 정보 전달
- **CTA 버튼**: 각 카드마다 "자세히 보기" 버튼 포함

## 📁 파일 구조

```
JsFunc/
├── 3d-cards-interactive.html  # 메인 HTML 파일 (CSS, JS 포함)
└── 3D-CARDS-README.md         # 이 문서
```

## 🚀 사용 방법

### 1. 로컬에서 테스트

```bash
# 브라우저에서 직접 열기
open 3d-cards-interactive.html

# 또는 간단한 웹 서버 실행
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000/3d-cards-interactive.html 접속
```

### 2. 아임웹에 통합하기

#### 방법 A: HTML 코드 삽입 (추천)

1. 아임웹 관리자 페이지 접속
2. 원하는 페이지 편집 모드로 이동
3. **[코드 입력]** 위젯 추가
4. `3d-cards-interactive.html` 파일의 `<style>` ~ `</style>` 부분을 복사하여 상단에 삽입
5. `<body>` 내부의 HTML 구조를 복사하여 삽입
6. `<script>` ~ `</script>` 부분을 복사하여 하단에 삽입

#### 방법 B: 외부 파일로 호스팅

1. HTML 파일을 웹 호스팅에 업로드
2. 아임웹에서 **[iframe]** 위젯 사용
3. 업로드한 HTML 파일의 URL 입력

## 🎯 카드 커스터마이징

### 카드 내용 변경

HTML 파일에서 각 카드의 내용을 수정할 수 있습니다:

```html
<div class="card" data-card="1">
    <div class="card-content">
        <div class="card-header">
            <div class="card-icon">🚀</div>  <!-- 아이콘 변경 -->
            <h2 class="card-title">혁신</h2>  <!-- 제목 변경 -->
            <p class="card-subtitle">Innovation</p>  <!-- 부제목 변경 -->
        </div>
        <div class="card-description">
            <p>설명 내용을 여기에 입력하세요.</p>  <!-- 설명 변경 -->
        </div>
        <div class="card-footer">
            <a href="#" class="card-button">자세히 보기</a>  <!-- 버튼 텍스트 변경 -->
        </div>
    </div>
</div>
```

### 카드 위치 및 각도 조정

JavaScript 부분의 `cardPositions` 배열을 수정:

```javascript
const cardPositions = [
    { left: '15%', top: '20%', rotateX: -15, rotateY: 25, rotateZ: -10 },
    // left, top: 화면상 위치 (%)
    // rotateX, rotateY, rotateZ: 회전 각도 (도)
];
```

### 카드 색상 변경

CSS의 각 카드 그라디언트를 수정:

```css
.card:nth-child(1) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 카드 개수 조정

1. HTML에서 카드 추가/제거
2. JavaScript의 `cardPositions` 배열에 위치 정보 추가/제거
3. 필요시 CSS 그라디언트 추가

## 🔧 고급 설정

### 애니메이션 속도 조정

CSS에서 `transition` 값 변경:

```css
.card {
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* 0.8s를 원하는 시간으로 변경 (예: 1s, 0.5s) */
}
```

### 확대 비율 조정

CSS에서 `scale` 값 변경:

```css
.card.active {
    transform: ... scale(1.1) !important;
    /* 1.1을 원하는 비율로 변경 (예: 1.2, 1.0) */
}
```

### 패럴랙스 효과 강도 조정

JavaScript의 마우스 이벤트 부분:

```javascript
const moveX = (mouseX - 0.5) * 20; // 20을 조정하여 효과 강도 변경
const moveY = (mouseY - 0.5) * 20;
```

## 📱 반응형 대응

현재 버전은 데스크톱에 최적화되어 있습니다. 모바일 대응을 위해 다음을 추가할 수 있습니다:

```css
@media (max-width: 768px) {
    .card {
        width: 250px;
        height: 350px;
    }

    .title {
        font-size: 24px;
    }
}
```

## 🎬 인터랙션 플로우

1. **초기 상태**: 6개 카드가 다양한 각도로 화면에 분산 배치
2. **마우스 오버**: 마우스 움직임에 따라 카드들이 미묘하게 반응
3. **카드 클릭**:
   - 클릭한 카드가 화면 중앙으로 이동
   - 정면을 향하며 확대됨 (scale 1.1)
   - 다른 카드들은 흐려짐 (opacity 0.3, blur)
4. **재클릭 또는 ESC**: 모든 카드가 원래 위치로 복귀

## 💡 활용 예시

- **회사 소개 페이지**: 핵심 가치 또는 서비스 소개
- **포트폴리오**: 프로젝트 또는 작품 전시
- **제품 카탈로그**: 주요 제품 라인업 소개
- **팀 소개**: 팀원 프로필 카드
- **기능 소개**: 앱/서비스의 주요 기능 설명

## 🌐 브라우저 호환성

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ⚠️ IE11 이하는 지원하지 않음 (CSS transform 3D 미지원)

## 📞 문의 및 지원

추가 커스터마이징이나 문의사항이 있으시면 이슈를 등록해주세요.

---

**제작일**: 2026-01-08
**버전**: 1.0.0
