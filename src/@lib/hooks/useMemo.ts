import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const prevDeps = useRef<DependencyList>([]);
  const prevResult = useRef<T | undefined>(undefined);

  // 2. 현재 의존성과 이전 의존성 비교
  if (!_equals(prevDeps.current, _deps)) {
    // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    // 의존 배열이 변하지 않았으면 함수를 실행조차 하면 안됨
    prevDeps.current = _deps;
    prevResult.current = factory();
  }

  // 4. 메모이제이션된 값 반환
  return prevResult.current as T;
  // 직접 작성한 useRef를 통해서 만들어보세요.
}
