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
const Department = Loadable(lazy(() => import('views/master/Department')));
const Designation = Loadable(lazy(() => import('views/master/Designation')));
const EmployeeDetails = Loadable(lazy(() => import('views/master/EmployeeDetails')));
const DocumentType = Loadable(lazy(() => import('views/master/DocumentType')));
const DocumentTypeMapping = Loadable(lazy(() => import('views/master/DocumentTypeMapping')));
const GstDetails = Loadable(lazy(() => import('views/master/GstDetails')));
const Container = Loadable(lazy(() => import('views/master/Container')));
const Events = Loadable(lazy(() => import('views/master/Events')));
const Segments = Loadable(lazy(() => import('views/master/Segments')));
const Region = Loadable(lazy(() => import('views/master/Region')));
const ListOfValues = Loadable(lazy(() => import('views/master/ListOfValues')));
const TermsAndConditions = Loadable(lazy(() => import('views/master/TermsAndConditions')));
const PartyScreening = Loadable(lazy(() => import('views/master/PartyScreening')));
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
    },
    {
      path: '/master/Department',
      element: <Department />
    },
    {
      path: '/master/Designation',
      element: <Designation />
    },
    {
      path: '/master/EmployeeDetails',
      element: <EmployeeDetails />
    },
    {
      path: '/master/DocumentType',
      element: <DocumentType />
    },
    {
      path: '/master/DocumentTypeMapping',
      element: <DocumentTypeMapping />
    },
    {
      path: '/master/GstDetails',
      element: <GstDetails />
    },
    {
      path: '/master/Container',
      element: <Container />
    },
    {
      path: '/master/Events',
      element: <Events />
    },
    {
      path: '/master/Segments',
      element: <Segments />
    },
    {
      path: '/master/Region',
      element: <Region />
    },
    {
      path: '/master/ListOfValues',
      element: <ListOfValues />
    },
    {
      path: '/master/TermsAndConditions',
      element: <TermsAndConditions />
    },
    {
      path: '/master/PartyScreening',
      element: <PartyScreening />
    }
  ]
};

export default freightManagementRoutes;
