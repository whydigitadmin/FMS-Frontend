import ClearIcon from '@mui/icons-material/Clear';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, ButtonBase, FormHelperText, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useRef, useState, useMemo } from 'react';
import 'react-tabs/style/react-tabs.css';
import { MaterialReactTable } from 'material-react-table';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { IconButton } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';
import { Tabs, Tab } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const shipmentSO = () => {
  const [formData, setFormData] = useState({
    docId: '',
    docDate: null,
    pol: '',
    pod: '',
    fpod: '',
    nominatedBy: '',
    deliveryTerms: '',
    freight: '',
    shipperInvoiceNo: '',
    billOfEntry: '',
    projectCargo: true,
    directMaster: true,
    jobAssigned: true,
    shipper: '',
    saddType: '',
    saddress: '',
    consignee: '',
    caddType: '',
    caddress: '',
    notify: '',
    naddType: '',
    naddress: '',
    salesCategory: '',
    salesPerson: '',
    totalNoOfPkgs: '',
    totalChWt: '',
    totEstimationCost: '',
    totalGrtWt: '',
    totalVolWt: ''
  });
  //   const [listView, setListView] = useState(false);

  const theme = useTheme();
  0;
  const anchorRef = useRef(null);
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  //   const [editMode, setEditMode] = useState(false);
  //   const [currentRowData, setCurrentRowData] = useState(null);

  //   const [id, setId] = useState('');

  const [fieldErrors, setFieldErrors] = useState({
    docId: '',
    docDate: '',
    pol: '',
    pod: '',
    fpod: '',
    nominatedBy: '',
    deliveryTerms: '',
    freight: '',
    shipperInvoiceNo: '',
    billOfEntry: '',
    projectCargo: true,
    directMaster: true,
    jobAssigned: true,
    shipper: '',
    saddType: '',
    saddress: '',
    consignee: '',
    caddType: '',
    caddress: '',
    notify: '',
    naddType: '',
    naddress: '',
    salesCategory: '',
    salesPerson: '',
    totalNoOfPkgs: '',
    totalChWt: '',
    totEstimationCost: '',
    totalGrtWt: '',
    totalVolWt: ''
  });

  const [tableErrors, setTableErrors] = useState([
    {
      custPoNo: '',
      custPoDt: '',
      industry: '',
      itemDescription: '',
      qty: '',
      uom: '',
      grWt: '',
      chWt: '',
      dimL: '',
      dimW: '',
      dimH: '',
      unit: '',
      volume: ''
    }
  ]);

  const [tableData, setTableData] = useState([
    {
      sidNO: 1,
      custPoNo: '',
      custPoDt: '',
      industry: '',
      itemDescription: '',
      qty: '',
      uom: '',
      grWt: '',
      chWt: '',
      dimL: '',
      dimW: '',
      dimH: '',
      unit: '',
      volume: ''
    }
  ]);

  const handleAddRowPackingList = () => {
    const newRow = {
      sidNO: Date.now(),
      custPoNo: '',
      custPoDt: '',
      industry: '',
      itemDescription: '',
      qty: '',
      uom: '',
      grWt: '',
      chWt: '',
      dimL: '',
      dimW: '',
      dimH: '',
      unit: '',
      volume: ''
    };
    setTableData([...tableData, newRow]);
    setTableErrors([
      ...tableErrors,
      {
        custPoNo: '',
        custPoDt: '',
        industry: '',
        itemDescription: '',
        qty: '',
        uom: '',
        grWt: '',
        chWt: '',
        dimL: '',
        dimW: '',
        dimH: '',
        unit: '',
        volume: ''
      }
    ]);
  };

  const handleDeleteRowPackingList = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
    setTableErrors(tableErrors.filter((_, index) => index !== id - 1));
  };

  const [tableErrors1, setTableErrors1] = useState([
    {
      partyVendor: '',
      linearCarrier: '',
      billToCustomer: '',
      chargeCode: '',
      description: '',
      amountInInr: '',
      estimatePayDate: null,
      funReqDate: null
    }
  ]);

  const [tableData1, setTableData1] = useState([
    {
      partyVendor: '',
      linearCarrier: '',
      billToCustomer: '',
      chargeCode: '',
      description: '',
      amountInInr: '',
      estimatePayDate: null,
      funReqDate: null
    }
  ]);

  const handleAddRowCostEstimate = () => {
    const newRow = {
      partyVendor: '',
      linearCarrier: '',
      billToCustomer: '',
      chargeCode: '',
      description: '',
      amountInInr: '',
      estimatePayDate: null,
      funReqDate: null
    };
    setTableData1([...tableData1, newRow]);
    setTableErrors1([
      ...tableErrors1,
      {
        partyVendor: '',
        linearCarrier: '',
        billToCustomer: '',
        chargeCode: '',
        description: '',
        amountInInr: '',
        estimatePayDate: null,
        funReqDate: null
      }
    ]);
  };

  const handleDeleteRowCostEstimate = (id) => {
    setTableData1(tableData1.filter((row) => row.id !== id));
    setTableErrors1(tableErrors1.filter((_, index) => index !== id - 1));
  };

  const handleKeyDown = (e, row) => {
    if (e.key === 'Tab' && row.id === tableData[tableData.length - 1].id) {
      e.preventDefault();
      handleAddRow();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: '' });
  };

  //   const handleDateChange = (name, date) => {
  //     if (date && date.isValid()) {
  //       setFormData({ ...formData, [name]: date });
  //       setFieldErrors({ ...fieldErrors, [name]: '' });
  //     } else {
  //       setFieldErrors({ ...fieldErrors, [name]: `${name} is required` });
  //     }
  //   };

  const handleDateChange = (index, name, date) => {
    const newTableData = [...tableData1];
    const newFieldErrors = { ...fieldErrors };

    if (date && dayjs(date).isValid()) {
      newTableData[index][name] = date.format('YYYY-MM-DD');
      setTableData1(newTableData);
      if (newFieldErrors[index]) {
        newFieldErrors[index][name] = '';
      }
    } else {
      if (!newFieldErrors[index]) {
        newFieldErrors[index] = {};
      }
      newFieldErrors[index][name] = `${name} is required`;
    }

    setFieldErrors(newFieldErrors);
  };

  const handleClear = () => {
    setFormData({
      docId: '',
      docDate: null,
      pol: '',
      pod: '',
      fpod: '',
      nominatedBy: '',
      deliveryTerms: '',
      freight: '',
      shipperInvoiceNo: '',
      billOfEntry: '',
      projectCargo: true,
      directMaster: true,
      jobAssigned: true,
      shipper: '',
      saddType: '',
      saddress: '',
      consignee: '',
      caddType: '',
      caddress: '',
      notify: '',
      naddType: '',
      naddress: '',
      salesCategory: '',
      salesPerson: '',
      totalNoOfPkgs: '',
      totalChWt: '',
      totEstimationCost: '',
      totalGrtWt: '',
      totalVolWt: ''
    });
    setFieldErrors({
      docId: '',
      docDate: null,
      pol: '',
      pod: '',
      fpod: '',
      nominatedBy: '',
      deliveryTerms: '',
      freight: '',
      shipperInvoiceNo: '',
      billOfEntry: '',
      projectCargo: true,
      directMaster: true,
      jobAssigned: true,
      shipper: '',
      saddType: '',
      saddress: '',
      consignee: '',
      caddType: '',
      caddress: '',
      notify: '',
      naddType: '',
      naddress: '',
      salesCategory: '',
      salesPerson: '',
      totalNoOfPkgs: '',
      totalChWt: '',
      totEstimationCost: '',
      totalGrtWt: '',
      totalVolWt: ''
    });
    setTableErrors([]);
    setTableData([
      {
        custPoNo: '',
        custPoDt: '',
        industry: '',
        itemDescription: '',
        qty: '',
        uom: '',
        grWt: '',
        chWt: '',
        dimL: '',
        dimW: '',
        dimH: '',
        unit: '',
        volume: ''
      }
    ]);
    setTableErrors1([]);
    setTableData1([
      {
        partyVendor: '',
        linearCarrier: '',
        billToCustomer: '',
        chargeCode: '',
        description: '',
        amountInInr: '',
        estimatePayDate: null,
        funReqDate: null
      }
    ]);
  };

  const handleSave = () => {
    console.log('first');
    // const errors = {};
    // if (!formData.docId) {
    //   errors.docId = 'So No is required';
    // }
    // if (!formData.docDate) {
    //   errors.docDate = 'So Date is required';
    // }
    // if (!formData.pol) {
    //   errors.pol = 'Pol is required';
    // }
    // if (!formData.pod) {
    //   errors.pod = 'Pod is required';
    // }
    // if (!formData.fpod) {
    //   errors.fpod = 'Fpod is required';
    // }
    // if (!formData.nominatedBy) {
    //   errors.nominatedBy = 'Nominated By is required';
    // }
    // if (!formData.deliveryTerms) {
    //   errors.deliveryTerms = 'Delivery Terms is required';
    // }
    // if (!formData.freight) {
    //   errors.freight = 'Freight is required';
    // }
    // if (!formData.shipperInvoiceNo) {
    //   errors.shipperInvoiceNo = 'Shipper Invoice No is required';
    // }
    // if (!formData.billOfEntry) {
    //   errors.billOfEntry = 'Bill of Entry is required';
    // }
    // if (!formData.shipper) {
    //   errors.shipper = 'Shipper is required';
    // }
    // if (!formData.saddType) {
    //   errors.saddType = 'AddType is required';
    // }
    // if (!formData.saddress) {
    //   errors.saddress = 'Address is required';
    // }
    // if (!formData.consignee) {
    //   errors.consignee = 'Consignee is required';
    // }
    // if (!formData.caddType) {
    //   errors.caddType = 'AddType is required';
    // }
    // if (!formData.caddress) {
    //   errors.caddress = 'Address is required';
    // }
    // if (!formData.notify) {
    //   errors.notify = 'Notify is required';
    // }
    // if (!formData.naddType) {
    //   errors.naddType = 'AddType is required';
    // }
    // if (!formData.naddress) {
    //   errors.naddress = 'Address is required';
    // }
    // if (!formData.salesCategory) {
    //   errors.salesCategory = 'Sales Category is required';
    // }
    // if (!formData.salesPerson) {
    //   errors.salesPerson = 'Sales Person is required';
    // }
    // if (!formData.totalNoOfPkgs) {
    //   errors.totalNoOfPkgs = 'Total No of Pkgs is required';
    // }
    // if (!formData.totalChWt) {
    //   errors.totalChWt = 'Total Ch Wt is required';
    // }
    // if (!formData.totEstimationCost) {
    //   errors.totEstimationCost = 'Total Estimation Cost is required';
    // }
    // if (!formData.totalGrtWt) {
    //   errors.totalGrtWt = 'Total Gr Wt is required';
    // }
    // if (!formData.totalVolWt) {
    //   errors.totalVolWt = 'Total Vol Wt is required';
    // }

    // let tableDataValid = true;
    // const newTableErrors = tableData.map((row) => {
    //   const rowErrors = {};
    //   if (!row.custPoNo) {
    //     rowErrors.custPoNo = 'cust PO No is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.custPoDt) {
    //     rowErrors.custPoDt = 'cust PO Dt is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.industry) {
    //     rowErrors.industry = 'Industry is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.itemDescription) {
    //     rowErrors.itemDescription = 'Item Description is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.qty) {
    //     rowErrors.qty = 'Qty is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.uom) {
    //     rowErrors.uom = 'Uom is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.grWt) {
    //     rowErrors.grWt = 'Gr Wt is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.chWt) {
    //     rowErrors.chWt = 'Ch Wt is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.dimL) {
    //     rowErrors.dimL = 'Dim (L) is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.dimW) {
    //     rowErrors.dimW = 'Dim (W) is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.dimH) {
    //     rowErrors.dimH = 'Dim (H) is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.unit) {
    //     rowErrors.unit = 'Unit is required';
    //     tableDataValid = false;
    //   }
    //   if (!row.volume) {
    //     rowErrors.volume = 'Volume is required';
    //     tableDataValid = false;
    //   }
    //   return rowErrors;
    // });
    // setFieldErrors(errors);

    // setTableErrors(newTableErrors);

    // let tableDataValid1 = true;
    // const newTableErrors1 = tableData1.map((row) => {
    //   const rowErrors1 = {};
    //   if (!row.partyVendor) {
    //     rowErrors1.partyVendor = 'Party Vendor is required';
    //     tableDataValid1 = false;
    //   }
    //   if (!row.linearCarrier) {
    //     rowErrors1.linearCarrier = 'Linear Carrier is required';
    //     tableDataValid1 = false;
    //   }
    //   if (!row.billToCustomer) {
    //     rowErrors1.billToCustomer = 'Bill To Customer is required';
    //     tableDataValid1 = false;
    //   }
    //   if (!row.chargeCode) {
    //     rowErrors1.chargeCode = 'Charge Code is required';
    //     tableDataValid1 = false;
    //   }
    //   if (!row.description) {
    //     rowErrors1.description = 'Description is required';
    //     tableDataValid1 = false;
    //   }
    //   if (!row.amountInInr) {
    //     rowErrors1.amountInInr = 'Amount INR is required';
    //     tableDataValid1 = false;
    //   }
    //   if (!row.estimatePayDate) {
    //     rowErrors1.estimatePayDate = 'Estimate Pay Date is required';
    //     tableDataValid1 = false;
    //   }
    //   if (!row.funReqDate) {
    //     rowErrors1.funReqDate = 'Fund Req Date is required';
    //     tableDataValid1 = false;
    //   }
    //   return rowErrors1;
    // });

    // setTableErrors1(newTableErrors1);

    // if (Object.keys(errors).length > 0 || !tableDataValid || !tableDataValid1) {
    //   return;
    // }

    const payload = {
      ...formData,
      projectCargo: formData.projectCargo ? true : false,
      directMaster: formData.directMaster ? true : false,
      jobAssigned: formData.jobAssigned ? true : false,
      docDate: formData.docDate ? formData.docDate.format('YYYY-MM-DD') : '',
      totalNoOfPkgs: parseInt(formData.totalNoOfPkgs),
      totalChWt: parseInt(formData.totalChWt),
      totEstimationCost: parseInt(formData.totEstimationCost),
      totalGrtWt: parseInt(formData.totalGrtWt),
      totalVolWt: parseInt(formData.totalVolWt),
      orgId: 1, // Update with actual orgId if needed
      soPackingListDTO: tableData.map((row) => ({
        custPoNo: row.custPoNo,
        custPoDt: row.custPoDt,
        industry: row.industry === 'No' ? 'No' : 'Yes',
        itemDescription: row.itemDescription,
        qty: parseInt(row.qty),
        uom: row.uom === 'No' ? 'No' : 'Yes',
        grWt: row.grWt,
        chWt: row.chWt,
        dimL: parseInt(row.dimL),
        dimW: parseInt(row.dimW),
        dimH: parseInt(row.dimH),
        unit: row.unit === 'No' ? 'No' : 'Yes',
        volume: parseInt(row.volume)
      })),
      soCostEstimateDTO: tableData1.map((row) => ({
        partyVendor: row.partyVendor,
        linearCarrier: row.linearCarrier,
        billToCustomer: row.billToCustomer,
        chargeCode: row.chargeCode,
        description: row.description,
        amountInInr: row.amountInInr,
        estimatePayDate: row.estimatePayDate,
        funReqDate: row.funReqDate
      }))
    };

    console.log('clikd', payload);

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/Transaction/updateCreateShipmentSO`, payload)
      .then((response) => {
        console.log('Response:', response.data);
        setFormData({
          docId: '',
          docDate: null,
          pol: '',
          pod: '',
          fpod: '',
          nominatedBy: '',
          deliveryTerms: '',
          freight: '',
          shipperInvoiceNo: '',
          billOfEntry: '',
          projectCargo: true,
          directMaster: true,
          jobAssigned: true,
          shipper: '',
          saddType: '',
          saddress: '',
          consignee: '',
          caddType: '',
          caddress: '',
          notify: '',
          naddType: '',
          naddress: '',
          salesCategory: '',
          salesPerson: '',
          totalNoOfPkgs: '',
          totalChWt: '',
          totEstimationCost: '',
          totalGrtWt: '',
          totalVolWt: ''
        });
        setTableData([
          {
            custPoNo: '',
            custPoDt: '',
            industry: '',
            itemDescription: '',
            qty: '',
            uom: '',
            grWt: '',
            chWt: '',
            dimL: '',
            dimW: '',
            dimH: '',
            unit: '',
            volume: ''
          }
        ]);
        setTableData1([
          {
            partyVendor: '',
            linearCarrier: '',
            billToCustomer: '',
            chargeCode: '',
            description: '',
            amountInInr: '',
            estimatePayDate: null,
            funReqDate: null
          }
        ]);
        toast.success('Shipment SO Created Successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the shipment SO');
      });
  };

  //   const handleEditSave = () => {
  //     const errors = {};
  //     if (!formData.employeeCode) {
  //       errors.employeeCode = 'Employee Code is required';
  //     }
  //     if (!formData.employeeName) {
  //       errors.employeeName = 'Employee Name is required';
  //     }
  //     if (!formData.gender) {
  //       errors.gender = 'Gender is required';
  //     }
  //     if (!formData.branch) {
  //       errors.branch = 'Branch is required';
  //     }
  //     if (!formData.joiningDate) {
  //       errors.joiningDate = 'Joining Date is required';
  //     }
  //     if (!formData.department) {
  //       errors.department = 'Department is required';
  //     }
  //     if (!formData.designation) {
  //       errors.designation = 'Designation is required';
  //     }
  //     if (!formData.appointmentType) {
  //       errors.appointmentType = 'Appointment Type is required';
  //     }
  //     if (!formData.modeOfEntry) {
  //       errors.modeOfEntry = 'Mode Of Entry is required';
  //     }
  //     if (!formData.dateOfBirth) {
  //       errors.dateOfBirth = 'Date Of Birth is required';
  //     }
  //     if (!formData.leavingDate) {
  //       errors.leavingDate = 'Leaving Date is required';
  //     }

  //     if (Object.keys(errors).length > 0) {
  //       setFieldErrors(errors);
  //       return;
  //     }

  //     const payload = {
  //       ...formData,
  //       active: formData.active ? 'true' : 'false',
  //       joiningDate: formData.joiningDate?.format('YYYY-MM-DD') || '',
  //       dateOfBirth: formData.dateOfBirth?.format('YYYY-MM-DD') || '',
  //       leavingDate: formData.leavingDate?.format('YYYY-MM-DD') || '',
  //       orgId: 1 // Update with actual orgId if needed
  //       // createdBy: 'string', // Update with actual createdBy if needed
  //       // updatedBy: 'string' // Update with actual updatedBy if needed
  //     };

  //     const updatedFormData = {
  //       ...payload,
  //       id: currentRowData?.id // Ensure the id from the current row data is included
  //     };

  //     axios
  //       .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateEmployee`, updatedFormData)
  //       .then((response) => {
  //         console.log('Response:', response.data);
  //         setFormData({
  //           employeeCode: '',
  //           employeeName: '',
  //           gender: '',
  //           branch: '',
  //           active: true,
  //           joiningDate: null,
  //           department: '',
  //           designation: '',
  //           appointmentType: '',
  //           modeOfEntry: '',
  //           dateOfBirth: null,
  //           leavingDate: null
  //         });
  //         toast.success('Employee Updated Successfully', {
  //           autoClose: 2000,
  //           theme: 'colored'
  //         });
  //         getAllEmployeeDetails();
  //         setEditMode(false); // Close the dialog after saving
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   };

  //   const getAllEmployeeDetails = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getEmployeeById`);
  //       console.log('API Response:', response);

  //       if (response.status === 200) {
  //         setTableData(response.data.paramObjectsMap.employeeVO);
  //         setId(response.data.paramObjectsMap.employeeVO.id);
  //       } else {
  //         // Handle error
  //         console.error('API Error:', response.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   const handleView = () => {
  //     getAllEmployeeDetails();
  //     setListView(true);
  //   };

  //   const handleBackToInput = () => {
  //     setListView(false);
  //   };

  //   const handleEdit = (row) => {
  //     const rowData = row.original;

  //     // Convert date strings to Dayjs objects
  //     const updatedFormData = {
  //       ...rowData,
  //       joiningDate: rowData.joiningDate ? dayjs(rowData.joiningDate) : null,
  //       dateOfBirth: rowData.dateOfBirth ? dayjs(rowData.dateOfBirth) : null,
  //       leavingDate: rowData.leavingDate ? dayjs(rowData.leavingDate) : null
  //     };

  //     setCurrentRowData(rowData);
  //     setFormData(updatedFormData);
  //     setEditMode(true);
  //     setFieldErrors({
  //       employeeCode: false,
  //       employeeName: false,
  //       gender: false,
  //       branch: false,
  //       joiningDate: false,
  //       department: false,
  //       designation: false,
  //       appointmentType: false,
  //       modeOfEntry: false,
  //       dateOfBirth: false,
  //       leavingDate: false
  //     });
  //   };

  //   const handleClose = () => {
  //     setEditMode(false);
  //     setFormData({
  //       employeeCode: '',
  //       employeeName: '',
  //       gender: '',
  //       branch: '',
  //       joiningDate: null,
  //       department: '',
  //       designation: '',
  //       appointmentType: '',
  //       modeOfEntry: '',
  //       dateOfBirth: null,
  //       leavingDate: null
  //     });
  //   };

  //   const columns = useMemo(
  //     () => [
  //       {
  //         accessorKey: 'actions',
  //         header: 'Actions',
  //         size: 50,
  //         muiTableHeadCellProps: {
  //           align: 'center'
  //         },
  //         muiTableBodyCellProps: {
  //           align: 'center'
  //         },
  //         enableSorting: false,
  //         enableColumnOrdering: false,
  //         enableEditing: false,
  //         Cell: ({ row }) => (
  //           <div>
  //             {/* <IconButton onClick={() => handleViewRow(row)}>
  //               <VisibilityIcon />
  //             </IconButton> */}
  //             <IconButton onClick={() => handleEdit(row)}>
  //               <EditIcon />
  //             </IconButton>
  //           </div>
  //         )
  //       },
  //       {
  //         accessorKey: 'employeeName',
  //         header: 'Employee Name',
  //         size: 50,
  //         muiTableHeadCellProps: {
  //           align: 'first'
  //         },
  //         muiTableBodyCellProps: {
  //           align: 'first'
  //         }
  //       },
  //       {
  //         accessorKey: 'branch',
  //         header: 'Branch',
  //         size: 50,
  //         muiTableHeadCellProps: {
  //           align: 'center'
  //         },
  //         muiTableBodyCellProps: {
  //           align: 'center'
  //         }
  //       },
  //       {
  //         accessorKey: 'department',
  //         header: 'Department',
  //         size: 50,
  //         muiTableHeadCellProps: {
  //           align: 'center'
  //         },
  //         muiTableBodyCellProps: {
  //           align: 'center'
  //         }
  //       },
  //       {
  //         accessorKey: 'modeOfEntry',
  //         header: 'Mode of Entry',
  //         size: 50,
  //         muiTableHeadCellProps: {
  //           align: 'center'
  //         },
  //         muiTableBodyCellProps: {
  //           align: 'center'
  //         }
  //       },
  //       {
  //         accessorKey: 'active',
  //         header: 'Active',
  //         size: 50,
  //         muiTableHeadCellProps: {
  //           align: 'center'
  //         },
  //         muiTableBodyCellProps: {
  //           align: 'center'
  //         },
  //         Cell: ({ cell: { value } }) => <span>{value ? 'Active' : 'Active'}</span>
  //       }
  //     ],
  //     []
  //   );

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="card w-full p-6 bg-base-100 shadow-xl" style={{ padding: '20px' }}>
        <>
          <div className="d-flex flex-wrap justify-content-start mb-4" style={{ marginBottom: '20px' }}>
            <Tooltip title="Search" placement="top">
              <ButtonBase sx={{ borderRadius: '12px', marginRight: '10px' }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.secondary.dark,
                      color: theme.palette.secondary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <SearchIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>

            <Tooltip title="Clear" placement="top">
              {' '}
              <ButtonBase sx={{ borderRadius: '12px', marginRight: '10px' }} onClick={handleClear}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.secondary.dark,
                      color: theme.palette.secondary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ClearIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>

            <Tooltip title="List View" placement="top">
              {' '}
              <ButtonBase sx={{ borderRadius: '12px' }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.secondary.dark,
                      color: theme.palette.secondary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FormatListBulletedTwoToneIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>
            <Tooltip title="Save" placement="top">
              {' '}
              <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleSave}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.secondary.dark,
                      color: theme.palette.secondary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <SaveIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>
          </div>
          <div className="row d-flex ml">
            <div className="col-md-4 mb-3">
              <TextField
                id="docId"
                fullWidth
                name="docId"
                label="SO No"
                size="small"
                value={formData.docId}
                onChange={handleInputChange}
                error={fieldErrors.docId}
                helperText={fieldErrors.docId}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth variant="filled" size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="SO Date"
                    value={formData.docDate}
                    slotProps={{
                      textField: { size: 'small', clearable: true }
                    }}
                    onChange={(date) => handleDateChange('docDate', date)}
                    renderInput={(params) => (
                      <TextField {...params} size="small" error={!!fieldErrors.docDate} helperText={fieldErrors.docDate} />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="globalShipNo"
                fullWidth
                name="globalShipNo"
                label="Global Ship No"
                size="small"
                disabled
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="orderNo"
                fullWidth
                name="orderNo"
                label="Order No"
                size="small"
                disabled
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="pol"
                fullWidth
                name="pol"
                label="POL"
                size="small"
                value={formData.pol}
                onChange={handleInputChange}
                error={fieldErrors.pol}
                helperText={fieldErrors.pol}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="pod"
                fullWidth
                name="pod"
                label="POD"
                size="small"
                value={formData.pod}
                onChange={handleInputChange}
                error={fieldErrors.pod}
                helperText={fieldErrors.pod}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="jobNo"
                fullWidth
                name="jobNo"
                label="Job No"
                size="small"
                disabled
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth variant="filled" size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="JOb Date"
                    //   value={formData.joiningDate}
                    slotProps={{
                      textField: { size: 'small', clearable: true }
                    }}
                    disabled
                    //   onChange={(date) => handleDateChange('joiningDate', date)}
                    //   renderInput={(params) => (
                    //     <TextField {...params} size="small" error={!!fieldErrors.joiningDate} helperText={fieldErrors.joiningDate} />
                    //   )}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="fpod"
                fullWidth
                name="fpod"
                label="FPOD"
                size="small"
                value={formData.fpod}
                onChange={handleInputChange}
                error={fieldErrors.fpod}
                helperText={fieldErrors.fpod}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.nominatedBy}>
                <InputLabel id="nominatedBy">Nominated By</InputLabel>
                <Select
                  labelId="nominatedBy"
                  label="Nominated By"
                  name="nominatedBy"
                  value={formData.nominatedBy}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {fieldErrors.nominatedBy && <FormHelperText>{fieldErrors.nominatedBy}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="hawbNo"
                fullWidth
                name="hawbNo"
                label="HAWB No"
                size="small"
                disabled
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth variant="filled" size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="HAWB Date"
                    //   value={formData.joiningDate}
                    slotProps={{
                      textField: { size: 'small', clearable: true }
                    }}
                    disabled
                    //   onChange={(date) => handleDateChange('joiningDate', date)}
                    //   renderInput={(params) => (
                    //     <TextField {...params} size="small" error={!!fieldErrors.joiningDate} helperText={fieldErrors.joiningDate} />
                    //   )}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.deliveryTerms}>
                <InputLabel id="deliveryTerms">Delivery Terms</InputLabel>
                <Select
                  labelId="deliveryTerms"
                  label="Delivery Terms"
                  name="deliveryTerms"
                  value={formData.deliveryTerms}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {fieldErrors.deliveryTerms && <FormHelperText>{fieldErrors.deliveryTerms}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.freight}>
                <InputLabel id="freight">Freight</InputLabel>
                <Select labelId="freight" label="Freight" name="freight" value={formData.freight} onChange={handleInputChange}>
                  <MenuItem value="COLLECT">COLLECT</MenuItem>
                  <MenuItem value="PREPAID">PREPAID</MenuItem>
                </Select>
                {fieldErrors.freight && <FormHelperText>{fieldErrors.freight}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="mawbNo"
                fullWidth
                name="mawbNo"
                label="MAWB No"
                size="small"
                disabled
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth variant="filled" size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="MAWB Date"
                    //   value={formData.joiningDate}
                    slotProps={{
                      textField: { size: 'small', clearable: true }
                    }}
                    disabled
                    //   onChange={(date) => handleDateChange('joiningDate', date)}
                    //   renderInput={(params) => (
                    //     <TextField {...params} size="small" error={!!fieldErrors.joiningDate} helperText={fieldErrors.joiningDate} />
                    //   )}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="shipperInvoiceNo"
                fullWidth
                name="shipperInvoiceNo"
                label="Shipper Invoice No"
                size="small"
                value={formData.shipperInvoiceNo}
                onChange={handleInputChange}
                error={fieldErrors.shipperInvoiceNo}
                helperText={fieldErrors.shipperInvoiceNo}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="billOfEntry"
                fullWidth
                name="billOfEntry"
                label="Bill Of Entry"
                size="small"
                value={formData.billOfEntry}
                onChange={handleInputChange}
                error={fieldErrors.billOfEntry}
                helperText={fieldErrors.billOfEntry}
              />
            </div>
            <div className="col-md-3 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="projectCargo"
                      name="projectCargo"
                      checked={formData.projectCargo}
                      onChange={(e) => handleInputChange({ target: { name: 'projectCargo', value: e.target.checked } })}
                    />
                  }
                  label="Project Cargo"
                />
              </FormGroup>
            </div>
            <div className="col-md-3 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="directMaster"
                      name="directMaster"
                      checked={formData.directMaster}
                      onChange={(e) => handleInputChange({ target: { name: 'directMaster', value: e.target.checked } })}
                    />
                  }
                  label="Direct Master"
                />
              </FormGroup>
            </div>
            <div className="col-md-3 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="jobAssigned"
                      name="jobAssigned"
                      checked={formData.jobAssigned}
                      onChange={(e) => handleInputChange({ target: { name: 'jobAssigned', value: e.target.checked } })}
                    />
                  }
                  label="JoB / House Assigned"
                />
              </FormGroup>
            </div>
            <div className="col-md-3 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="masterFinalize"
                      name="masterFinalize"
                      disabled
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                    />
                  }
                  label="Master Finalize"
                />
              </FormGroup>
            </div>
          </div>
        </>
        <>
          {/* <div className="mt-4">
              <div className="mb-3">
                <Tooltip title="Clear" placement="top">
                  {' '}
                  <ButtonBase sx={{ borderRadius: '12px', marginRight: '10px' }} onClick={handleBackToInput}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '&[aria-controls="menu-list-grow"],&:hover': {
                          background: theme.palette.secondary.dark,
                          color: theme.palette.secondary.light
                        }
                      }}
                      ref={anchorRef}
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <ClearIcon size="1.3rem" stroke={1.5} />
                    </Avatar>
                  </ButtonBase>
                </Tooltip>

              </div>
              <MaterialReactTable
                displayColumnDefOptions={{
                  'mrt-row-actions': {
                    muiTableHeadCellProps: {
                      align: 'center'
                    },
                    size: 80
                  }
                }}
                columns={columns}
                data={tableData}
                editingMode="modal"
                enableColumnOrdering
                renderRowActions={({ row, table }) => (
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'flex-end'
                    }}
                  >

                  </Box>
                )}
              />
            </div> */}
        </>
        <div>
          <Tabs value={tabValue} onChange={handleChangeTab}>
            <Tab label="Party Detail" />
            <Tab label="Packing List" />
            <Tab label="Cost Estimate" />
            <Tab label="Summary" />
          </Tabs>
          {tabValue === 0 && (
            <div className="row d-flex mt-3">
              <div className="col-md-4 mb-3">
                <TextField
                  id="shipper"
                  fullWidth
                  name="shipper"
                  label="Shipper"
                  size="small"
                  value={formData.shipper}
                  onChange={handleInputChange}
                  error={fieldErrors.shipper}
                  helperText={fieldErrors.shipper}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.saddType}>
                  <InputLabel id="saddType">Add Type</InputLabel>
                  <Select labelId="saddType" label="Add Type" name="saddType" value={formData.saddType} onChange={handleInputChange}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                  {fieldErrors.saddType && <FormHelperText>{fieldErrors.saddType}</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="saddress"
                  fullWidth
                  name="saddress"
                  label="Address"
                  size="small"
                  value={formData.saddress}
                  onChange={handleInputChange}
                  error={fieldErrors.saddress}
                  helperText={fieldErrors.saddress}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="consignee"
                  fullWidth
                  name="consignee"
                  label="Consignee"
                  size="small"
                  value={formData.consignee}
                  onChange={handleInputChange}
                  error={fieldErrors.consignee}
                  helperText={fieldErrors.consignee}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.caddType}>
                  <InputLabel id="caddType">Add Type</InputLabel>
                  <Select labelId="caddType" label="Add Type" name="caddType" value={formData.caddType} onChange={handleInputChange}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                  {fieldErrors.caddType && <FormHelperText>{fieldErrors.caddType}</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="caddress"
                  fullWidth
                  name="caddress"
                  label="Address"
                  size="small"
                  value={formData.caddress}
                  onChange={handleInputChange}
                  error={fieldErrors.caddress}
                  helperText={fieldErrors.caddress}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="notify"
                  fullWidth
                  name="notify"
                  label="Notify"
                  size="small"
                  value={formData.notify}
                  onChange={handleInputChange}
                  error={fieldErrors.notify}
                  helperText={fieldErrors.notify}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.naddType}>
                  <InputLabel id="naddType">Add Type</InputLabel>
                  <Select labelId="naddType" label="Add Type" name="naddType" value={formData.naddType} onChange={handleInputChange}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                  {fieldErrors.naddType && <FormHelperText>{fieldErrors.naddType}</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="naddress"
                  fullWidth
                  name="naddress"
                  label="Address"
                  size="small"
                  value={formData.naddress}
                  onChange={handleInputChange}
                  error={fieldErrors.naddress}
                  helperText={fieldErrors.naddress}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.salesCategory}>
                  <InputLabel id="salesCategory">Sales Category</InputLabel>
                  <Select
                    labelId="salesCategory"
                    label="Sales Category"
                    name="salesCategory"
                    value={formData.salesCategory}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                  {fieldErrors.salesCategory && <FormHelperText>{fieldErrors.salesCategory}</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.salesPerson}>
                  <InputLabel id="salesPerson">Sales Person</InputLabel>
                  <Select
                    labelId="salesPerson"
                    label="Sales Person"
                    name="salesPerson"
                    value={formData.salesPerson}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                  {fieldErrors.salesPerson && <FormHelperText>{fieldErrors.salesPerson}</FormHelperText>}
                </FormControl>
              </div>
            </div>
          )}
          {tabValue === 1 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowPackingList}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '&[aria-controls="menu-list-grow"],&:hover': {
                          background: theme.palette.secondary.dark,
                          color: theme.palette.secondary.light
                        }
                      }}
                      ref={anchorRef}
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AddIcon size="1.3rem" stroke={1.5} />
                    </Avatar>
                  </ButtonBase>
                </Tooltip>
              </div>
              <div className="row mt-2">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr style={{ backgroundColor: '#434AA8' }}>
                          <th className="px-2 py-2 text-white">Action</th>
                          <th className="px-2 py-2 text-white" style={{ width: '50px' }}>
                            SID.No
                          </th>
                          <th className="px-2 py-2 text-white">Cust. PO No</th>
                          <th className="px-2 py-2 text-white">Cust. PO Dt</th>
                          <th className="px-2 py-2 text-white">Industry</th>
                          <th className="px-2 py-2 text-white">Item Description</th>
                          <th className="px-2 py-2 text-white">Qty</th>
                          <th className="px-2 py-2 text-white">UOM</th>
                          <th className="px-2 py-2 text-white">Gr. Wt</th>
                          <th className="px-2 py-2 text-white">Ch. Wt</th>
                          <th className="px-2 py-2 text-white">Dim (L)</th>
                          <th className="px-2 py-2 text-white">Dim (W)</th>
                          <th className="px-2 py-2 text-white">Dim (H)</th>
                          <th className="px-2 py-2 text-white">Unit</th>
                          <th className="px-2 py-2 text-white">Volume</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowPackingList(row.id)}
                                >
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      ...theme.typography.commonAvatar,
                                      ...theme.typography.mediumAvatar,
                                      transition: 'all .2s ease-in-out',
                                      background: theme.palette.secondary.light,
                                      color: theme.palette.secondary.dark,
                                      '&[aria-controls="menu-list-grow"],&:hover': {
                                        background: theme.palette.secondary.dark,
                                        color: theme.palette.secondary.light
                                      }
                                    }}
                                    ref={anchorRef}
                                    aria-haspopup="true"
                                    color="inherit"
                                  >
                                    <DeleteIcon size="1.3rem" stroke={1.5} />
                                  </Avatar>
                                </ButtonBase>
                              </Tooltip>
                            </td>
                            {/* <td className="border px-2 py-2">{index + 1}</td> */}

                            <td className="border px-2 py-2" style={{ width: '50px' }}>
                              <input type="text" value={`${index + 1}`} readOnly style={{ width: '100%' }} />
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.custPoNo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, custPoNo: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], custPoNo: !value ? 'Cust PO No is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.custPoNo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.custPoNo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].custPoNo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.custPoDt}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, custPoDt: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      custPoDt: !value ? 'Cust PO Dt is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.custPoDt ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.custPoDt && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].custPoDt}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.industry}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, industry: e.target.value } : r)))
                                }
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.itemDescription}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, itemDescription: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      itemDescription: !value ? 'Item Description is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.itemDescription ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.itemDescription && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].itemDescription}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.qty}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, qty: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      qty: !value ? 'Qty is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.qty ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.qty && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].qty}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.uom}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, uom: e.target.value } : r)))
                                }
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.grWt}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, grWt: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      grWt: !value ? 'GrWt is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.grWt ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.grWt && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].grWt}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.chWt}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, chWt: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      chWt: !value ? 'ChWt is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.chWt ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.chWt && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].chWt}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.dimL}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, dimL: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      dimL: !value ? 'Dim (L) is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.dimL ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.dimL && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].dimL}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.dimW}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, dimW: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      dimW: !value ? 'Dim (W) is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.dimW ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.dimW && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].dimW}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.dimH}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, dimH: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      dimH: !value ? 'Dim (H) is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.dimH ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.dimH && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].dimH}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.unit}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, unit: e.target.value } : r)))
                                }
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.volume}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, volume: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      unit: !value ? 'Volume is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.volume ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.volume && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].volume}</div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabValue === 2 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowCostEstimate}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '&[aria-controls="menu-list-grow"],&:hover': {
                          background: theme.palette.secondary.dark,
                          color: theme.palette.secondary.light
                        }
                      }}
                      ref={anchorRef}
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AddIcon size="1.3rem" stroke={1.5} />
                    </Avatar>
                  </ButtonBase>
                </Tooltip>
              </div>
              <div className="row mt-2">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr style={{ backgroundColor: '#434AA8' }}>
                          <th className="px-2 py-2 text-white">Action</th>
                          <th className="px-2 py-2 text-white">Party (Vendor)</th>
                          <th className="px-2 py-2 text-white">Liner(Carrier)</th>
                          <th className="px-2 py-2 text-white">Bill To (Customer)</th>
                          <th className="px-2 py-2 text-white">Change Code</th>
                          <th className="px-2 py-2 text-white">Description</th>
                          <th className="px-2 py-2 text-white">Amount in INR</th>
                          <th className="px-2 py-2 text-white">Estimate Pay Date</th>
                          <th className="px-2 py-2 text-white">Fund Req Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData1.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowCostEstimate(row.id)}
                                >
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      ...theme.typography.commonAvatar,
                                      ...theme.typography.mediumAvatar,
                                      transition: 'all .2s ease-in-out',
                                      background: theme.palette.secondary.light,
                                      color: theme.palette.secondary.dark,
                                      '&[aria-controls="menu-list-grow"],&:hover': {
                                        background: theme.palette.secondary.dark,
                                        color: theme.palette.secondary.light
                                      }
                                    }}
                                    ref={anchorRef}
                                    aria-haspopup="true"
                                    color="inherit"
                                  >
                                    <DeleteIcon size="1.3rem" stroke={1.5} />
                                  </Avatar>
                                </ButtonBase>
                              </Tooltip>
                            </td>
                            {/* <td className="border px-2 py-2">{index + 1}</td> */}

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.partyVendor}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, partyVendor: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], partyVendor: !value ? 'Party Vendor is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.partyVendor ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.partyVendor && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].partyVendor}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.linearCarrier}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, linearCarrier: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      linearCarrier: !value ? 'Linear Carrier is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.linearCarrier ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.linearCarrier && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].linearCarrier}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.billToCustomer}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, billToCustomer: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      billToCustomer: !value ? 'Bill To Customer is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.billToCustomer ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.billToCustomer && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].billToCustomer}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.chargeCode}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, chargeCode: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      chargeCode: !value ? 'Charge Code is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.chargeCode ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.chargeCode && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].chargeCode}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.description}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, description: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      description: !value ? 'Description is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.description ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.description && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].description}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.amountInInr}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, amountInInr: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      chWt: !value ? 'Amount INR is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.amountInInr ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.amountInInr && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].amountInInr}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  value={row.estimatePayDate ? dayjs(row.estimatePayDate) : null}
                                  onChange={(date) => handleDateChange(index, 'estimatePayDate', date)}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      error={!!(fieldErrors[index] && fieldErrors[index].estimatePayDate)}
                                      helperText={fieldErrors[index]?.estimatePayDate || ''}
                                      size="small"
                                      style={{ marginBottom: '6px' }}
                                    />
                                  )}
                                />
                              </LocalizationProvider>
                            </td>

                            <td className="border px-2 py-2">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  value={row.funReqDate ? dayjs(row.funReqDate) : null}
                                  onChange={(date) => handleDateChange(index, 'funReqDate', date)}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      error={!!(fieldErrors[index] && fieldErrors[index].funReqDate)}
                                      helperText={fieldErrors[index]?.funReqDate || ''}
                                      size="small"
                                      style={{ marginBottom: '6px' }}
                                    />
                                  )}
                                />
                              </LocalizationProvider>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tabValue === 3 && (
            <div className="row d-flex mt-3">
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalNoOfPkgs"
                  fullWidth
                  name="totalNoOfPkgs"
                  label="Total No of Pkgs"
                  size="small"
                  value={formData.totalNoOfPkgs}
                  onChange={handleInputChange}
                  error={fieldErrors.totalNoOfPkgs}
                  helperText={fieldErrors.totalNoOfPkgs}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalChWt"
                  fullWidth
                  name="totalChWt"
                  label="Total Ch Wt"
                  size="small"
                  value={formData.totalChWt}
                  onChange={handleInputChange}
                  error={fieldErrors.totalChWt}
                  helperText={fieldErrors.totalChWt}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totEstimationCost"
                  fullWidth
                  name="totEstimationCost"
                  label="Total Estimation Cost"
                  size="small"
                  value={formData.totEstimationCost}
                  onChange={handleInputChange}
                  error={fieldErrors.totEstimationCost}
                  helperText={fieldErrors.totEstimationCost}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalGrtWt"
                  fullWidth
                  name="totalGrtWt"
                  label="Total Gr Wt"
                  size="small"
                  value={formData.totalGrtWt}
                  onChange={handleInputChange}
                  error={fieldErrors.totalGrtWt}
                  helperText={fieldErrors.totalGrtWt}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalVolWt"
                  fullWidth
                  name="totalVolWt"
                  label="Total Vol Wt"
                  size="small"
                  value={formData.totalVolWt}
                  onChange={handleInputChange}
                  error={fieldErrors.totalVolWt}
                  helperText={fieldErrors.totalVolWt}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <Dialog open={editMode} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ fontSize: '20px' }}>Edit Employee Details</DialogTitle>
        <DialogContent>
          <div className="col-md-8 mt-2 mb-3">
            <TextField
              fullWidth
              name="employeeCode"
              label="Employee Code"
              size="small"
              value={formData.employeeCode}
              onChange={handleInputChange}
              error={fieldErrors.employeeCode}
              helperText={fieldErrors.employeeCode && 'Employee Code is required'}
            />
          </div>
          <div className="col-md-8 mb-3">
            <TextField
              fullWidth
              name="employeeName"
              label="Employee Name"
              size="small"
              value={formData.employeeName}
              onChange={handleInputChange}
              error={fieldErrors.employeeName}
              helperText={fieldErrors.employeeName && 'Employee Name is required'}
            />
          </div>
          <div className="col-md-8 mb-3">
            <FormControl variant="outlined" fullWidth size="small" error={fieldErrors.gender}>
              <InputLabel id="gender">Gender</InputLabel>
              <Select labelId="gender" label="Gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {fieldErrors.gender && <FormHelperText>Gender is required</FormHelperText>}
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <FormControl fullWidth size="small" error={fieldErrors.branch}>
              <InputLabel id="branch">Branch</InputLabel>
              <Select labelId="branch" label="Branch" name="branch" value={formData.branch} onChange={handleInputChange}>
                <MenuItem value="branch1">Branch 1</MenuItem>
                <MenuItem value="branch2">Branch 2</MenuItem>
              </Select>
              {fieldErrors.branch && <FormHelperText>Branch is required</FormHelperText>}
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                    id="active"
                    name="active"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  />
                }
                label="Active"
              />
            </FormGroup>
          </div>
          <div className="col-md-8 mb-3">
            <FormControl fullWidth variant="filled" size="small">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Joining Date"
                  value={formData.joiningDate}
                  onChange={(date) => handleDateChange('joiningDate', date)}
                  slotProps={{
                    textField: { size: 'small', clearable: true }
                  }}
                  error={fieldErrors.joiningDate}
                  helperText={fieldErrors.joiningDate && 'Required'}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <FormControl size="small" fullWidth error={fieldErrors.department}>
              <InputLabel id="department">Department</InputLabel>
              <Select labelId="department" label="Department" name="department" value={formData.department} onChange={handleInputChange}>
                <MenuItem value="dept1">Department 1</MenuItem>
                <MenuItem value="dept2">Department 2</MenuItem>
              </Select>
              {fieldErrors.department && <FormHelperText>Department is required</FormHelperText>}
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <FormControl size="small" fullWidth error={fieldErrors.designation}>
              <InputLabel id="designation">Designation</InputLabel>
              <Select
                labelId="designation"
                label="Designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
              >
                <MenuItem value="desig1">Designation 1</MenuItem>
                <MenuItem value="desig2">Designation 2</MenuItem>
              </Select>
              {fieldErrors.designation && <FormHelperText>Designation is required</FormHelperText>}
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <TextField
              id="outlined-textarea"
              label="Appointment Type"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="appointmentType"
              fullWidth
              required
              value={formData.appointmentType}
              onChange={handleInputChange}
              error={fieldErrors.appointmentType}
              helperText={fieldErrors.appointmentType && 'Appointment Type is required'}
            />
          </div>
          <div className="col-md-8 mb-3">
            <TextField
              id="outlined-textarea"
              label="Mode of Entry"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="modeOfEntry"
              fullWidth
              required
              value={formData.modeOfEntry}
              onChange={handleInputChange}
              error={fieldErrors.modeOfEntry}
              helperText={fieldErrors.modeOfEntry && 'Mode Of Entry is required'}
            />
          </div>
          <div className="col-md-8 mb-3">
            <FormControl fullWidth variant="filled" size="small">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date Of Birth"
                  value={formData.dateOfBirth}
                  onChange={(date) => handleDateChange('dateOfBirth', date)}
                  slotProps={{
                    textField: { size: 'small', clearable: true }
                  }}
                  error={fieldErrors.dateOfBirth}
                  helperText={fieldErrors.dateOfBirth && 'Required'}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <FormControl fullWidth variant="filled" size="small">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Leaving Date"
                  value={formData.leavingDate}
                  onChange={(date) => handleDateChange('leavingDate', date)}
                  slotProps={{
                    textField: { size: 'small', clearable: true }
                  }}
                  error={fieldErrors.leavingDate}
                  helperText={fieldErrors.leavingDate && 'Required'}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};
export default shipmentSO;
