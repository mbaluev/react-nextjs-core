import {useCallback, useEffect, useRef, useState} from 'react';
import useThrottledOnScroll from '../useThrottledOnScroll';
import {IContentItemProps} from '@components/content';

const useScrollSpy = (elementId: string, items: IContentItemProps[], offset?: number) => {
  const itemsWithNodeRef = useRef<any[]>([]);
  let targetItem = null;
  let targetRect = null;

  useEffect(() => {
    itemsWithNodeRef.current = getItemsClient(items);
    findActiveIndex();
    // eslint-disable-next-line
  }, [items]);

  const [active, setActive] = useState<string>('');

  const findActiveIndex = useCallback(() => {
    const itemsPos = itemsWithNodeRef.current.map((item) => {
      const {id, node} = item;
      const itemRect = node.getBoundingClientRect();
      targetItem = document.getElementById(elementId);
      targetRect = targetItem?.getBoundingClientRect();

      const top =
        itemRect?.top +
        node.clientHeight -
        // @ts-ignore
        (targetRect ? targetRect.top : 0) -
        (offset ? offset : 0) -
        1;

      return {id, top};
    });
    const newActive =
      itemsPos
        .filter((item) => item.top > 0)
        .sort((a, b) => {
          return a.top - b.top;
        })[0]?.id || itemsPos[0].id;
    if (active !== newActive) {
      setActive(newActive);
    }
    // eslint-disable-next-line
  }, [active, offset]);

  useThrottledOnScroll(elementId, findActiveIndex, 100);

  return {active, setActive};
};

const getItemsClient = (items: IContentItemProps[]) => {
  return items.map(({id}) => {
    return {id, node: document.getElementById(id)};
  });
};

export default useScrollSpy;
