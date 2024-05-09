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
        }
      ]
    }
  ]
};

export default fms;
