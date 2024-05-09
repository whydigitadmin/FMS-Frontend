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
          title: 'CityMaster',
          type: 'item',
          url: '/master/CityMaster'
        },
        {
          id: 'stateMaster',
          title: 'StateMaster',
          type: 'item',
          url: '/master/StateMaster'
        },
        {
          id: 'countryMaster',
          title: 'CountryMaster',
          type: 'item',
          url: '/master/CountryMaster'
        },
        {
          id: 'companyDetails',
          title: 'CompanyDetails',
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
