import {Master} from '@ui/shop/master';
import {Table} from '@components/table';
import {PageLayout} from '@components/pageLayout';
import numeral from 'numeral';

const Grid = () => {
  const rowCount = 1000;
  const rowCountStr = numeral(rowCount).format();
  return (
    <PageLayout
      title={`Virtualized table with window scroller (${rowCountStr} items)`}
    >
      <Table rowCount={rowCount} />
    </PageLayout>
  );
};

Grid.Layout = Master;
export default Grid;
