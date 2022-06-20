import React from 'react';
import {
  Table as VTable,
  Column as VColumn,
  WindowScroller,
  AutoSizer,
  GridCellProps,
  TableRowProps,
} from 'react-virtualized';
import {classNames} from '@utils/classNames/classNames';
import 'react-virtualized/styles.css';
import './index.scss';

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

// <Grid
// className="table"
// cellRenderer={cellRenderer}
// columnCount={list[0].length}
// columnWidth={300}
// rowCount={list.length}
// rowHeight={40}
// height={height}
// width={width}
// isScrolling={isScrolling}
// onScroll={onChildScroll}
// scrollTop={scrollTop}
// style={{height: 'auto'}}
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
  const cls = classNames('table-cell', {
    'table-cell_first': columnIndex === 0,
    'table-cell_last': columnIndex === list[rowIndex].length - 1,
    'table-row_first': rowIndex === 0,
    'table-row_last': rowIndex === list.length - 1,
  });
  return (
    <div key={key} className={cls} style={style}>
      {list[rowIndex][columnIndex]}
    </div>
  );
};

interface ITable {
  rowCount?: number;
}

export const Table = (props: ITable) => {
  const {rowCount = 100} = props;
  const tableItem = {
    index: 1,
    name: 'Brian Vaughn',
    description: 'Software Engineer',
  };
  const tableList: any[] = [];
  for (let i = 1; i < rowCount; i++) {
    const item = {...tableItem};
    item.index = i;
    tableList.push(item);
  }
  return (
    <WindowScroller>
      {({height, isScrolling, onChildScroll, scrollTop, registerChild}) => {
        return (
          <AutoSizer
            disableHeight
            className="table-auto-sizer"
            style={{width: 'auto'}}
          >
            {({width}) => {
              return (
                <div ref={registerChild} className="table-register-child">
                  <VTable
                    autoHeight={true}
                    height={height}
                    width={width}
                    headerHeight={40}
                    rowHeight={40}
                    rowCount={tableList.length}
                    rowGetter={({index}) => tableList[index]}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    rowClassName="table-row"
                    gridClassName="table-grid"
                    className="table"
                  >
                    <VColumn
                      className="table-cell"
                      headerClassName="table-cell"
                      label="#"
                      dataKey="index"
                      width={100}
                    />
                    <VColumn
                      className="table-cell"
                      headerClassName="table-cell"
                      label="Name"
                      dataKey="name"
                      width={200}
                    />
                    <VColumn
                      className="table-cell"
                      headerClassName="table-cell"
                      width={200}
                      label="Description"
                      dataKey="description"
                    />
                    <VColumn
                      className="table-cell"
                      headerClassName="table-cell"
                      width={200}
                      label="Description"
                      dataKey="description"
                    />
                    <VColumn
                      className="table-cell"
                      headerClassName="table-cell"
                      width={200}
                      label="Description"
                      dataKey="description"
                    />
                    <VColumn
                      className="table-cell"
                      headerClassName="table-cell"
                      width={200}
                      label="Description"
                      dataKey="description"
                    />
                    <VColumn
                      className="table-cell"
                      headerClassName="table-cell"
                      width={200}
                      label="Description"
                      dataKey="description"
                    />
                  </VTable>
                </div>
              );
            }}
          </AutoSizer>
        );
      }}
    </WindowScroller>
  );
};
