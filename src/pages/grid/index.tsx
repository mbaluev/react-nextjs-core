import {Master} from '@ui/shop/master';
import {PageLayoutFull} from '@components/pageLayoutFull';
import {Table} from '@components/table';

const Grid = () => {
  return (
    <PageLayoutFull>
      <Table />
    </PageLayoutFull>
  );
};

Grid.Layout = Master;
export default Grid;
