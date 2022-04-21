import {BaseListDTO} from '@model/baseList';

export function dBaseList(
  target: unknown,
  _propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
) {
  const method = descriptor.value;
  if (typeof method === 'function') {
    descriptor.value = async function (...args: any[]) {
      const result = await method?.apply(this, args);
      return result || (new BaseListDTO() as typeof target);
    };
  } else {
    return descriptor.value as typeof target;
  }
}
