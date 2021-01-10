import { useSelector } from 'react-redux';
import { GlobalState } from '../../lib/types';

export function useAppSelector<T>(selector: (state: GlobalState) => T) {
  return useSelector(selector);
}
