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
        },
        {
          id: 'seaIBTransactionDeliveryOrder',
          title: 'Sea I/B Transaction Delivery Order',
          type: 'item',
          url: '/transaction/seaIBTransactionDeliveryOrder'
        },
        {
          id: 'seaIBTransactionHouseContainerAllocation',
          title: 'Sea I/B Transaction House Container Allocation',
          type: 'item',
          url: '/transaction/seaIBTransactionHouseContainerAllocation'
        },
        {
          id: 'seaIBTransactionPreAlert',
          title: 'Sea I/B Transaction Pre-Alert',
          type: 'item',
          url: '/transaction/seaIBTransactionPreAlert'
        },
        {
          id: 'airIBTransactionAdvanceCan',
          title: 'Air I/B Transaction Advance CAN',
          type: 'item',
          url: '/transaction/airIBTransactionAdvanceCan'
        },
        {
          id: 'seaIBTransactionAdvanceCan',
          title: 'Sea I/B Transaction Advance CAN',
          type: 'item',
          url: '/transaction/seaIBTransactionAdvanceCan'
        },
        {
          id: 'jobCardAO',
          title: 'JobCard AO',
          type: 'item',
          url: '/transaction/jobCardAO'
        },
        {
          id: 'jobCardAI',
          title: 'JobCard AI',
          type: 'item',
          url: '/transaction/jobCardAI'
        },
        {
          id: 'jobCardSO',
          title: 'JobCard SO',
          type: 'item',
          url: '/transaction/jobCardSO'
        },
        {
          id: 'jobCardSI',
          title: 'JobCard SI',
          type: 'item',
          url: '/transaction/jobCardSI'
        },
        {
          id: 'houseAirWayBill',
          title: 'House Air Way Bill',
          type: 'item',
          url: '/transaction/houseAirWayBill'
        },
        {
          id: 'houseBillOfLading',
          title: 'House Bill of Lading',
          type: 'item',
          url: '/transaction/houseBillOfLading'
        }
      ]
    }
  ]
};

export default transaction;
