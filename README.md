# React, beyond basic

## 이번 과제 핵심

불필요한 렌더링을 줄이기 위해 직접 구현한 메모이제이션 도구를 활용하고, 상태(=Context)를 관심사 단위로 분리하기

## 과제 체크포인트

### 배포 링크

<!--
배포 링크를 적어주세요
예시: https://<username>.github.io/front-5th-chapter1-1/

배포가 완료되지 않으면 과제를 통과할 수 없습니다.
배포 후에 정상 작동하는지 확인해주세요.
-->

### 기본과제

- [x] shallowEquals 구현 완료
- [x] deepEquals 구현 완료
- [x] useRef 구현 완료
- [x] useMemo 구현 완료
- [x] useCallback 구현 완료
- [x] memo 구현 완료
- [x] deepMemo 구현 완료
- [x] useDeepMemo 구현 완료

### 심화 과제

- [ ] 기본과제에서 작성한 hook을 이용하여 렌더링 최적화를 진행하였다.
- [ ] Context 코드를 개선하여 렌더링을 최소화하였다.

## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->
### 지난 주차와 같이 유지한 것

- [x]  배포 동작을 먼저 확인해보기

### 지난 주차와 다르게 시도해보려고 한 것

- [~]  핵심 기능을 구현하고 그 바탕에 비즈니스 로직을 올리는 것을 분리해서 구현하기
  - [x]  일단 작동하는 기본 구현
  - [ ]  문제가 발생하면 그 원인을 깊이 이해하는 시간
  - [ ]  새롭게 이해한 내용을 바탕으로 코드를 개선
  - [ ]  처음부터 완벽하게 이해하려 하지 않기
- [ ]  기능을 생각지않고 테스트만 보고 개발하기 (그것이 TDD의 매력)
- [ ]  코드를 정리하면서 디버깅도 겸해간다고 한번 모드를 바꿔보기
- [ ]  좋은 코드를 작성하는 것을 먼저 생각하고 그러기 위해서 필요한 기술이 뭔가를 찾아서 적합한 도구로써 기술을 매칭하기

### 기술적 성장
<!-- 예시
- 새로 학습한 개념
- 기존 지식의 재발견/심화
- 구현 과정에서의 기술적 도전과 해결
-->
뭐가 어려웠어요?

어떤게 제일 신경 썼어요?

새롭게 알게 된 거 있나요?

뭐 더 공부해보고 싶어요?

이번에 같이 공부해보면 좋을 개념들은 뭐가 있을까요?

### 코드 품질
<!-- 예시
- 특히 만족스러운 구현
- 리팩토링이 필요한 부분
- 코드 설계 관련 고민과 결정
-->

### 학습 효과 분석
<!-- 예시
- 가장 큰 배움이 있었던 부분
- 추가 학습이 필요한 영역
- 실무 적용 가능성
-->

1. 구현해야할 함수의 핵심 기능
    1. 얕은 비교 : 객체의 최상위 속성만 검사
    1. 깊은 비교 : 객체 내의 중첩된 객체까지 모두 검사
    1. useRef:
        1. 불변성
    1. memo.ts
        1. 이전 props를 저장할 ref 생성
        2. 메모이제이션된 컴포넌트 생성
        3. equals 함수를 사용하여 props 비교
        4. props가 변경된 경우에만 새로운 렌더링 수행

1. 새롭게 알게 된 개념
1. 불변성
    1. 불변 객체는 한 번 생성되면 그 내용을 수정할 수 없으며,
    1. 변경이 필요한 경우 새로운 객체를 생성해야 합니다.
    1. 원본 참조자들이 영향 받지 않도록 하는 것
      - 객체의 상태 변경 방지
      - 예측 가능한 코드 작성 가능
      - 부작용(side effects) 감소
      - 데이터의 일관성 유지
      -> 필요한 이유: 개발자의 정신적인 부담 감소(객체의 상태가 변경되지 않고 항상 일관됨)
      (즉, 하나의 메모리에서 참조된 두 개의 변수가 있을 때, 내가 현재 사용하고 있는 (코드를 짜고 있는) 부분이 아닌 곳에서 이 객체를 건드렸을 때 내가 원하는 값이 나오지 않는 경우가 있을 수 있는 상황을 방지함! ex. array.sort() 했을 때 원본 배열이 변경되는 경우 이를 보호하기 위해서 다른 변수에 저장해놓거나, 그 대신 toSorted를 쓰기도 한다.)
    1. 어떤 기술을 써서 이 객체가 변하지 못하게 만든다기 보다는, 리액트의 deps로 값을 전달할 때나, state로 값을 전달할 때, 같은 참조에 다른 값을 넣어서 전달하지 않도록 함으로써, 참조 동일성 체크 (===) 만으로 변경여부를 빠르게 판단할 수 있도록 만들어주기 때문에 중요함!

### 과제 피드백
<!-- 예시
- 과제에서 모호하거나 애매했던 부분
- 과제에서 좋았던 부분
-->

## 리뷰 받고 싶은 내용

<!--
피드백 받고 싶은 내용을 구체적으로 남겨주세요
모호한 요청은 피드백을 남기기 어렵습니다.

참고링크: https://chatgpt.com/share/675b6129-515c-8001-ba72-39d0fa4c7b62

모호한 요청의 예시)
- 코드 스타일에 대한 피드백 부탁드립니다.
- 코드 구조에 대한 피드백 부탁드립니다.
- 개념적인 오류에 대한 피드백 부탁드립니다.
- 추가 구현이 필요한 부분에 대한 피드백 부탁드립니다.

구체적인 요청의 예시)
- 현재 함수와 변수명을 보면 직관성이 떨어지는 것 같습니다. 함수와 변수를 더 명확하게 이름 지을 수 있는 방법에 대해 조언해주실 수 있나요?
- 현재 파일 단위로 코드가 분리되어 있지만, 모듈화나 계층화가 부족한 것 같습니다. 어떤 기준으로 클래스를 분리하거나 모듈화를 진행하면 유지보수에 도움이 될까요?
- MVC 패턴을 따르려고 했는데, 제가 구현한 구조가 MVC 원칙에 맞게 잘 구성되었는지 검토해주시고, 보완할 부분을 제안해주실 수 있을까요?
- 컴포넌트 간의 의존성이 높아져서 테스트하기 어려운 상황입니다. 의존성을 낮추고 테스트 가능성을 높이는 구조 개선 방안이 있을까요?
-->
