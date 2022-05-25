// import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
// import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import _ from '@lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { resetProduct, newProduct, getProduct } from '../store/productSlice';
// import reducer from '../store';
import BankHeader from './BankHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
// import InventoryTab from './tabs/InventoryTab';
// import PricingTab from './tabs/PricingTab';
// import ProductImagesTab from './tabs/ProductImagesTab';
// import ShippingTab from './tabs/ShippingTab';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  accountName: yup
    .string()
    .required('You must enter an account name')
    .min(5, 'The account name must be at least 5 characters'),

  accountCode: yup.string().required('You must enter an account code'),

  bankName: yup.string().required('You must enter an bank name'),

  accountNumber: yup.string().required('You must enter an account number'),
});

function AddBank(props) {
  const dispatch = useDispatch();
  // const product = useSelector(({ eCommerceApp }) => eCommerceApp?.product);

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noProduct, setNoProduct] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateProductState() {
      const { bankingId } = routeParams;

      if (bankingId === 'new') {
        /**
         * Create New Product data
         */
        dispatch(newProduct());
      } else {
        /**
         * Get Product data
         */
        dispatch(getProduct(routeParams)).then((action) => {
          /**
           * If the requested product is not exist show message
           */
          if (!action.payload) {
            setNoProduct(true);
          }
        });
      }
    }

    updateProductState();
  }, [dispatch, routeParams]);

  // useEffect(() => {
  //   // if (!product) {
  //   //  return;
  //   // }
  //   /**
  //    * Reset the form on product state changes
  //    */
  //   reset(product);
  // }, [product, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Product on component unload
       */
      dispatch(resetProduct());
      setNoProduct(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested products is not exists
   */
  if (noProduct) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There is no such product!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/apps/e-commerce/products"
          color="inherit"
        >
          Go to Products Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while product data is loading and form is setted
   */
  // if (
  //   _.isEmpty(form) ||
  //   (routeParams.bankingId !== 'new')
  // ) {
  //   return <FuseLoading />;
  // }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        classes={{
          toolbar: 'p-0',
          header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
        }}
        header={<BankHeader />}
        // contentToolbar={
        //   <Tabs
        //     value={tabValue}
        //     onChange={(e) => handleTabChange(e, e.target.value)}
        //     indicatorColor="primary"
        //     textColor="primary"
        //     variant="scrollable"
        //     scrollButtons="auto"
        //     classes={{ root: 'w-full h-64' }}
        //   >
        //     {/* <Tab className="h-64" label="Basic Info" /> */}
        //     {/* <Tab className="h-64" label="Product Images" />
        //     <Tab className="h-64" label="Pricing" />
        //     <Tab className="h-64" label="Inventory" />
        //     <Tab className="h-64" label="Shipping" /> */}
        //   </Tabs>
        // }
        content={
          <div className="p-16 sm:p-24 max-w-2xl">
            <div className={tabValue !== 0 ? 'hidden' : ''}>
              <BasicInfoTab />
            </div>

            {/* <div className={tabValue !== 1 ? 'hidden' : ''}>
              <ProductImagesTab />
            </div> */}

            {/* <div className={tabValue !== 2 ? 'hidden' : ''}>
              <PricingTab />
            </div> */}

            {/* <div className={tabValue !== 3 ? 'hidden' : ''}>
              <InventoryTab />
            </div> */}

            {/* <div className={tabValue !== 4 ? 'hidden' : ''}>
              <ShippingTab />
            </div> */}
          </div>
        }
        innerScroll
      />
    </FormProvider>
  );
}

export default AddBank;
// export default withReducer('eCommerceApp', reducer)(Product);
