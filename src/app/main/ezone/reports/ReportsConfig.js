import Reports from './Reports';

const ReportsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/ezone/reports',
      component: Reports,
    },
  ],
};

export default ReportsConfig;
