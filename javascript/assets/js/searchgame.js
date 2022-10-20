//배열, 객체
const cssProperty = [
    { num: 1, category: "etc", name: "accent-color", desc: " 다른 페이지로의 이동을 설정합니다."},
    { num: 2, category: "etc", name: "align-content", desc: " 콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다."},
    { num: 3, category: "etc", name: "align-items", desc: " 콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다."},
    { num: 4, category: "etc", name: "align-self", desc: " 개별적 콘텐츠 아이템의 정렬 상태를 설정합니다."},
    { num: 5, category: "etc", name: "all", desc: " 요소의 속성을 초기화 또는 상속을 설정합니다."},
    { num: 6, category: "animation", name: "animation", desc: "애니메이션과 관련된 속성을 일괄적으로 설정합니다."},
    { num: 7, category: "animation", name: "animation-delay", desc: " 애니메이션 지연 시간을 설정합니다."},
    { num: 8, category: "animation", name: "animation-direction", desc: " 애니메이션 움직임 방향을 설정합니다."},
    { num: 9, category: "animation", name: "animation-delay", desc: " 애니메이션 움직임 시간을 설정합니다."},
    { num: 10, category: "animation", name: "animation-fill-mode", desc: " 애니메이션이 끝난 후의 상태 설정합니다."},
    { num: 11, category: "animation", name: "animation-iteration-count", desc: " 애니메이션의 반복 횟수를 설정합니다."},
    { num: 12, category: "animation", name: "animation-name", desc: " 애니메이션 keyframe 이름을 설정합니다."},
    { num: 13, category: "animation", name: "animation-play-state", desc: " 애니메이션 진행상태 설정합니다."},
    { num: 14, category: "animation", name: "animation-timeline", desc: " 요소에 적용할 스크롤 애니메이션을 설명하는 하나 이상의 @scroll-timeline at-rules의 이름을 지정합니다."},
    { num: 15, category: "animation", name: "animation-timing-function", desc: " 애니메이션의 움직임 속도를 설정합니다."},
    { num: 16, category: "etc", name: "appearance", desc: " 운영 체제의 테마를 기반으로 하는 UI 컨트롤의 기본 모양을 제어하는 데 사용합니다."},
    { num: 17, category: "etc", name: "aspect-ratio", desc: " 종횡비를 의미하며 요소의 크기를 비율대로 조정할 수 있도록 합니다."},
    { num: 18, category: "etc", name: "backdrop-filter", desc: " 요소 뒤 영역에 흐림이나 색상 시프트 등 그래픽 효과를 적용할 수 있는 속성입니다."},
    { num: 19, category: "etc", name: "backface-visibility", desc: " 요소의 뒷쪽에서 앞면이 보이게 할지 여부를 정하는 속성입니다."},
    { num: 20, category: "background", name: "background", desc: " 백그라운드 속성을 일괄적으로 설정합니다."},
    { num: 21, category: "background", name: "background-attachment", desc: " 배경 이미지의 고정 여부 설정합니다."},
    { num: 22, category: "background", name: "background-blend-mode", desc: " 배경 혼합 시의 그래픽 효과를 설정합니다."},
    { num: 23, category: "background", name: "background-clip", desc: " 백그라운드 이미지의 위치 기준점 설정합니다."},
    { num: 24, category: "background", name: "background-color", desc: " 백그라운드의 색상 설정합니다."},
    { num: 25, category: "background", name: "background-image", desc: " 백그라운드의 이미지 속성을 설정합니다."},
    { num: 26, category: "background", name: "background-origin", desc: " 백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다."},
    { num: 27, category: "background", name: "background-position", desc: " 백그라운드 이미지의 위치 영역을 설정합니다."},
    { num: 28, category: "background", name: "background-position-x", desc: " 백그라운드 이미지의 X축 위치 영역을 설정합니다."},
    { num: 29, category: "background", name: "background-position-y", desc: " 백그라운드 이미지의 Y축 위치 영역을 설정합니다."},
    { num: 30, category: "background", name: "background-repeat", desc: " 백그라운드 이미지의 반복 여부를 설정합니다."},
    { num: 31, category: "background", name: "background-size", desc: " 백그라운드 이미지 사이즈를 설정합니다."},
    { num: 32, category: "etc", name: "block-size", desc: " 쓰기 모드에 따라 요소의 블록의 수평 또는 수직 크기를 정의합니다. "},
    { num: 33, category: "border", name: "border", desc: " 테두리 속성을 일괄적으로 설정합니다."},
    { num: 34, category: "border", name: "border-block", desc: " 각각의 논리 블록 border 속성 값을 설정합니다."},
    { num: 35, category: "border", name: "border-block-color", desc: " 보더 블록의 색상 설정합니다."},
    { num: 36, category: "border", name: "border-block-end", desc: " 보더 블록 끝 일괄 설정합니다."},
    { num: 37, category: "border", name: "border-block-end-color", desc: " 보더 블록 끝 색상 설정합니다."},
    { num: 38, category: "border", name: "border-block-end-style", desc: " 보더 블록 끝 스타일 설정합니다."},
    { num: 39, category: "border", name: "border-block-end-width", desc: " 보더 블록 끝 두께 설정합니다."},
    { num: 40, category: "border", name: "border-block-start", desc: " 보더 블록 시작 일괄 설정합니다."},
    { num: 41, category: "border", name: "border-block-start-color", desc: " 보더 블록 시작 색상 설정합니다."},
    { num: 42, category: "border", name: "border-block-start-style", desc: " 보더 블록 시작 스타일 설정합니다."},
    { num: 43, category: "border", name: "border-block-start-width", desc: " 보더 블록 시작 두께 설정합니다."},
    { num: 44, category: "border", name: "border-block-style", desc: " 보더 블록 스타일 설정합니다."},
    { num: 45, category: "border", name: "border-block-width", desc: " 보더 블록 두께 설정합니다."},
    { num: 46, category: "border", name: "border-bottom", desc: " 테두리 하단 속성을 일괄적으로 설정합니다."},
    { num: 47, category: "border", name: "border-bottom-color", desc: " 테두리 하단 색 속성을 설정합니다."},
    { num: 48, category: "border", name: "border-bottom-left-radius", desc: " 테두리 하단 좌측 모서리 굴곡 설정합니다."},
    { num: 49, category: "border", name: "border-bottom-right-radius", desc: " 테두리 하단 우측 모서리 굴곡 설정합니다."},
    { num: 50, category: "border", name: "border-bottom-style", desc: " 테두리 하단 스타일 속성 설정합니다."},
    { num: 51, category: "border", name: "border-bottom-width", desc: " 테두리 하단 두께 속성 설정합니다."},
    { num: 52, category: "border", name: "border-collapse", desc: " 테두리가 분리 또는 상쇄될 지를 결정합니다."},
    { num: 53, category: "border", name: "border-color", desc: " 테두리 색상을 설정합니다."},
    { num: 54, category: "border", name: "border-end-end-radius", desc: " 보더 끝의 끝부분을 둥글게 설정합니다."},
    { num: 55, category: "border", name: "border-end-start-radius", desc: " 보더 끝의 시작 부분을 둥글게 설정합니다."},
    { num: 56, category: "border", name: "border-image", desc: " 요소 주위에 이미지를 넣으며 일반 테두리를 대체합니다."},
    { num: 57, category: "border", name: "border-image-outset", desc: " 요소의 테두리 상자와 테두리 이미지의 거리를 설정합니다."},
    { num: 58, category: "border", name: "border-image-repeat", desc: " 원본 이미지의 모서리 영역을 요소의 테두리 이미지 크기에 맞춰 조절할 때 사용할 방법을 지정합니다."},
    { num: 59, category: "border", name: "border-image-slice", desc: " border-image-source로 설정한 이미지를 여러 개의 영역으로 나눕니다."},
    { num: 60, category: "border", name: "border-image-source", desc: " 요소의 테두리 이미지로 사용할 원본 이미지를 지정합니다."},
    { num: 61, category: "border", name: "border-image-width", desc: " 요소 테두리 이미지의 너비를 설정합니다."},
    { num: 62, category: "border", name: "border-inline", desc: " 스타일 시트의 한 곳에서 개별 논리 인라인 경계 속성 값을 설정하기 위한 속성입니다."},
    { num: 63, category: "border", name: "border-inline-color", desc: " 보더 인라인 색상 설정합니다."},
    { num: 64, category: "border", name: "border-inline-end", desc: " 보더 인라인 끝부분 설정합니다."},
    { num: 65, category: "border", name: "border-inline-end-color", desc: " 보더 인라인 끝부분 색상 설정합니다."},
    { num: 66, category: "border", name: "border-inline-end-style", desc: " 보더 인라인 끝부분 스타일 설정합니다."},
    { num: 67, category: "border", name: "border-inline-end-width", desc: " 보더 인라인 끝부분 두께 설정합니다."},
    { num: 68, category: "border", name: "border-inline-start", desc: " 보더 인라인 시작 부분 설정합니다."},
    { num: 69, category: "border", name: "border-inline-start-color", desc: " 보더 인라인 시작 부분 색상 설정합니다."},
    { num: 70, category: "border", name: "border-inline-start-style", desc: " 보더 인라인 시작 부분 스타일 설정합니다."},
    { num: 71, category: "border", name: "border-inline-start-width", desc: " 보더 인라인 시작 부분 두께 설정합니다."},
    { num: 72, category: "border", name: "border-inline-style", desc: " 보더 인라인 스타일 설정합니다."},
    { num: 73, category: "border", name: "border-inline-width", desc: " 보더 인라인 두께 설정합니다."},
    { num: 74, category: "border", name: "border-left", desc: " 테두리 좌측 속성 설정합니다."},
    { num: 75, category: "border", name: "border-left-color", desc: " 테두리 좌측의 색상을 설정합니다."},
    { num: 76, category: "border", name: "border-left-style", desc: " 테두리 좌측의 스타일을 설정합니다."},
    { num: 77, category: "border", name: "border-left-width", desc: " 테두리 좌측의 두께를 설정합니다."},
    { num: 78, category: "border", name: "border-radius", desc: " 테두리 모서리를 둥글게 설정합니다."},
    { num: 79, category: "border", name: "border-right", desc: " 테두리 우측 속성을 설정합니다."},
    { num: 80, category: "border", name: "border-right-color", desc: " 테두리 우측 색상을 설정합니다."},
    { num: 81, category: "border", name: "border-right-style", desc: " 테두리 우측의 스타일을 설정합니다."},
    { num: 82, category: "border", name: "border-right-width", desc: " 테두리 우측의 두께를 설정합니다."},
    { num: 83, category: "border", name: "border-spacing", desc: " 인접한 표 칸의 테두리 간격을 지정합니다."},
    { num: 84, category: "border", name: "border-start-end-radius", desc: " 보더 시작의 끝부분 둥글게 설정합니다."},
    { num: 85, category: "border", name: "border-start-start-radius", desc: " 보더 시작의 시작 부분 둥글게 설정합니다."},
    { num: 86, category: "border", name: "border-style", desc: " 테두리의 스타일을 일괄적으로 설정합니다."},
    { num: 87, category: "border", name: "border-top", desc: " 테두리 상단의 속성을 일괄적으로 설정합니다."},
    { num: 88, category: "border", name: "border-top-color", desc: " 테두리 상단의 색상을 설정합니다."},
    { num: 89, category: "border", name: "border-top-left-radius", desc: " 테두리 상단 좌측을 둥글게 설정합니다."},
    { num: 90, category: "border", name: "border-top-right-radius", desc: " 테두리 상단 우측을 둥글게 설정합니다."},
    { num: 91, category: "border", name: "border-top-style", desc: " 테두리 상단의 스타일을 설정합니다."},
    { num: 92, category: "border", name: "border-top-width", desc: " 테두리 상단의 두께를 설정합니다."},
    { num: 93, category: "border", name: "border-width", desc: " 테두리 두께 속성을 설정합니다."},
    { num: 94, category: "etc", name: "bottom", desc: " 배치된 요소의 하단 위치를 설정합니다."},
    { num: 95, category: "etc", name: "box-decoration-break", desc: " 컬럼 및 줄바꿈시 테두리와 패딩의 방식을 설정합니다."},
    { num: 96, category: "etc", name: "box-shadow", desc: " 박스에 그림자 효과를 추가하고 일괄적으로 설정할 수 있습니다."},
    { num: 97, category: "etc", name: "box-sizing", desc: " 박스의 크기를 어떤 것을 기준으로 계산할 것인지를 정하는 속성입니다."},
    { num: 98, category: "etc", name: "break-after", desc: " 생성된 상자 이후에 페이지, 열 또는 지역 구분 동작을 설정합니다."},
    { num: 99, category: "etc", name: "break-before", desc: " 페이지, 열 또는 영역 구분은 생성된 상자 전에 어떻게 동작해야 하는지를 설정합니다."},
    { num: 100, category: "etc", name: "break-inside", desc: " 페이지, 열 또는 영역 구분 기능이 생성된 상자 내에서 어떻게 동작해야 하는지 설정합니다."},
    { num: 101, category: "etc", name: "caption-side", desc: " 테이블의 캡션 위치를 정하는 속성입니다."},
    { num: 102, category: "etc", name: "caret-color", desc: "  input(입력 칸)의 커서 색을 정하는 속성입니다."},
    { num: 103, category: "etc", name: "clear", desc: " 요소가 선행 floating 요소 다음일 수 있는지 또는 그 아래로 내려가 해제(clear)되어야 하는 지를 지정합니다."},
    { num: 104, category: "clip", name: "clip", desc: " 어떤 요소에 대해 보여주고 싶은 영역을 지정하는(깎는) 속성입니다."},
    { num: 105, category: "clip", name: "clip-path", desc: " 요소의 클리핑 범위를 지정합니다."},
    { num: 106, category: "etc", name: "color", desc: " 요소의 글씨 색상을 설정합니다."},
    { num: 107, category: "etc", name: "color-scheme", desc: " 요소가 렌더링하기에 편안한 색 구성표를 나타낼 수 있도록 합니다."},
    { num: 108, category: "etc", name: "column-count", desc: " 요소의 내용을 지정된 수의 열로 나눕니다."},
    { num: 109, category: "etc", name: "column-fill", desc: " column-fill요소의 내용이 열로 분할될 때 어떻게 균형을 이루는지 제어합니다."},
    { num: 110, category: "etc", name: "column-gap (grid-column-gap)", desc: "요소의 열 사이의 간격(거터)의 크기를 설정합니다."},
    { num: 111, category: "etc", name: "column-rule", desc: " 다중 열 레이아웃에서 열 사이에 그려진 선의 너비, 스타일 및 색상을 설정합니다."},
    { num: 112, category: "etc", name: "column-rule-color", desc: " 다중 열 레이아웃에서 열 사이에 그려진 선의 색상을 설정합니다."},
    { num: 113, category: "etc", name: "column-rule-style", desc: " 다중 열 레이아웃에서 열 사이에 그려진 선의 스타일을 설정합니다."},
    { num: 114, category: "etc", name: "column-rule-width", desc: " 다중 열 레이아웃에서 열 사이에 그려진 선의 너비를 설정합니다."},
    { num: 115, category: "etc", name: "column-span", desc: " 요소 값이 all로 설정될 때 요소가 모든 열에 걸쳐지는 것을 가능하게 합니다."},
    { num: 116, category: "etc", name: "column-width", desc: " 열의 너비를 설정합니다."},
    { num: 117, category: "etc", name: "columns", desc: " 열의 개수와 열의 너비를 설정합니다."},
    { num: 118, category: "etc", name: "contain", desc: " 작성자가 가능한 한 문서 트리의 나머지 부분과 독립적이라는 것을 나타낼 수 있게 합니다."},
    { num: 119, category: "etc", name: "content", desc: " 생성한 값으로 요소를 대체하며 content 속성으로 추가한 요소를 익명 대체 요소라고 부릅니다."},
    { num: 120, category: "etc", name: "content-visibility", desc: " 요소가 콘텐츠를 렌더링하는지 여부를 제어합니다."},
    { num: 121, category: "etc", name: "counter-increment", desc: " 콘텐츠의 순서 상태를 정의합니다."},
    { num: 122, category: "etc", name: "counter-reset", desc: " 콘텐츠의 숫자를 초기화합니다."},
    { num: 123, category: "etc", name: "counter-set", desc: " CSS 카운터(콘텐츠 모양 조정)를 주어진 값으로 설정합니다. "},
    { num: 124, category: "etc", name: "cursor", desc: " 마우스 포인터가 요소 위에 있을 때 표시할 마우스 커서를 설정합니다."},
    { num: 125, category: "etc", name: "direction", desc: " 텍스트, 테이블 열 및 가로 오버플로의 방향을 설정합니다."},
    { num: 126, category: "etc", name: "display", desc: " 블록 또는 인라인 요소로 처리되는지 여부와 그 자식에 사용되는 레이아웃을 설정합니다."},
    { num: 127, category: "etc", name: "empty-cells", desc: " 테이블의 빈요소의 속성을 설정합니다."},
    { num: 128, category: "etc", name: "filter", desc: " 이미지의 비쥬얼 효과를 정의합니다."},
    { num: 129, category: "flex", name: "flex", desc: " 플렉스 항목이 플렉스 컨테이너에서 사용 가능한 공간에 맞게 확장되거나 축소되는 방식을 설정합니다."},
    { num: 130, category: "flex", name: "flex-basis", desc: " 플렉스 항목의 초기 기본 크기를 설정합니다."},
    { num: 131, category: "flex", name: "flex-direction", desc: " 주 축과 방향을 정의하는 플렉스 컨테이너에 플렉스 항목을 배치하는 방법을 설정합니다."},
    { num: 132, category: "flex", name: "flex-flow", desc: " 요소의 정렬 방향과 줄 속성을 설정합니다."},
    { num: 133, category: "flex", name: "flex-grow", desc: " 요소의 크기를 숫자를 통해 늘려줍니다."},
    { num: 134, category: "flex", name: "flex-shrink", desc: " 요소의 크기를 숫자를 통해 줄여줍니다."},
    { num: 135, category: "flex", name: "flex-wrap", desc: " 플렉스 항목을 한 줄로 강제 적용할지 아니면 여러 줄로 줄바꿈할 수 있는지 설정합니다."},
    { num: 136, category: "etc", name: "float", desc: " 블록요소의 정렬 상태를 설정합니다."},
    { num: 137, category: "font", name: "font", desc: " font 폰트 스타일, 폰트 변형, 폰트 두께, 폰트 사이즈, 폰트 간격, 폰트 종류를 설정합니다."},
    { num: 138, category: "font", name: "font-family", desc: " 글꼴을 설정합니다."},
    { num: 139, category: "font", name: "font-feature-settings", desc: " 오픈타입 폰트의 다양한 오픈타입 피처를 설정합니다."},
    { num: 140, category: "font", name: "font-kerning", desc: " 글꼴에 저장된 커닝 정보의 사용을 설정합니다."},
    { num: 141, category: "font", name: "font-language-override", desc: " 속성은 글꼴에서 언어별 상형문자의 사용을 제어합니다."},
    { num: 142, category: "font", name: "font-optical-sizing", desc: " 텍스트 렌더링이 다른 크기로 보기에 최적화되었는지 여부를 설정합니다."},
    { num: 143, category: "font", name: "font-size", desc: " 글꼴의 크기를 설정합니다."},
    { num: 144, category: "font", name: "font-size-adjust", desc: " 현재 글꼴 크기(대문자 크기를 정의함)를 기준으로 소문자 크기를 설정합니다."},
    { num: 145, category: "font", name: "font-stretch", desc: "font-stretch 속성은 글꼴에서 일반, 축소 또는 확장된 면을 선택합니다."},
    { num: 146, category: "font", name: "font-style", desc: " 글꼴의 스타일을 설정합니다."},
    { num: 147, category: "font", name: "font-synthesis", desc: " 브라우저가 굵은 글꼴과 이탤릭 글꼴을 합성하는 것을 허용할지 설정합니다."},
    { num: 148, category: "font", name: "font-variant", desc: " 글꼴을 변형을 정의합니다."},
    { num: 149, category: "font", name: "font-variant-alternates", desc: "  대체 상형문자의 사용을 제어합니다."},
    { num: 150, category: "font", name: "font-variant-caps", desc: " 대문자에 대한 대체 상형문자의 사용을 제어합니다."},
    { num: 151, category: "font", name: "font-variant-east-asian", desc: " 일본어와 중국어와 같은 동아시아 스크립트의 대체 상형문자 사용을 제어합니다."},
    { num: 152, category: "font", name: "font-variant-ligatures", desc: " 어떤 문맥 형태가 적용되는 요소의 텍스트 콘텐츠에 사용되는지를 제어합니다."},
    { num: 153, category: "font", name: "font-variant-numeric", desc: " 숫자, 분수 및 순서 마커에 대한 대체 상형문자의 사용을 제어합니다."},
    { num: 154, category: "font", name: "font-variant-position", desc: " 상위 문자 또는 첨자로 배치된 대체 더 작은 상형문자의 사용을 제어합니다."},
    { num: 155, category: "font", name: "font-variation-settings", desc: " 변경할 특성에 대한 네 개의 문자 축 이름을 값과 함께 지정함으로써 가변 글꼴 특성에 대한 낮은 수준의 제어를 제공합니다."},
    { num: 156, category: "font", name: "font-weight", desc: " 글꼴의 두께(또는 굵기)를 설정합니다."},
    { num: 157, category: "etc", name: "forced-color-adjust", desc: " 작성자가 강제 색 모드에서 특정 요소를 선택할 수 있게 합니다. "},
    { num: 158, category: "etc", name: "gap (grid-gap)", desc: " 행과 열 사이의 간격(거터)을 설정합니다."},
    { num: 159, category: "grid", name: "grid", desc: " 2차원(행과 열)의 레이아웃 시스템을 제공합니다."},
    { num: 160, category: "grid", name: "grid-area", desc: " Grid 라인으로 둘러싸인 사각형 영역으로, 그리드 셀의 집합입니다."},
    { num: 161, category: "grid", name: "grid-auto-columns", desc: " 암시적으로 생성된 그리드 열 트랙 또는 트랙 패턴의 크기를 지정합니다."},
    { num: 162, category: "grid", name: "grid-auto-flow", desc: " 자동 배치 알고리즘이 어떻게 작동하는지를 제어하며, 자동 배치 항목이 그리드로 어떻게 흐르는지 정확히 지정합니다."},
    { num: 163, category: "grid", name: "grid-auto-rows", desc: " 암시적으로 생성된 그리드 행 트랙 또는 트랙 패턴의 크기를 지정합니다."},
    { num: 164, category: "grid", name: "grid-column", desc: " 그리드 배치에 자동으로 그리드 열 내의 그리드 항목의 크기와 위치를 지정함으로써 그리드 영역의 인라인 시작과 인라인 끝을 지정합니다."},
    { num: 165, category: "grid", name: "grid-column-end", desc: " 그리드 배치에 자동으로 그리드 열 내에서 그리드 항목의 끝 위치를 지정함으로써 그리드 영역의 블록 끝을 지정합니다."},
    { num: 166, category: "grid", name: "grid-column-start", desc: " 그리드 배치에 선, 스팬 또는 아무것도(자동)하지 않음으로써 그리드 열 내에서 그리드 항목의 시작 위치를 지정합니다. "},
    { num: 167, category: "grid", name: "grid-row", desc: " 그리드 배치에 자동으로 그리드 행 내에서 그리드 항목의 크기와 위치를 지정함으로써 그리드 영역의 인라인 시작과 인라인 끝을 지정합니다."},
    { num: 168, category: "grid", name: "grid-row-end", desc: " 그리드 배치에 자동으로 그리드 행 내에서 그리드 항목의 끝 위치를 지정함으로써 그리드 영역의 인라인 끝을 지정합니다."},
    { num: 169, category: "grid", name: "grid-row-start", desc: " 그리드 배치에 자동으로 그리드 행 내에서 그리드 항목의 시작 위치를 지정함으로써 그리드 영역의 인라인 시작을 지정합니다."},
    { num: 170, category: "grid", name: "grid-template", desc: "grid-template-rows, grid-template-columns, grid-template-areas를 합친 것입니다."},
    { num: 171, category: "grid", name: "grid-template-areas", desc: " 영역을 지정하고 격자에 셀을 설정하고 이름을 할당합니다."},
    { num: 172, category: "grid", name: "grid-template-columns", desc: " 컨테이너에 grid 트랙의 크기들을 지정해주는 속성으로 열의 배치를 의미합니다."},
    { num: 173, category: "grid", name: "grid-template-rows", desc: " 컨테이너에 grid 트랙의 크기들을 지정해주는 속성으로 행의 배치를 의미합니다."},
    { num: 174, category: "etc", name: "hanging-punctuation", desc: " 글씨의 시작 및 끝의 위치 정의합니다."},
    { num: 175, category: "etc", name: "height", desc: " 세로값을 설정합니다."},
    { num: 176, category: "etc", name: "hyphenate-character", desc: " 하이픈이 끊기기 전에 줄의 끝에 사용되는 문자(또는 문자열)를 설정합니다."},
    { num: 177, category: "etc", name: "hyphens", desc: " 여러 줄에 걸치는 텍스트에서 단어에 붙임표를 추가하는 방식을 설정합니다. "},
    { num: 178, category: "image", name: "image-orientation", desc: " 이미지의 방향에 대한 레이아웃 독립적인 수정을 지정합니다."},
    { num: 179, category: "image", name: "image-rendering", desc: " 브라우저의 이미지 스케일링 방식에 대한 힌트를 제공합니다."},
    { num: 180, category: "image", name: "image-resolution", desc: " 요소에서 또는 요소에서 사용되는 모든 래스터 이미지의 고유한 해상도를 지정합니다."},
    { num: 181, category: "text", name: "ime-mode", desc: " 텍스트 필드에 대한 입력 방법 편집기(IME)의 상태를 제어합니다."},
    { num: 182, category: "etc", name: "initial-letter", desc: " 드롭, 상승 및 침몰된 이니셜 문자에 대한 스타일을 설정합니다."},
    { num: 183, category: "etc", name: "initial-letter-align", desc: " 문단 내에서 이니셜 글자의 정렬을 지정합니다."},
    { num: 184, category: "etc", name: "inline-size", desc: " inline-size 속성은쓰기 모드에 따라 요소 블록의 수평 또는 수직 크기를 정의합니다."},
    { num: 185, category: "inset", name: "inset", desc: " 상단, 오른쪽, 하단 및/또는 왼쪽 속성에 해당하는 약어입니다."},
    { num: 186, category: "inset", name: "inset-block", desc: " 요소의 논리적 블록 시작 및 끝 오프셋을 정의하며, 요소의 쓰기 모드, 방향 및 텍스트 방향에 따라 물리적 오프셋에 매핑됩니다."},
    { num: 187, category: "inset", name: "inset-block-end", desc: " 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 인셋에 매핑되는 요소의 논리적 블록 엔드 오프셋을 정의합니다."},
    { num: 188, category: "inset", name: "inset-block-start", desc: " 요소의 쓰기 모드, 방향 및 텍스트 방향에 따라 물리적 인세트에 매핑되는 요소의 논리적 블록 시작 오프셋을 정의합니다."},
    { num: 189, category: "inset", name: "inset-inline", desc: " 요소의 쓰기 모드, 방향 및 텍스트 방향에 따라 물리적 오프셋에 매핑되는 인라인 방향의 요소의 논리적 시작 및 끝 오프셋을 정의합니다."},
    { num: 190, category: "inset", name: "inset-inline-end", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 오프셋에 매핑되는 요소의 논리적 인라인 엔드를 정의합니다."},
    { num: 191, category: "inset", name: "inset-inline-start", desc: " 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 오프셋에 매핑되는 요소의 논리적 인라인 시작을 정의합니다."},
    { num: 192, category: "etc", name: "isolation", desc: " 요소가 새로운 쌓임 맥락을 생성해야 하는지 지정합니다."},
    { num: 193, category: "etc", name: "justify-content", desc: " 콘텐츠의 좌우 관계 정렬 상태를 정의합니다."},
    { num: 194, category: "etc", name: "justify-items", desc: " 상자의 모든 항목에 대한 기본 정당화를 정의하여 적절한 축을 따라 각 상자를 정당화하는 기본 방법을 제공합니다."},
    { num: 195, category: "etc", name: "justify-self", desc: " 적절한 축을 따라 정렬 컨테이너 내에서 상자가 정당화되는 방식을 설정합니다."},
    { num: 196, category: "etc", name: "left", desc: " 요소의 왼쪽 속성을 설정합니다."},
    { num: 197, category: "etc", name: "letter-spacing", desc: " 글자 사이의 간격을 설정합니다."},
    { num: 198, category: "etc", name: "line-break", desc: " 한중일(CJK) 3개국어의 텍스트 줄을 어디서 바꿀지 지정합니다."},
    { num: 199, category: "etc", name: "line-height", desc: " 문장과 문장 사이의 간격을 설정합니다."},
    { num: 200, category: "etc", name: "line-height-step", desc: " 라인 박스 높이에 대한 단계 단위를 설정합니다."},
    { num: 201, category: "etc", name: "list-style", desc: " 목록 스타일을 설정합니다."},
    { num: 202, category: "etc", name: "list-style-image", desc: " 목록 마커의 이미지를 설정합니다."},
    { num: 203, category: "etc", name: "list-style-position", desc: " 목록 마커의 위치 속성을 설정합니다."},
    { num: 204, category: "etc", name: "list-style-type", desc: " 목록 마커의 유형을 설정합니다."},
    { num: 205, category: "margin", name: "margin", desc: " 요소의 바깥쪽 여백을 설정합니다."},
    { num: 206, category: "margin", name: "margin-block", desc: " 요소의 논리적 블록 시작과 끝 여백을 정의하며, 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 여백에 매핑됩니다."},
    { num: 207, category: "margin", name: "margin-block-end", desc: " 요소의 논리적 블록 끝 여백을 정의하며, 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 여백에 매핑됩니다."},
    { num: 208, category: "margin", name: "margin-block-start", desc: " 요소의 논리적 블록 시작 여백을 정의하며, 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 여백에 매핑됩니다."},
    { num: 209, category: "margin", name: "margin-bottom", desc: " 요소의 아래 바깥쪽 여백을 설정합니다."},
    { num: 210, category: "margin", name: "margin-inline", desc: "요소의 논리적 인라인 시작과 끝 여백을 모두 정의하는 속기 속성으로, 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 여백에 매핑됩니다."},
    { num: 211, category: "margin", name: "margin-inline-end", desc: " 요소의 논리적 인라인 엔드 여백을 정의하며, 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 여백에 매핑됩니다."},
    { num: 212, category: "margin", name: "margin-inline-start", desc: " 요소의 논리적 인라인 시작 여백을 정의하며, 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 여백에 매핑됩니다. "},
    { num: 213, category: "margin", name: "margin-left", desc: " 요소의 왼쪽 바깥쪽 여백을 설정합니다."},
    { num: 214, category: "margin", name: "margin-right", desc: " 요소의 오른쪽 바깥쪽 여백을 설정합니다."},
    { num: 215, category: "margin", name: "margin-top", desc: " 요소의 윗부분 바깥쪽 여백을 설정합니다."},
    { num: 216, category: "margin", name: "margin-trim", desc: " margin-trim 속성을 통해 컨테이너는 컨테이너의 가장자리에 인접한 자식의 여백을 자를 수 있습니다."},
    { num: 217, category: "mask", name: "mask", desc: " 아이템이 부분적으로만 보여지게 하거나 혹은 완전히 가려서 보여지지 않게 할 수 있는 기능입니다."},
    { num: 218, category: "mask", name: "mask-border", desc: " mask-border 속성을 사용하면 요소의 경계 가장자리를 따라 마스크를 생성할 수 있습니다."},
    { num: 219, category: "mask", name: "mask-border-mode", desc: " 마스크 경계에 사용되는 혼합 모드를 지정합니다."},
    { num: 220, category: "mask", name: "mask-border-outset", desc: " 요소의 마스크 테두리가 경계 상자로부터 설정되는 거리를 지정합니다."},
    { num: 221, category: "mask", name: "mask-border-repeat", desc: " 소스 이미지의 가장자리 영역이 요소의 마스크 경계 치수에 맞게 조정되는 방법을 설정합니다."},
    { num: 222, category: "mask", name: "mask-border-slice", desc: " mask-border-source에 의해 설정된 이미지를 영역으로 나눕니다."},
    { num: 223, category: "mask", name: "mask-border-source", desc: " 요소의 마스크 경계를 만드는 데 사용되는 소스 이미지를 설정합니다."},
    { num: 224, category: "mask", name: "mask-border-width", desc: " 요소의 마스크 경계 너비를 설정합니다."},
    { num: 225, category: "mask", name: "mask-clip", desc: " 마스크의 영향을 받는 영역을 결정합니다."},
    { num: 226, category: "mask", name: "mask-composite", desc: " 마스크 레이어가 아래에 있는 현재 마스크 레이어에 사용되는 합성 연산을 나타냅니다."},
    { num: 227, category: "mask", name: "mask-image", desc: " 요소의 마스크 계층으로 사용되는 이미지를 설정합니다. "},
    { num: 228, category: "mask", name: "mask-mode", desc: " 마스크 이미지에 의해 정의된 마스크 기준이 휘도로 처리되는지 알파 마스크로 처리되는지 여부를 설정합니다."},
    { num: 229, category: "mask", name: "mask-origin", desc: " 마스크의 근원을 설정합니다."},
    { num: 230, category: "mask", name: "mask-position", desc: " 정의된 각 마스크 이미지에 대해 마스크 근원에 의해 설정된 마스크 위치 레이어에 상대적인 초기 위치를 설정합니다."},
    { num: 231, category: "mask", name: "mask-repeat", desc: " 마스크 이미지가 반복되는 방법을 설정합니다."},
    { num: 232, category: "mask", name: "mask-size", desc: " 마스크 이미지의 크기를 지정합니다."},
    { num: 233, category: "mask", name: "mask-type", desc: " SVG 요소가 휘도로 사용되는지 알파 마스크로 사용되는지를 설정합니다. "},
    { num: 234, category: "etc", name: "max-block-size", desc: " 쓰기 모드에 의해 지정된 쓰기 방향과 반대 방향으로 요소의 최대 크기를 지정합니다. "},
    { num: 235, category: "etc", name: "max-height", desc: " 요소의 최대 높이를 설정합니다."},
    { num: 236, category: "etc", name: "max-inline-size", desc: " 쓰기 모드에 따라 요소 블록의 수평 또는 수직 최대 크기를 정의합니다."},
    { num: 237, category: "etc", name: "max-width", desc: " 요소의 최대 너비를 설정합니다."},
    { num: 238, category: "etc", name: "min-block-size", desc: " 쓰기 모드에 따라 요소 블록의 최소 수평 또는 수직 크기를 정의합니다."},
    { num: 239, category: "etc", name: "min-height", desc: " 요소의 최소 높이를 설정합니다."},
    { num: 240, category: "etc", name: "min-inline-size", desc: " 쓰기 모드에 따라 요소 블록의 수평 또는 수직 최소 크기를 정의합니다."},
    { num: 241, category: "etc", name: "min-width", desc: " 요소의 최소 너비를 설정합니다."},
    { num: 242, category: "etc", name: "mix-blend-mode", desc: " 어느 요소의 콘텐츠가 자신의 배경 및 부모와 어떻게 혼합되어야 하는지를 지정합니다."},
    { num: 243, category: "etc", name: "object-fit", desc: " &lt;img&gt; 또는 &lt;video&gt; 대체 요소의 콘텐츠 크기를 어떤 방식으로 조절해 요소에 맞출 것인지를 지정합니다."},
    { num: 244, category: "etc", name: "object-position", desc: "대체 요소의 콘텐츠 정렬 방식을 지정합니다. 대체 요소의 객체로 덮지 않은 부분은 요소의 배경이 보입니다."},
    { num: 245, category: "offset", name: "offset", desc: " 오프셋 값을 지정해 줄 요소와 기준이 되어줄 요소 간의 상대 주소 개념입니다. 오프셋 값으로는 top, bottom, left, right가 있습니다."},
    { num: 246, category: "offset", name: "offset-anchor", desc: " 경로를 따라 배치할 요소의 기준점을 지정합니다."},
    { num: 247, category: "offset", name: "offset-distance", desc: " 경로를 따라 배치할 요소의 위치를 지정합니다."},
    { num: 248, category: "offset", name: "offset-path", desc: " 요소가 이동해야 할 경로를 지정합니다."},
    { num: 249, category: "offset", name: "offset-position", desc: " 오프셋 경로의 초기 위치를 정의합니다."},
    { num: 250, category: "offset", name: "offset-rotate", desc: "오프셋 경로를 따라 배치되는 요소의 방향을 정의합니다."},
    { num: 251, category: "etc", name: "opacity", desc: " 요소의 투명도를 설정합니다."},
    { num: 252, category: "etc", name: "order", desc: " 플렉스 또는 그리드 콘텐츠의 순서를 정의합니다."},
    { num: 253, category: "etc", name: "orphans", desc: " 페이지, 영역 또는 열의 맨 아래에 표시되어야 하는 블록 컨테이너의 최소 줄 수를 설정합니다."},
    { num: 254, category: "etc", name: "outline", desc: " 모든 외곽선 속성(색, 스타일, 두께)를 한꺼번에 지정합니다."},
    { num: 255, category: "etc", name: "outline-color", desc: " 외곽선의 색상을 지정합니다."},
    { num: 256, category: "etc", name: "outline-offset", desc: " 외곽선과 요소 가장자리 사이의 간격을 설정합니다."},
    { num: 257, category: "etc", name: "outline-style", desc: " 외곽선의 스타일을 정의합니다."},
    { num: 258, category: "etc", name: "outline-width", desc: " 외곽선의 두께를 설정합니다."},
    { num: 259, category: "overflow", name: "overflow", desc: "요소들이 지정한 영역 밖으로 벗어났을 떄의 속성을 설정합니다."},
    { num: 260, category: "overflow", name: "overflow-anchor", desc: " 스크롤 고정 문제가 발생하고 동작을 해제해야하는 경우에 사용합니다."},
    { num: 261, category: "overflow", name: "overflow-block", desc: " 콘텐츠가 상자의 블록 시작 및 블록 끝 가장자리를 오버플로할 때 표시되는 내용을 설정합니다."},
    { num: 262, category: "overflow", name: "overflow-clip-margin", desc: " 요소가 잘리기 전에 페인팅할 수 있는 범위를 결정합니다."},
    { num: 263, category: "overflow", name: "overflow-inline", desc: " 콘텐츠가 상자의 인라인 시작 및 끝 가장자리를 오버플로할 때 표시되는 내용을 설정합니다."},
    { num: 264, category: "overflow", name: "overflow-wrap", desc: " 어떤 문자가 내용 칸 밖으로 넘치지 않도록, 브라우저가 단어 마디 안에서 줄을 바꿔야 할 것인지 아닌지를 설정합니다."},
    { num: 265, category: "overflow", name: "overflow-x", desc: " 콘텐츠가 블록 수준 요소의 왼쪽 및 오른쪽 가장자리를 오버플로할 때 표시되는 내용을 설정합니다."},
    { num: 266, category: "overflow", name: "overflow-y", desc: " 콘텐츠가 블록 수준 요소의 위쪽 및 아래쪽 가장자리를 오버플로할 때 표시되는 내용을 설정합니다."},
    { num: 267, category: "scroll", name: "overscroll-behavior", desc: " 스크롤 영역의 경계에 도달할 때 브라우저가 수행하는 동작을 설정합니다."},
    { num: 268, category: "scroll", name: "overscroll-behavior-block", desc: " 스크롤 영역의 블록 방향 경계에 도달할 때 브라우저의 동작을 설정합니다."},
    { num: 269, category: "scroll", name: "overscroll-behavior-inline", desc: " 스크롤 영역의 인라인 방향 경계에 도달할 때 브라우저의 동작을 설정합니다."},
    { num: 270, category: "scroll", name: "overscroll-behavior-x", desc: " 스크롤 영역의 수평 경계에 도달할 때 브라우저의 동작을 설정합니다."},
    { num: 271, category: "scroll", name: "overscroll-behavior-y", desc: " 스크롤 영역의 수직 경계에 도달할 때 브라우저의 동작을 설정합니다."},
    { num: 272, category: "padding", name: "padding", desc: " 요소의 안쪽 여백을 설정합니다."},
    { num: 273, category: "padding", name: "padding-block", desc: " 요소의 쓰기 모드, 방향 및 텍스트 방향에 따라 물리적 패딩 속성에 매핑되는 요소의 논리적 블록 시작 및 끝 패딩을 정의합니다."},
    { num: 274, category: "padding", name: "padding-block-end", desc: " 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 블록 끝 패딩을 정의합니다."},
    { num: 275, category: "padding", name: "padding-block-start", desc: " 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 블록 시작 패딩을 정의합니다."},
    { num: 276, category: "padding", name: "padding-bottom", desc: " 요소의 아래쪽 여백을 설정합니다."},
    { num: 277, category: "padding", name: "padding-inline-end", desc: " 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 인라인 끝 패딩을 정의합니다."},
    { num: 278, category: "padding", name: "padding-inline-start", desc: " 요소의 쓰기 모드, 방향성 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 인라인 시작 패딩을 정의합니다."},
    { num: 279, category: "padding", name: "padding-left", desc: " 요소의 왼쪽 안쪽 여백을 설정합니다."},
    { num: 280, category: "padding", name: "padding-right", desc: " 요소의 오른쪽 안쪽 여백을 설정합니다."},
    { num: 281, category: "padding", name: "padding-top", desc: " 요소의 위쪽 안쪽 여백을 설정합니다."},
    { num: 282, category: "etc", name: "page-break-after", desc: " 현재 요소 뒤의 페이지 나누기를 조정합니다. (이 속성은 break-after 속성으로 대체됨)"},
    { num: 283, category: "etc", name: "page-break-before", desc: " 현재 요소 앞의 페이지 나누기를 조정합니다. (이 속성은 break-before 속성으로 대체됨)"},
    { num: 284, category: "etc", name: "page-break-inside", desc: " 현재 요소 내부의 페이지 나누기를 조정합니다. (이 속성은 break-inside 속성으로 대체됨)"},
    { num: 285, category: "etc", name: "perspective", desc: " 3D 위치 요소에 약간의 원근감을 주기 위해 z=0 평면과 사용자 사이의 거리를 결정합니다."},
    { num: 286, category: "etc", name: "perspective-origin", desc: " 뷰어가 보고 있는 위치를 결정합니다. (3D)"},
    { num: 287, category: "etc", name: "place-content", desc: " 레이아웃 시스템에서 블록 및 인라인 방향을 따라 콘텐츠를 한 번에 정렬할 수 있습니다."},
    { num: 288, category: "etc", name: "place-items", desc: " 레이아웃 시스템에서 블록 및 인라인 방향으로 항목을 한 번에 정렬합니다."},
    { num: 289, category: "etc", name: "place-self", desc: " 레이아웃 시스템에서 블록 및 인라인 방향으로 개별 항목을 한 번에 정렬합니다."},
    { num: 290, category: "etc", name: "pointer-events", desc: " 그래픽 요소가 어떤 상황에서 포인터 이벤트의 대상이 될 수 있는지 지정합니다."},
    { num: 291, category: "etc", name: "position", desc: " 요소의 위치를 지정합니다. top, right, bottom, left 속성이 요소를 배치할 최종 위치를 결정합니다."},
    { num: 292, category: "etc", name: "print-color-adjust", desc: " 브라우저에서 배경색과 이미지를 강제로 인쇄합니다."},
    { num: 293, category: "etc", name: "quotes", desc: " 인용 부호(따옴표)를 정의합니다."},
    { num: 294, category: "etc", name: "resize", desc: " 요소의 크기를 조정할 수 있는지 여부와 가능한 경우 방향을 설정합니다."},
    { num: 295, category: "etc", name: "right", desc: " 오른쪽을 기준으로 요소의 수평 위치를 지정합니다."},
    { num: 296, category: "etc", name: "rotate", desc: " 속성과 별도로 회전 변환을 지정합니다."},
    { num: 297, category: "etc", name: "row-gap (grid-row-gap)", desc: " 요소 행 사이의 간격(거터) 크기를 설정합니다."},
    { num: 298, category: "etc", name: "ruby-align", desc: "ruby-align 베이스에 대한 다양한 루비 요소의 분포를 정의합니다."},
    { num: 299, category: "etc", name: "ruby-position", desc: " 기본 요소를 기준으로 루비 요소의 위치를 ​​정의합니다."},
    { num: 300, category: "etc", name: "scale", desc: " 속성과 별개로 크기 변환을 개별적으로 지정합니다."},
    { num: 301, category: "scroll", name: "scroll-behavior", desc: " 스크롤이 탐색 또는 CSSOM 스크롤 API에 의해 트리거될 때 스크롤 상자의 동작을 설정합니다."},
    { num: 302, category: "scroll", name: "scroll-margin", desc: " 요소의 모든 스크롤 여백을 한 번에 설정합니다."},
    { num: 303, category: "scroll", name: "scroll-margin-block", desc: " 블록 차원에서 요소의 스크롤 여백을 설정합니다."},
    { num: 304, category: "scroll", name: "scroll-margin-block-end", desc: " 상자를 스냅포트에 맞추는 데 사용되는 블록 차원의 끝부분에서 스크롤 스냅 영역의 여백을 정의합니다."},
    { num: 305, category: "scroll", name: "scroll-margin-block-start", desc: " 상자를 스냅포트에 맞추는 데 사용되는 블록 차원의 시작부분에서 스크롤 스냅 영역의 여백을 정의합니다."},
    { num: 306, category: "scroll", name: "scroll-margin-bottom", desc: " 상자를 snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 아래쪽 여백을 정의합니다."},
    { num: 307, category: "scroll", name: "scroll-margin-inline", desc: " 인라인 차원에서 요소의 스크롤 여백을 설정합니다."},
    { num: 308, category: "scroll", name: "scroll-margin-inline-end", desc: " 상자를 snapport에 맞추는 데 사용되는 인라인 차원의 끝부분에서 스크롤 스냅 영역의 여백을 정의합니다."},
    { num: 309, category: "scroll", name: "scroll-margin-inline-start", desc: " 상자를 snapport에 맞추는 데 사용되는 인라인 차원의 시작부분에서 스크롤 스냅 영역의 여백을 정의합니다."},
    { num: 310, category: "scroll", name: "scroll-margin-left", desc: " 스크롤 스냅 영역의 왼쪽 여백을 정의합니다."},
    { num: 311, category: "scroll", name: "scroll-margin-right", desc: " 스크롤 스냅 영역의 오른쪽 여백을 정의합니다."}, 
    { num: 312, category: "scroll", name: "scroll-margin-top", desc: " 스크롤 스냅 영역의 위쪽 여백을 정의합니다."},
    { num: 313, category: "scroll", name: "scroll-padding", desc: " 요소의 모든 면에 스크롤 패딩을 한 번에 설정합니다."},
    { num: 314, category: "scroll", name: "scroll-padding-block", desc: " 블록 차원에서 요소의 스크롤 패딩을 설정합니다."},
    { num: 315, category: "scroll", name: "scroll-padding-block-end", desc: " 스크롤 포트의 최적 보기 영역의 블록 차원 끝부분에서 가장자리에 대한 오프셋을 정의합니다."},
    { num: 316, category: "scroll", name: "scroll-padding-block-start", desc: " 스크롤 포트의 최적 보기 영역의 블록 차원 시작부분에서 가장자리에 대한 오프셋을 정의합니다."},
    { num: 317, category: "scroll", name: "scroll-padding-bottom", desc: " 스크롤포트의 최적 보기 영역 하단에 대한 오프셋을 정의합니다."},
    { num: 318, category: "scroll", name: "scroll-padding-inline", desc: " 인라인 차원에서 요소의 스크롤 패딩을 설정합니다."},
    { num: 319, category: "scroll", name: "scroll-padding-inline-end", desc: " 스크롤 포트의 최적 보기 영역의 인라인 차원 끝부분에서 가장자리에 대한 오프셋을 정의합니다."},
    { num: 320, category: "scroll", name: "scroll-padding-inline-start", desc: " 스크롤 포트의 최적 보기 영역의 인라인 차원 시작부분에서 가장자리에 대한 오프셋을 정의합니다."},
    { num: 321, category: "scroll", name: "scroll-padding-left", desc: " 스크롤포트의 최적 보기 영역 왼쪽에 대한 오프셋을 정의합니다."},
    { num: 322, category: "scroll", name: "scroll-padding-right", desc: " 스크롤포트의 최적 보기 영역 오른쪽에 대한 오프셋을 정의합니다."},
    { num: 323, category: "scroll", name: "scroll-padding-top", desc: " 스크롤포트의 최적 보기 영역 상단에 대한 오프셋을 정의합니다."},
    { num: 324, category: "scroll", name: "scroll-snap-align", desc: " 박스의 스냅 위치를 스냅 컨테이너의 스냅 포트 내 영역에 정렬합니다."},
    { num: 325, category: "scroll", name: "scroll-snap-coordinate", desc: " 각 축에 대해 가장 가까운 조상 스크롤 컨테이너와 정렬되는 요소 내의 x 및 y 좌표 위치를 정의할 때 사용되었습니다. (더 이상 사용되지 않음)"},
    { num: 326, category: "scroll", name: "scroll-snap-destination", desc: " 요소 스냅 포인트가 정렬되는 스크롤 컨테이너의 시각적 뷰포트 내에서 x 및 y 좌표의 위치를 ​​정의할 때 사용되었습니다. (더 이상 사용되지 않음)"},
    { num: 327, category: "scroll", name: "scroll-snap-points-x", desc: " 스냅 포인트가 적용되는 스크롤 컨테이너의 내용 내에서 스냅 포인트의 수평 위치를 정의할 때 사용되었습니다. (더 이상 사용되지 않음)"},
    { num: 328, category: "scroll", name: "scroll-snap-points-y", desc: " 스냅 포인트가 적용되는 스크롤 컨테이너의 내용 내에서 스냅 포인트의 수직 위치를 ​정의할 때 사용되었습니다. (더 이상 사용되지 않음)"},
    { num: 329, category: "scroll", name: "scroll-snap-stop", desc: " 스크롤 컨테이너가 가능한 스냅 위치를 '통과'할 수 있는지 여부를 정의합니다."},
    { num: 330, category: "scroll", name: "scroll-snap-type", desc: " 스냅 포인트가 있는 경우, 스크롤 컨테이너에 스냅 포인트가 얼마나 엄격하게 적용되는지 설정합니다."},
    { num: 331, category: "scroll", name: "scrollbar-color", desc: " 스크롤 막대의 색상을 설정합니다."},
    { num: 332, category: "scroll", name: "scrollbar-gutter", desc: " 스크롤 막대의 존재 여부에 따른 레이아웃의 변화를 없애줍니다."},
    { num: 333, category: "scroll", name: "scrollbar-width", desc: " 스크롤 막대의 너비를 설정합니다."},
    { num: 334, category: "etc", name: "shape-image-threshold", desc: " 이미지의 모양을 추출하기 위해 알파 채널 임계값을 설정합니다. 이 값보다 불투명한 픽셀은 모양의 영역을 계산하는 데 사용됩니다."},
    { num: 335, category: "etc", name: "shape-margin", desc: " 인접한 인라인 콘텐츠가 상자를 둘러싸는 모양의 여백을 설정합니다."},
    { num: 336, category: "etc", name: "shape-outside", desc: " 인접한 인라인 콘텐츠가 상자를 둘러싸는 모양을 정의합니다."},
    { num: 337, category: "etc", name: "tab-size", desc: " 탭 문자(U+0009)의 너비를 조절합니다."},
    { num: 338, category: "etc", name: "table-layout", desc: " 표의 레이아웃을 정의합니다. (테이블 크기 고정)"},
    { num: 339, category: "text", name: "text-align", desc: " 텍스트의 정렬 방식을 설정합니다."},
    { num: 340, category: "text", name: "text-align-last", desc: " 강제 줄 바꿈 직전의 블록 또는 문장의 마지막 줄을 정렬하는 방법을 설정합니다."},
    { num: 341, category: "text", name: "text-combine-upright", desc: " 문자 조합을 단일 문자 공간으로 설정합니다."},
    { num: 342, category: "text", name: "text-decoration", desc: " 텍스트에 장식용 선을 추가합니다."},
    { num: 343, category: "text", name: "text-decoration-color", desc: " 텍스트에 추가되는 장식의 색상을 설정합니다."},
    { num: 344, category: "text", name: "text-decoration-line", desc: " 밑줄이나 윗줄과 같이 요소의 텍스트에 사용되는 장식의 종류를 설정합니다."},
    { num: 345, category: "text", name: "text-decoration-skip", desc: " 텍스트의 장식(밑줄)이 일정 부분을 건너뛰어 중간에 끊어지도록 설정합니다."},
    { num: 346, category: "text", name: "text-decoration-skip-ink", desc: " 윗줄과 밑줄이 글리프 어센더 및 디센더를 전달할 때 그려지는 방법을 지정합니다."},
    { num: 347, category: "text", name: "text-decoration-style", desc: " 설정된 모든 장식(밑줄)의 스타일을 설정합니다."},
    { num: 348, category: "text", name: "text-decoration-thickness", desc: " 텍스트 장식(밑줄)의 굵기를 설정합니다."},
    { num: 349, category: "text", name: "text-emphasis", desc: " 텍스트에 강조 표시를 적용합니다. (공백 및 제어문자 제외)"},
    { num: 350, category: "text", name: "text-emphasis-color", desc: " 텍스트 강조 표시의 색상을 설정합니다."},
    { num: 351, category: "text", name: "text-emphasis-position", desc: " 텍스트 강조 표시의 위치를 설정합니다."},
    { num: 352, category: "text", name: "text-emphasis-style", desc: " 텍스트 강조 표시의 모양을 설정합니다."},
    { num: 353, category: "text", name: "text-indent", desc: " 문단의 들여쓰기 길이를 지정합니다."},
    { num: 354, category: "text", name: "text-justify", desc: " 텍스트의 간격을 설정합니다."},
    { num: 355, category: "text", name: "text-orientation", desc: " 줄에서 텍스트 문자의 방향(수평, 수직)을 설정합니다."},
    { num: 356, category: "text", name: "text-overflow", desc: " 숨겨진 오버플로 콘텐츠가 사용자에게 신호되는 방식을 설정합니다. (넘치는 텍스트 처리방법)"},
    { num: 357, category: "text", name: "text-rendering", desc: " 텍스트를 렌더링할 때 최적화할 대상에 대한 정보를 렌더링 엔진에 제공합니다."},
    { num: 358, category: "text", name: "text-shadow", desc: " 텍스트에 그림자를 설정합니다. 각 그림자는 요소, 흐림 반경 및 색상의 X 및 Y 오프셋 조합으로 설명됩니다."},
    { num: 359, category: "text", name: "text-size-adjust", desc: " 일부 스마트폰 및 태블릿에서 사용되는 텍스트 인플레이션 알고리즘을 제어합니다."},
    { num: 360, category: "text", name: "text-transform", desc: " 텍스트를 모두 대문자 또는 소문자로 표시하거나, 각 단어를 대문자로 표시합니다."},
    { num: 361, category: "text", name: "text-underline-offset", desc: " 텍스트와 밑줄 사이의 거리를 설정합니다."},
    { num: 362, category: "text", name: "text-underline-position", desc: " 텍스트 밑줄의 방향(수평, 수직)을 ​​지정합니다."},
    { num: 363, category: "etc", name: "top", desc: " 배치된 요소의 수직 위치(위쪽)을 지정합니다."},
    { num: 364, category: "etc", name: "touch-action", desc: " 터치스크린 사용자가 요소의 영역을 조작하는 방법(브라우저에 내장된 확대/축소 기능 등)을 설정합니다."},
    { num: 365, category: "transform", name: "transform", desc: " 요소에 회전, 크기 조절, 기울이기, 이동 효과 등의 움직임을 부여합니다."},
    { num: 366, category: "transform", name: "transform-box", desc: " transform 및 transform-origin과 관련된 레이아웃 상자를 정의합니다."},
    { num: 367, category: "transform", name: "transform-origin", desc: " 요소 변형의 원점을 설정합니다."},
    { num: 368, category: "transform", name: "transform-style", desc: " 요소의 자식이 3D 공간에 배치되는지 또는 요소 평면에서 병합되는지 여부를 설정합니다."},
    { num: 369, category: "transition", name: "transition", desc: " 요소의 두 가지 상태 사이에 전환 효과를 줍니다."},
    { num: 370, category: "transition", name: "transition-delay", desc: " 전환 애니메이션의 시간을 지연합니다."},
    { num: 371, category: "transition", name: "transition-duration", desc: " 전환 애니메이션이 완료되는데 걸리는 시간을 설정합니다."},
    { num: 372, category: "transition", name: "transition-property", desc: " 전환 효과의 적용 여부를 설정합니다."},
    { num: 373, category: "transition", name: "transition-timing-function", desc: " 전환 효과의 영향을 받는 CSS 속성에 대해 중간 값이 계산 되는 방식을 설정합니다."},
    { num: 374, category: "transform", name: "translate", desc: " 변환 속성에 구애받지 않고 개별적인 변환 방법(translation transforms)을 지정할 수 있습니다."},
    { num: 375, category: "etc", name: "unicode-bidi", desc: " 문서의 양방향 텍스트가 표시되는 방식을 결정합니다."},
    { num: 376, category: "etc", name: "user-select", desc: " 사용자가 텍스트를 선택할 수 있는지에 대해 지정합니다."},
    { num: 377, category: "etc", name: "vertical-align", desc: " inline 또는 table-cell box에서의 수직 정렬을 지정합니다."},
    { num: 378, category: "etc", name: "visibility", desc: " 문서의 레이아웃을 변경하지 않고 요소를 보이거나 숨깁니다."},
    { num: 379, category: "etc", name: "white-space", desc: " 요소가 공백 문자를 처리하는 법(공백, 줄바꿈 속성)을 지정합니다."},
    { num: 380, category: "etc", name: "widows", desc: " 페이지, 영역 또는 열의 상단에 표시되어야 하는 블록 컨테이너의 최소 줄 수를 설정합니다."},
    { num: 381, category: "etc", name: "width", desc: " 요소의 너비(크기 값)을 설정합니다."},
    { num: 382, category: "etc", name: "will-change", desc: " 요소에 예상되는 변화의 종류에 관한 힌트를 브라우저에 제공하도록 합니다."},
    { num: 383, category: "etc", name: "word-break", desc: " 텍스트가 자신의 콘텐츠 박스 밖으로 오버플로 할 때 줄바꿈 속성을 설정합니다."},
    { num: 384, category: "etc", name: "word-spacing", desc: " 단어와 단어 사이, 태그와 태그 사이의 거리를 설정합니다."},
    { num: 385, category: "etc", name: "writing-mode", desc: " 텍스트 줄의 가로 세로 배치 방법와 블록이 진행되는 방향을 설정합니다."},
    { num: 386, category: "etc", name: "z-index", desc: " 요소들의 위치가 겹칠 경우, Z축(화면에 뜨는) 순서를 정의합니다."}
];


// const searchNum = document.querySelector(".search__info .num");
// const searchNum2 = document.querySelector(".search__info .num2");
// const searchNumSec = document.querySelector(".search__info div:nth-child(2)");

const searchTime = document.querySelector(".search__time span");
const searchList = document.querySelector(".search__list");
const searchAnswers = document.querySelector(".search__answers");
const searchMissAnswers = document.querySelector(".search__missAnswers");
const searchStart = document.querySelector(".search__box .start");
const searchInput = document.querySelector("#search");
const searchAudio = document.querySelector("#audio");
const searchAudioC = document.querySelector("#audioC");
const searchAudioF = document.querySelector("#audioF");
const searchAudioBtn = document.querySelector(".search__audio > span");
const searchAudioPlay = document.querySelector(".search__audio .play");
const searchAudioStop = document.querySelector(".search__audio .stop");
const searchScoreTotal = document.querySelector(".search__info .num");
const searchScoreNow = document.querySelector(".search__info .now");
const searchResult = document.querySelector(".search__result .result");
const searchResultWrap = document.querySelector(".search__result");
const searchRestart = document.querySelector(".search__result .restart");

// 2분동안
let timeReamining = 3,    //남은 시간
    timeInterval = "",       //시간 간격
    score = 0,              //점수
    answers = {};           //새로운 정답   //위에 cssProperty에서 데이터 값 가져와서 새로운 객체 배열 만들것임.


// 리스트 뽑아주기  // 나중에 힌트보기가 될 것.
function updateList(){
    cssProperty.forEach(data => {
        searchList.innerHTML += `<span>${data.name}</span>`;
    })
}
// 게임 시작하면 리스트 나옴
updateList();

// 게임 시작하기
function startQuiz(){

    // 게임시작하면 시작 버튼 없애기
    searchStart.style.display = "none";
    // 게임시작하면 리스트 없애주기
    searchList.style.display = "none";

    // 다시 시작할 때 기존 데이터 초기화
    searchAnswers.innerHTML = "";
    searchMissAnswers.innerHTML = "";

    // 시간 설정 //1초(1000)에 한번씩 실행되라
    timeInterval = setInterval(reduceTime, 1000);

    // 뮤직 추가하기
    searchAudioPlay.style.display = "block"
    searchAudioStop.style.display = "none"
    searchAudio.play();

    // 점수 계산
    searchScoreTotal.innerText = cssProperty.length;

    // 정답 체크
    checkAnswers();

}
// 인풋 체크하기
function checkInput(){
    // alert("ddd")
    // checkInput(e)를 안넣어도 됨
    let input = event.currentTarget.value.trim().toLowerCase();

    // 사용자가 쓴 답이 answers에 있는지 없는지 있으면 true로 바꿔주기
    // answers[input]가 false값이기 때문에 !answers[input] false가 아닐때 true일때
    // 원래 다 false인데 false인 값을 입력값이 있을 때 true로 바뀜  - 처음
    // 처음이 중복되지 않기 위해서 && !answers[input] 이게 이미 처음 시도로 true가 됐으니깐 다시 true값을 반환하지 않는것.
    if(answers.hasOwnProperty(input) && !answers[input]){
        answers[input] = true;

        //정답 표시하기
        searchAnswers.style.display = "block";
        searchAnswers.innerHTML += `<span>${input}</span>`;

        // 점수 반영
        score++;
        searchScoreNow.innerText = score;
        // console.log(score)
        
        //정답 사운드
        //searchAudioC.play();

        //정답 맞추면 초기화시키키
        searchInput.value = "";

    }

    // console.log(input);
}
//노래 on/off
// function stopPlay() {
//     searchAudioPlay.addEventListener("click", () => {
//         searchAudioStop.style.display = "block";
//         searchAudioPlay.style.display = "none";
//         searchAudio.pause();
//     })
//     searchAudioStop.addEventListener("click", () => {
//         searchAudioPlay.style.display = "block";
//         searchAudioStop.style.display = "none";
//         searchAudio.play();
//     })
// }

// 정답 체크하기 : 정답을 객체 파일로 만들기  //게임시작하자마자 바로 실행 되게끔 위애 startQuiz 함수 실행에 넣어줌
function checkAnswers(){
    // 정답 다 가져오기
    cssProperty.forEach(item => {
        // 이름 가져오고 공백제거, 소문자
        let answer = item.name.trim().toLocaleLowerCase();
        answers[answer] = false;
    });
    // console.log(answers);
}

// 오답 보여주기
function missAnswers(){
    searchMissAnswers.style.display = "block";

    cssProperty.forEach(item => {
        let answer = item.name.trim().toLocaleLowerCase();
        if(!answers[answer]){
            searchMissAnswers.innerHTML += `<span>${answer}</span>`;
        }
    })
   
}

// 음악 설정 참고
// function audio(){
//     searchAudioBtn.classList.add("playing");

//     searchAudioBtn.addEventListener("click", () => {
//         searchAudioBtn.classList.toggle("playing");
//     })

//     if(searchAudioBtn.classList.contains("playing")){
//         searchAudio.play();
//     } else {
//         searchAudio.pause();
//     }
// }
// 시간 설정하기
function reduceTime(){
    timeReamining--;

    // 게임 끝났을 때
    if (timeReamining < 11) {
        document.querySelector(".search__time").style.background = "blue";
    }
    if(timeReamining == 0) endQuiz();

    searchTime.innerText = displayTime();
}

// 시간 표시하기
function displayTime(){
    // timeReamining글씨가 120,119 이런식으로 나오기때문에 분초로 나눠주기
    if(timeReamining <= 0){
        return "0:00";
    } else {
        let minutes = Math.floor(timeReamining / 60);
        let seconds = timeReamining % 60;

        // 초 단위가 한자리 수 일 때 0을 추가
        if( seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
}

// 게임 끝났을 때
function endQuiz(){
    // alert("게임이 끝났습니다.!!!");

    // 시작버튼 만들기
    searchStart.style.display = "block";
    searchStart.style.pointerEvents = "none";

    // 오답 보여주기
    missAnswers();

   
    // 음악 끄기
    searchAudio.pause();
    searchAudioStop.style.display = "block";
    searchAudioPlay.style.display = "none";

    // 시간 정지 clearInterval : setInterval 반대
    clearInterval(timeInterval);

    // 메세지 출력
    // 퍼센트 점수 전체에서 점수 나눈것중에 곱하기 100
    searchResultWrap.classList.add("show");
    let point = Math.round((score/cssProperty.length)*100)
    searchResult.innerHTML = `게임이 끝났습니다.<br> 당신은 ${cssProperty.length}개 중에 ${score}개를 맞추었습니다.<br> 당신의 점수는 ${point}점입니다.`;
}
//다시 시작하기
function restart (){
    searchResultWrap.classList.remove("show");
    startQuiz();
    timeReamining = 120;
    if (timeReamining < 11) {
        document.querySelector(".search__time").style.background = "blue";
    } else {
        document.querySelector(".search__time").style.background = "var(--htmlColor)";
    }
    score = 0;
    searchScoreNow.innerText = "0";
    searchAudioStop.style.display = "none";
    searchAudioPlay.style.display = "block";
    searchAudio.play();
}
// 버튼 이벤트
searchStart.addEventListener("click", startQuiz);
// input했을 때 checkInput이라는 함수 돌리기
searchInput.addEventListener("input", checkInput);
searchRestart.addEventListener("click", restart);
// 오디오
// 버튼 클릭시 플레이
searchStart.addEventListener("click", () => {
    searchAudioPlay.style.display = "block";
    searchAudioStop.style.display = "none";
    searchAudio.play();
})

// 플레이 버튼
searchAudioStop.addEventListener("click", () => {
    searchAudioPlay.style.display = "block";
    searchAudioStop.style.display = "none";
    searchAudio.play();
})

// stop 버튼
searchAudioPlay.addEventListener("click", () => {
    searchAudioPlay.style.display = "none";
    searchAudioStop.style.display = "block";
    searchAudio.pause();
})
