import { DependencyList, useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';

export function useMount(mount: () => void | Promise<void> | (() => void), unmount: () => void = () => null) {
  return useEffect(() => {
    const unmountCb = mount();
    return () => {
      unmount();
      if (typeof unmountCb === 'function') {
        unmountCb();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useAwaitCallback<T extends(...args: any[]) => Promise<void>>(callback: T, deps: DependencyList): [T, boolean] {
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cb: T = useCallback(callback, deps);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _callback = useCallback((async (...args) => {
    if (!isLoading) {
      setIsLoading(true);
      await cb(...args);
      setIsLoading(false);
    }
  }) as T, [cb, isLoading]);
  return [_callback, isLoading];
}

export function useWrappedCallback<T>(callback: (item: T) => void, item: T): () => void {
  return useCallback(() => callback(item), [callback, item]);
}

export function useInputRef(): [React.RefObject<TextInput>, () => void] {
  const ref = useRef<TextInput>(null);
  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
  return [ref, focus];
}

export function useEffectSkipFirst(effect: () => void, deps: any[]) {
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      effect();
    }
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export const useIsInputFocusedState = () => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return { isFocused, onFocus, onBlur };
};

export const useBoolState = (defaultValue: boolean = false) => {
  const [state, setState] = useState(defaultValue);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState(!state), [state]);
  return { state, setState, setTrue, setFalse, toggle };
};
