import React from 'react';
import {
  Grid,
  WindowScroller,
  AutoSizer,
  GridCellProps,
} from 'react-virtualized';

// Grid data as an array of arrays
const listItem = [
  1,
  'Brian Vaughn',
  'Software Engineer',
  'San Jose',
  'CA',
  95125,
];

const list: any[] = [];
for (let i = 1; i < 100; i++) {
  const item = [...listItem];
  item[0] = i;
  list.push(item);
}

// <List
//     autoHeight
//     height={height}
//     isScrolling={isScrolling}
//     onScroll={onChildScroll}
//     rowCount={10000}
//     rowHeight={40}
//     rowRenderer={rowRenderer}
//     scrollTop={scrollTop}
//     width={width}
// />

// const rowRenderer = (props: ListRowProps) => {
//   const {key, index, style} = props;
//   return (
//     <div key={key} style={style}>
//       {index}
//     </div>
//   );
// };

const cellRenderer = (props: GridCellProps) => {
  const {columnIndex, key, rowIndex, style} = props;
  return (
    <div
      key={key}
      style={{
        ...style,
        borderTop: 'solid 1px #eee',
        borderRight: 'solid 1px #eee',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      {list[rowIndex][columnIndex]}
    </div>
  );
};

export const Table = () => {
  return (
    <WindowScroller>
      {({height, isScrolling, onChildScroll, scrollTop, registerChild}) => {
        return (
          <AutoSizer disableHeight>
            {({width}) => {
              return (
                <div ref={registerChild}>
                  <Grid
                    cellRenderer={cellRenderer}
                    columnCount={list[0].length}
                    columnWidth={
                      typeof window !== 'undefined'
                        ? window.innerWidth / list[0].length
                        : 100
                    }
                    rowCount={list.length}
                    rowHeight={40}
                    height={height}
                    width={width}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    style={{height: 'auto'}}
                  />
                </div>
              );
            }}
          </AutoSizer>
        );
      }}
    </WindowScroller>
  );
};
