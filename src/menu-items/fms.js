// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const fms = {
  id: 'master',
  title: 'Master',
  //   caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'master',
      title: 'Master',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'cityMaster',
          title: 'City Master',
          type: 'item',
          url: '/master/CityMaster'
        },
        {
          id: 'stateMaster',
          title: 'State Master',
          type: 'item',
          url: '/master/StateMaster'
        },
        {
          id: 'countryMaster',
          title: 'Country Master',
          type: 'item',
          url: '/master/CountryMaster'
        },
        {
          id: 'companyDetails',
          title: 'Company Details',
          type: 'item',
          url: '/master/CompanyDetails'
        },
        {
          id: 'port',
          title: 'Port',
          type: 'item',
          url: '/master/Port'
        },
        {
          id: 'department',
          title: 'Department',
          type: 'item',
          url: '/master/Department'
        },
        {
          id: 'designation',
          title: 'Designation',
          type: 'item',
          url: '/master/Designation'
        },
        {
          id: 'employeeDetails',
          title: 'Employee Details',
          type: 'item',
          url: '/master/EmployeeDetails'
        },
        {
          id: 'documentType',
          title: 'Document Type',
          type: 'item',
          url: '/master/DocumentType'
        },
        {
          id: 'documentTypeMapping',
          title: 'Document Type Mapping',
          type: 'item',
          url: '/master/DocumentTypeMapping'
        },
        {
          id: 'gstDetails',
          title: 'Gst Details',
          type: 'item',
          url: '/master/GstDetails'
        },
        {
          id: 'container',
          title: 'Container',
          type: 'item',
          url: '/master/Container'
        },
        {
          id: 'events',
          title: 'Events',
          type: 'item',
          url: '/master/Events'
        },
        {
          id: 'segments',
          title: 'Segments',
          type: 'item',
          url: '/master/Segments'
        },
        {
          id: 'region',
          title: 'Region',
          type: 'item',
          url: '/master/Region'
        },
        {
          id: 'listOfValues',
          title: 'List Of Values',
          type: 'item',
          url: '/master/ListOfValues'
        },
        {
          id: 'termsAndConditions',
          title: 'Terms And Conditions',
          type: 'item',
          url: '/master/TermsAndConditions'
        },
        {
          id: 'partyScreening',
          title: 'Party Screening',
          type: 'item',
          url: '/master/PartyScreening'
        }
      ]
    }
  ]
};

export default fms;
