// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const transaction = {
  id: 'transaction',
  title: 'Transaction',
  //   caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'transaction',
      title: 'Transaction',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'shipmentAO',
          title: 'Shipment AO',
          type: 'item',
          url: '/transaction/shipmentAO'
        },
        {
          id: 'shipmentFollowUp',
          title: 'Shipment Follow-Up (AO)',
          type: 'item',
          url: '/transaction/shipmentFollowUp'
        },
        {
          id: 'masterAirWayBill',
          title: 'Master Air Way Bill',
          type: 'item',
          url: '/transaction/masterAirWayBill'
        },
        {
          id: 'airIBTransactionPreAlert',
          title: 'Air I/B Transaction Pre-Alert',
          type: 'item',
          url: '/transaction/airIBTransactionPreAlert'
        },
        {
          id: 'shipmentFollowUpSO',
          title: 'Shipment Follow-Up (SO)',
          type: 'item',
          url: '/transaction/shipmentFollowUpSO'
        },
        {
          id: 'houseContainerAllocationSO',
          title: 'House - Container Allocation (SO)',
          type: 'item',
          url: '/transaction/houseContainerAllocationSO'
        },
        {
          id: 'shipmentSO',
          title: 'Shipment SO',
          type: 'item',
          url: '/transaction/shipmentSO'
        }
      ]
    }
  ]
};

export default transaction;
