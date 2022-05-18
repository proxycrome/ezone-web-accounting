
import ChartOfAccount from "./ChartOfAccount";

const ChartOfAcctConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/chart_of_account",
      component: ChartOfAccount,
    },
  ],
};

export default ChartOfAcctConfig;

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
