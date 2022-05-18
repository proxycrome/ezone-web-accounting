import FusePageCarded from '@fuse/core/FusePageCarded';
// import { useDeepCompareEffect } from '@fuse/hooks';
// import Button from '@material-ui/core/Button';
// import Tab from '@material-ui/core/Tab';
// import Tabs from '@material-ui/core/Tabs';
// import Typography from '@material-ui/core/Typography';
// import withReducer from 'app/store/withReducer';
// import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import _ from '@lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { resetProduct, newProduct, getProduct } from '../store/productSlice';
// import reducer from '../store';
import TransferToHeader from './TransferToHeader';
import BasicInfoTab from './CreateTransferTo';
// import InventoryTab from './tabs/InventoryTab';
// import PricingTab from './tabs/PricingTab';
// import ProductImagesTab from './tabs/ProductImagesTab';
// import ShippingTab from './tabs/ShippingTab';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
//   accountName: yup
//     .string()
//     .required('You must enter an account name')
//     .min(5, 'The account name must be at least 5 characters'),

//   accountCode: yup.string().required('You must enter an account code'),

//   bankName: yup.string().required('You must enter an bank name'),

//   accountNumber: yup.string().required('You must enter an account number'),

  toAccount: yup.string().required('You must select an account'),
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

  //   useDeepCompareEffect(() => {
  //     function updateProductState() {
  //       const { bankingId } = routeParams;

  //       if (bankingId === 'new') {
  //         /**
  //          * Create New Product data
  //          */
  //         dispatch(newProduct());
  //       } else {
  //         /**
  //          * Get Product data
  //          */
  //         dispatch(getProduct(routeParams)).then((action) => {
  //           /**
  //            * If the requested product is not exist show message
  //            */
  //           if (!action.payload) {
  //             setNoProduct(true);
  //           }
  //         });
  //       }
  //     }

  //     updateProductState();
  //   }, [dispatch, routeParams]);

  // useEffect(() => {
  //   // if (!product) {
  //   //  return;
  //   // }
  //   /**
  //    * Reset the form on product state changes
  //    */
  //   reset(product);
  // }, [product, reset]);

  //   useEffect(() => {
  //     return () => {
  //       /**
  //        * Reset Product on component unload
  //        */
  //       dispatch(resetProduct());
  //       setNoProduct(false);
  //     };
  //   }, [dispatch]);

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
        header={<TransferToHeader />}
        content={
          <div className="p-16 sm:p-24 max-w-2xl">
            <div>
              <BasicInfoTab />
            </div>
          </div>
        }
        innerScroll
      />
    </FormProvider>
  );
}

export default AddBank;
