import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const CityMaster = Loadable(lazy(() => import('views/master/CityMaster')));
const StateMaster = Loadable(lazy(() => import('views/master/StateMaster')));
const CountryMaster = Loadable(lazy(() => import('views/master/CountryMaster')));
const CompanyDetails = Loadable(lazy(() => import('views/master/CompanyDetails')));
const Port = Loadable(lazy(() => import('views/master/Port')));
// const TaxMaster = Loadable(lazy(() => import('views/Finance/TaxMaster')));

const freightManagementRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/master/CityMaster',
      element: <CityMaster />
    },
    {
      path: '/master/StateMaster',
      element: <StateMaster />
    },
    {
      path: '/master/CountryMaster',
      element: <CountryMaster />
    },
    {
      path: '/master/CompanyDetails',
      element: <CompanyDetails />
    },
    {
      path: '/master/Port',
      element: <Port />
    }
    // {
    //   path: '/Finance/TaxMaster',
    //   element: <TaxMaster />
    // }
  ]
};

export default freightManagementRoutes;
