import FusePageCarded from '@fuse/core/FusePageCarded';
// import withReducer from 'app/store/withReducer';
// import reducer from '../store';
import BankingHeader from './BankingHeader';
import BankingTable from './BankingTable';

function Products() {
  return (
    <FusePageCarded
      classes={{
        content: 'flex',
        contentCard: 'overflow-hidden',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={<BankingHeader />}
      content={<BankingTable />}
      innerScroll
    />
  );
}

export default Products;
// export default withReducer('eCommerceApp', reducer)(Products);
