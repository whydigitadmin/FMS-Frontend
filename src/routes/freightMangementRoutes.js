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
const ShipmentAO = Loadable(lazy(() => import('views/transaction/shipmentAO')));
const ShipmentFollowUp = Loadable(lazy(() => import('views/transaction/shipmentFollowUp')));
const MasterAirWayBill = Loadable(lazy(() => import('views/transaction/MasterAirWayBill')));
const AirIBTransactionPreAlert = Loadable(lazy(() => import('views/transaction/AirIBTransactionPreAlert')));
const ShipmentFollowUpSO = Loadable(lazy(() => import('views/transaction/shipmentFollowUpSO')));
const HouseContainerAllocationSO = Loadable(lazy(() => import('views/transaction/HouseContainerAllocationSO')));
const ShipmentSO = Loadable(lazy(() => import('views/transaction/shipmentSO')));

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
    },
    {
      path: '/transaction/shipmentAO',
      element: <ShipmentAO />
    },
    {
      path: '/transaction/shipmentFollowUp',
      element: <ShipmentFollowUp />
    },
    {
      path: '/transaction/masterAirWayBill',
      element: <MasterAirWayBill />
    },
    {
      path: '/transaction/airIBTransactionPreAlert',
      element: <AirIBTransactionPreAlert />
    },
    {
      path: '/transaction/shipmentFollowUpSO',
      element: <ShipmentFollowUpSO />
    },
    {
      path: '/transaction/houseContainerAllocationSO',
      element: <HouseContainerAllocationSO />
    },
    {
      path: '/transaction/shipmentSO',
      element: <ShipmentSO />
    }
  ]
};

export default freightManagementRoutes;
