import {ISelectItem} from '@components/fields';

export const getSelectItemsFromDictionary = (
  dictionary?: Record<string, string>
): ISelectItem[] => {
  const items: ISelectItem[] = [];
  if (dictionary) {
    Object.keys(dictionary).forEach((key) => {
      items.push({
        label: dictionary[key],
        value: key,
        disabled: false,
      });
    });
  }
  return items;
};
