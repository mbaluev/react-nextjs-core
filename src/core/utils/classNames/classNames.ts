type objectType = Record<string, boolean>;
type arrayType = Array<valueType>;
type valueType = undefined | string | objectType | arrayType;

export const classNames = (...args: Array<valueType>): string => {
  const _classNames: string[] = [];

  const handleObject = (object: objectType) => {
    for (let key of Object.keys(object)) {
      if (object[key]) {
        _classNames.push(key);
      }
    }
  };

  const handleArray = (array: arrayType) => {
    for (let item of array) {
      if (typeof item === 'string') {
        _classNames.push(item);
      } else if (Array.isArray(item)) {
        handleArray(item);
      } else if (typeof item === 'object') {
        handleObject(item);
      }
    }
  };

  handleArray(args);
  return _classNames.join(' ');
};
