import {useState} from 'react';

export type IUseTableCheckbox<T> = T & {
  id: string;
  disabled: boolean;
};

export const useTableCheckbox = <T>(items: IUseTableCheckbox<T>[]) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const onCheckAll = (checked: boolean) => {
    const newCheckedIds: string[] = [];
    items.forEach((item) => {
      if (!item.disabled && checked) newCheckedIds.push(item.id);
    });
    setCheckedIds(newCheckedIds);
  };

  const onCheck = (id: string, checked: boolean) => {
    if (checked) {
      const newCheckedIds: string[] = [...checkedIds];
      newCheckedIds.push(id);
      setCheckedIds(newCheckedIds);
    } else {
      const newCheckedIds: string[] = [
        ...checkedIds.filter((_id) => _id !== id),
      ];
      setCheckedIds(newCheckedIds);
    }
  };

  const checkAllValue =
    items.length > 0 &&
    items.filter((item) => {
      return !item.disabled;
    }).length === checkedIds.length;

  const checkAllIndeterminate =
    checkedIds.length > 0 &&
    checkedIds.length <
      items.filter((item) => {
        return !item.disabled;
      }).length;

  return {
    checkedIds,
    setCheckedIds,
    onCheckAll,
    onCheck,
    checkAllValue,
    checkAllIndeterminate,
  };
};
