import Banking from './Banking';
import AddBank from './AddBank/Bank';
import PreviewBank from './PreviewBank/index';
import TransferTo from './AddTransactions/TransferTo';
import TransferFrom from './AddTransactions/TransferFrom';

const BankingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/banking',
      component: Banking,
      exact: true,
    },
    {
      path: '/banking/:bankingId',
      component: AddBank,
      exact: true,
    },
    {
      path: '/banking/preview/:bankingId',
      component: PreviewBank,
    },
    {
      path: '/banking/transfer/to',
      component: TransferTo,
    },
    {
      path: '/banking/transfer/from',
      component: TransferFrom,
    },
  ],
};

export default BankingConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/
