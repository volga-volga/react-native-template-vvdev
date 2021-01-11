import { Dimensions, Platform } from 'react-native';

const IS_IOS = Platform.OS === 'ios';

export const { width, height } = Dimensions.get('screen');

export const isX = () => IS_IOS && width / height < 0.52;

export const isSmallPhone = () => (width < 350 || height < 350);

export function formatNumber(value: number | string): string {
  const str = String(value);
  return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export function unmaskPhone(phone: string) {
  const clean = phone.replace(/[^\d]/g, '');
  return phone[0] === '+' ? `+${clean}` : clean;
}

export const sleep = async (duration: number) => new Promise(r => setTimeout(() => r(), duration));

export function getKey(id: number) {
  return String(id);
}

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}
