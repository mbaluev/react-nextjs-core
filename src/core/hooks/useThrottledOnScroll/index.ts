import {useEffect, useMemo} from 'react';
import throttle from 'lodash/throttle';

const useThrottledOnScroll = (elementId: string, callback: () => void, delay: number) => {
  const throttledCallback = useMemo(() => throttle(callback, delay), [callback, delay]);

  useEffect(() => {
    const element = document.getElementById(elementId);
    element?.addEventListener('scroll', throttledCallback);
    return () => {
      element?.removeEventListener('scroll', throttledCallback);
      throttledCallback.cancel();
    };
    // eslint-disable-next-line
  }, [throttledCallback]);
};

export default useThrottledOnScroll;
