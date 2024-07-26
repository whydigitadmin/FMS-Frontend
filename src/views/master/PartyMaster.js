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

export const PartyMaster = () => {
  //   const [formData, setFormData] = useState({
  //     employeeCode: '',
  //     employeeName: '',
  //     gender: '',
  //     branch: '',
  //     active: true,
  //     joiningDate: null,
  //     department: '',
  //     designation: '',
  //     appointmentType: '',
  //     modeOfEntry: '',
  //     dateOfBirth: null,
  //     leavingDate: null
  //   });
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

  // const [fieldErrors, setFieldErrors] = useState({
  //   employeeCode: '',
  //   employeeName: '',
  //   gender: '',
  //   branch: '',
  //   active: true,
  //   joiningDate: '',
  //   department: '',
  //   designation: '',
  //   appointmentType: '',
  //   modeOfEntry: '',
  //   dateOfBirth: '',
  //   leavingDate: ''
  // });

  //   const [fieldErrors, setFieldErrors] = useState({});

  //   const [tableData, setTableData] = useState([]);

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //     setFieldErrors({ ...fieldErrors, [name]: '' });
  //   };
  //   const handleDateChange = (name, date) => {
  //     if (date && date.isValid()) {
  //       setFormData({ ...formData, [name]: date });
  //       setFieldErrors({ ...fieldErrors, [name]: '' });
  //     } else {
  //       setFieldErrors({ ...fieldErrors, [name]: `${name} is required` });
  //     }
  //   };

  //   const handleClear = () => {
  //     setFormData({
  //       active: true,
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
  //     setFieldErrors({
  //       active: true,
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

  //   const handleSave = () => {
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

  //     axios
  //       .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateEmployee`, payload)
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
  //         toast.success('Employee Created Successfully', {
  //           autoClose: 2000,
  //           theme: 'colored'
  //         });
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   };

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

  const [tableErrors, setTableErrors] = useState([
    {
      state: '',
      gstIn: '',
      stateNo: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: '',
      stateCode: ''
    }
  ]);

  const [tableData, setTableData] = useState([
    {
      sNo: 1,
      state: '',
      gstIn: '',
      stateNo: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: '',
      stateCode: ''
    }
  ]);

  const handleAddRowPartyState = () => {
    const newRow = {
      sNo: Date.now(),
      state: '',
      gstIn: '',
      stateNo: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: '',
      stateCode: ''
    };
    setTableData([...tableData, newRow]);
    setTableErrors([
      ...tableErrors,
      {
        state: '',
        gstIn: '',
        stateNo: '',
        contactPerson: '',
        contactPhoneNo: '',
        contactEmail: '',
        stateCode: ''
      }
    ]);
  };

  const handleDeleteRowPartyState = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
    setTableErrors(tableErrors.filter((_, index) => index !== id - 1));
  };

  const [tableErrors1, setTableErrors1] = useState([
    {
      state: '',
      businessPlace: '',
      stateGstIn: '',
      cityName: '',
      addressType: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      pinCode: '',
      contact: ''
    }
  ]);

  const [tableData1, setTableData1] = useState([
    {
      sNo: Date.now(),
      state: '',
      businessPlace: '',
      stateGstIn: '',
      cityName: '',
      addressType: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      pinCode: '',
      contact: ''
    }
  ]);

  const handleAddRowAddress = () => {
    const newRow = {
      state: '',
      businessPlace: '',
      stateGstIn: '',
      cityName: '',
      addressType: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      pinCode: '',
      contact: ''
    };
    setTableData1([...tableData1, newRow]);
    setTableErrors1([
      ...tableErrors1,
      {
        state: '',
        businessPlace: '',
        stateGstIn: '',
        cityName: '',
        addressType: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        pinCode: '',
        contact: ''
      }
    ]);
  };

  const handleDeleteRowAddress = (id) => {
    setTableData1(tableData1.filter((row) => row.id !== id));
    setTableErrors1(tableErrors1.filter((_, index) => index !== id - 1));
  };

  const [tableErrors2, setTableErrors2] = useState([
    {
      name: '',
      designation: '',
      phone: '',
      email: ''
    }
  ]);

  const [tableData2, setTableData2] = useState([
    {
      sNo: 1,
      name: '',
      designation: '',
      phone: '',
      email: ''
    }
  ]);

  const handleAddRowDetailsOfDPO = () => {
    const newRow = {
      sNo: Date.now(),
      name: '',
      designation: '',
      phone: '',
      email: ''
    };
    setTableData2([...tableData2, newRow]);
    setTableErrors2([
      ...tableErrors2,
      {
        name: '',
        designation: '',
        phone: '',
        email: ''
      }
    ]);
  };

  const handleDeleteRowDetailsOfDPO = (id) => {
    setTableData2(tableData2.filter((row) => row.id !== id));
    setTableErrors2(tableErrors2.filter((_, index) => index !== id - 1));
  };

  const [tableErrors3, setTableErrors3] = useState([
    {
      tdsWhSection: '',
      rateFrom: '',
      rateTo: '',
      tdsWh: '',
      sur: '',
      ed: '',
      tdsCertificateNo: ''
    }
  ]);

  const [tableData3, setTableData3] = useState([
    {
      sNo: 1,
      tdsWhSection: '',
      rateFrom: '',
      rateTo: '',
      tdsWh: '',
      sur: '',
      ed: '',
      tdsCertificateNo: ''
    }
  ]);

  const handleAddRowSpecialTdsWhTaxDetail = () => {
    const newRow = {
      sNo: Date.now(),
      tdsWhSection: '',
      rateFrom: '',
      rateTo: '',
      tdsWh: '',
      sur: '',
      ed: '',
      tdsCertificateNo: ''
    };
    setTableData3([...tableData3, newRow]);
    setTableErrors3([
      ...tableErrors3,
      {
        tdsWhSection: '',
        rateFrom: '',
        rateTo: '',
        tdsWh: '',
        sur: '',
        ed: '',
        tdsCertificateNo: ''
      }
    ]);
  };

  const handleDeleteRowSpecialTdsWhTaxDetail = (id) => {
    setTableData3(tableData3.filter((row) => row.id !== id));
    setTableErrors3(tableErrors3.filter((_, index) => index !== id - 1));
  };

  const [tableErrors4, setTableErrors4] = useState([
    {
      tdsWhSection1: '',
      charge: ''
    }
  ]);

  const [tableData4, setTableData4] = useState([
    {
      sNo: Date.now(),
      tdsWhSection1: '',
      charge: ''
    }
  ]);

  const handleAddRowChargesExemption = () => {
    const newRow = {
      sNo: Date.now(),
      tdsWhSection1: '',
      charge: ''
    };
    setTableData4([...tableData4, newRow]);
    setTableErrors4([
      ...tableErrors4,
      {
        tdsWhSection1: '',
        charge: ''
      }
    ]);
  };

  const handleDeleteRowChargesExemption = (id) => {
    setTableData4(tableData4.filter((row) => row.id !== id));
    setTableErrors4(tableErrors4.filter((_, index) => index !== id - 1));
  };

  const [tableErrors5, setTableErrors5] = useState([
    {
      transactionCurrency: ''
    }
  ]);

  const [tableData5, setTableData5] = useState([
    {
      sNo: Date.now(),
      transactionCurrency: ''
    }
  ]);

  const handleAddRowCurrencyMapping = () => {
    const newRow = {
      sNo: Date.now(),
      transactionCurrency: ''
    };
    setTableData5([...tableData5, newRow]);
    setTableErrors5([
      ...tableErrors5,
      {
        transactionCurrency: ''
      }
    ]);
  };

  const handleDeleteRowCurrencyMapping = (id) => {
    setTableData5(tableData5.filter((row) => row.id !== id));
    setTableErrors5(tableErrors5.filter((_, index) => index !== id - 1));
  };

  const [tableErrors6, setTableErrors6] = useState([
    {
      salesPerson: '',
      empCode: '',
      salesBranch: '',
      effectiveFrom: '',
      effectiveTill: ''
    }
  ]);

  const [tableData6, setTableData6] = useState([
    {
      sNo: Date.now(),
      salesPerson: '',
      empCode: '',
      salesBranch: '',
      effectiveFrom: '',
      effectiveTill: ''
    }
  ]);

  const handleAddRowSalesPerson = () => {
    const newRow = {
      sNo: Date.now(),
      salesPerson: '',
      empCode: '',
      salesBranch: '',
      effectiveFrom: '',
      effectiveTill: ''
    };
    setTableData6([...tableData6, newRow]);
    setTableErrors6([
      ...tableErrors6,
      {
        salesPerson: '',
        empCode: '',
        salesBranch: '',
        effectiveFrom: '',
        effectiveTill: ''
      }
    ]);
  };

  const handleDeleteRowSalesPerson = (id) => {
    setTableData6(tableData6.filter((row) => row.id !== id));
    setTableErrors6(tableErrors6.filter((_, index) => index !== id - 1));
  };

  const [tableErrors7, setTableErrors7] = useState([
    {
      tdsExemptedCertificate: '',
      valueTds: '',
      finYear: ''
    }
  ]);

  const [tableData7, setTableData7] = useState([
    {
      sNo: Date.now(),
      tdsExemptedCertificate: '',
      valueTds: '',
      finYear: ''
    }
  ]);

  const handleAddRowTdsExempted = () => {
    const newRow = {
      sNo: Date.now(),
      tdsExemptedCertificate: '',
      valueTds: '',
      finYear: ''
    };
    setTableData7([...tableData7, newRow]);
    setTableErrors7([
      ...tableErrors7,
      {
        tdsExemptedCertificate: '',
        valueTds: '',
        finYear: ''
      }
    ]);
  };

  const handleDeleteRowTdsExempted = (id) => {
    setTableData7(tableData7.filter((row) => row.id !== id));
    setTableErrors7(tableErrors7.filter((_, index) => index !== id - 1));
  };

  const [tableErrors8, setTableErrors8] = useState([
    {
      partnerName: ''
    }
  ]);

  const [tableData8, setTableData8] = useState([
    {
      sNo: Date.now(),
      partnerName: ''
    }
  ]);

  const handleAddRowPartnerTagging = () => {
    const newRow = {
      sNo: Date.now(),
      partnerName: ''
    };
    setTableData8([...tableData8, newRow]);
    setTableErrors8([
      ...tableErrors8,
      {
        partnerName: ''
      }
    ]);
  };

  const handleDeleteRowPartnerTagging = (id) => {
    setTableData8(tableData8.filter((row) => row.id !== id));
    setTableErrors8(tableErrors8.filter((_, index) => index !== id - 1));
  };

  const handleKeyDown = (e, row) => {
    if (e.key === 'Tab' && row.id === tableData[tableData.length - 1].id) {
      e.preventDefault();
      handleAddRow();
    }
  };

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
              <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }}>
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
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="partyType">Party Type</InputLabel>
                <Select
                  labelId="partyType"
                  label="Party Type"
                  name="partyType"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="partyCode"
                fullWidth
                name="partyCode"
                label="Party Code"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="active"
                      name="active"
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                    />
                  }
                  label="Active"
                />
              </FormGroup>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="partyName"
                fullWidth
                name="partyName"
                label="Party Name"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="gstPartyName"
                fullWidth
                name="gstPartyName"
                label="GST Party Name"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="customerType"
                fullWidth
                name="customerType"
                label="Customer Type"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="company">Company</InputLabel>
                <Select
                  labelId="company"
                  label="Company"
                  name="company"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="customerCategory">Customer Category</InputLabel>
                <Select
                  labelId="customerCategory"
                  label="Customer Category"
                  name="customerCategory"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="agentName"
                fullWidth
                name="agentName"
                label="Agent Name"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="accountsType">Accounts Type</InputLabel>
                <Select
                  labelId="accountsType"
                  label="Accounts Type"
                  name="accountsType"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="businessType">Business Type</InputLabel>
                <Select
                  labelId="businessType"
                  label="Business Type"
                  name="businessType"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="carrierCode"
                fullWidth
                name="carrierCode"
                label="Carrier Code"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="supplierType">Supplier Type</InputLabel>
                <Select
                  labelId="supplierType"
                  label="Supplier Type"
                  name="supplierType"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="salesPerson"
                fullWidth
                name="salesPerson"
                label="Sales Person"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="salesPerson1"
                fullWidth
                name="salesPerson1"
                // label="salesPerson1"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="customerCoordinator"
                fullWidth
                name="customerCoordinator"
                label="Customer Coordinator"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="customerCoordinator1"
                fullWidth
                name="customerCoordinator1"
                // label="customerCoordinator1"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="accountName">Account Name</InputLabel>
                <Select
                  labelId="accountName"
                  label="Account Name"
                  name="accountName"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="gstRegistered">GST Registered</InputLabel>
                <Select
                  labelId="gstRegistered"
                  label="GST Registered"
                  name="gstRegistered"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="creditLimit"
                fullWidth
                name="creditLimit"
                label="Credit Limit"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="creditDays"
                fullWidth
                name="creditDays"
                label="Credit Days"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="panNo"
                fullWidth
                name="panNo"
                label="PAN No"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="controllingOffice"
                fullWidth
                name="controllingOffice"
                label="Controlling Office"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>

            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="currency">Currency</InputLabel>
                <Select
                  labelId="currency"
                  label="Currency"
                  name="currency"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="panName"
                fullWidth
                name="panName"
                label="Pan Name"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="airWayBillCode"
                fullWidth
                name="airWayBillCode"
                label="Air Way Bill Code"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="airLineCode"
                fullWidth
                name="airLineCode"
                label="AirLine Code"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="tanNo"
                fullWidth
                name="tanNo"
                label="TAN No"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="businessCategory">Business Category</InputLabel>
                <Select
                  labelId="businessCategory"
                  label="Business Category"
                  name="businessCategory"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="businessCategory1"
                fullWidth
                name="businessCategory1"
                // label="TAN No"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>

            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="country">Country</InputLabel>
                <Select
                  labelId="country"
                  label="Country"
                  name="country"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="caf">CAF</InputLabel>
                <Select
                  labelId="caf"
                  label="CAF"
                  name="caf"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="remarks"
                fullWidth
                name="remarks"
                label="Remarks"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="compoundingScheme">Compounding Scheme</InputLabel>
                <Select
                  labelId="compoundingScheme"
                  label="Compounding Scheme"
                  name="compoundingScheme"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="psuGovernmentOrganization">PSU / Government Organization</InputLabel>
                <Select
                  labelId="psuGovernmentOrganization"
                  label="PSU / Government Organization"
                  name="psuGovernmentOrganization"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-start" style={{ marginBottom: '10px' }}>
            <h6 className="col-md-12" style={{ backgroundColor: '#ECEEF4', padding: '10px' }}>
              Bank Details
            </h6>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 mb-3">
              <TextField
                id="nameOfBank"
                fullWidth
                name="nameOfBank"
                label="Name of Bank"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="branch"
                fullWidth
                name="branch"
                label="Branch"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="addressOfBank"
                fullWidth
                name="addressOfBank"
                label="Address of Bank"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="accountNo"
                fullWidth
                name="accountNo"
                label="Account No"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="accountType"
                fullWidth
                name="accountType"
                label="Account Type"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="ifscCode"
                fullWidth
                name="ifscCode"
                label="IFSC Code"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="swift"
                fullWidth
                name="swift"
                label="SWIFT"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
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
            <Tab label="Party State" />
            <Tab label="Address" />
            <Tab label="Details of Directors/Partner/Owner" />
            <Tab label="Special TDS / WH Tax Detail" />
            <Tab label="Charges Exemption for Special TDS / WH" />
            <Tab label="Currency Mapping" />
            <Tab label="Sales Person Tagging" />
            <Tab label="TDS Exempted" />
            <Tab label="Partner Tagging" />
            <Tab label="Vendor Evaluation" />
          </Tabs>
          {tabValue === 0 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowPartyState}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">State</th>
                          <th className="px-2 py-2 text-white">GSTIN</th>
                          <th className="px-2 py-2 text-white">State No</th>
                          <th className="px-2 py-2 text-white">Contact Person</th>
                          <th className="px-2 py-2 text-white">Contact Phone No</th>
                          <th className="px-2 py-2 text-white">Contact Email</th>
                          <th className="px-2 py-2 text-white">State Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowPartyState(row.id)}
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
                              <select
                                value={row.state}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, state: e.target.value } : r)))
                                }
                                // onKeyDown={(e) => handleKeyDown(e, row)}
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.gstIn}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, gstIn: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], gstIn: !value ? 'GstIn is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.gstIn ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.gstIn && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].gstIn}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.stateNo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, stateNo: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      stateNo: !value ? 'State No is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.stateNo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.stateNo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].stateNo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.contactPerson}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPerson: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      contactPerson: !value ? 'Contact Person is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.contactPerson ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.contactPerson && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].contactPerson}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.contactPhoneNo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPhoneNo: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      contactPhoneNo: !value ? 'Contact Phone No is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.contactPhoneNo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.contactPhoneNo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].contactPhoneNo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.contactEmail}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactEmail: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      contactEmail: !value ? 'Contact Email is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.contactEmail ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.contactEmail && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].contactEmail}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.stateCode}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, stateCode: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      stateCode: !value ? 'State Code is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.stateCode ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.stateCode && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].stateCode}</div>
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
          {tabValue === 1 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowAddress}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">State</th>
                          <th className="px-2 py-2 text-white">Business Place</th>
                          <th className="px-2 py-2 text-white">State GST IN</th>
                          <th className="px-2 py-2 text-white">City Name</th>
                          <th className="px-2 py-2 text-white">Address Type</th>
                          <th className="px-2 py-2 text-white">Address Line1</th>
                          <th className="px-2 py-2 text-white">Address Line2</th>
                          <th className="px-2 py-2 text-white">Address Line3</th>
                          <th className="px-2 py-2 text-white">Pin Code</th>
                          <th className="px-2 py-2 text-white">Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowAddress(row.id)}
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
                              <select
                                value={row.state}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, state: e.target.value } : r)))
                                }
                                // onKeyDown={(e) => handleKeyDown(e, row)}
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>

                            <td className="border px-2 py-2">
                              <select
                                value={row.businessPlace}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, businessPlace: e.target.value } : r)))
                                }
                                // onKeyDown={(e) => handleKeyDown(e, row)}
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.stateGstIn}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, stateGstIn: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], stateGstIn: !value ? 'State Gst In is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.stateGstIn ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.stateGstIn && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].stateGstIn}</div>
                              )}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.cityName}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, cityName: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      cityName: !value ? 'City Name is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.cityName ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.cityName && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].cityName}</div>
                              )}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.addressType}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, addressType: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      addressType: !value ? 'Address  Type is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.addressType ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.addressType && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].addressType}</div>
                              )}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.addressLine1}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, addressLine1: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      addressLine1: !value ? 'Address Line1 is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.addressLine1 ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.addressLine1 && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].addressLine1}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.addressLine2}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, addressLine2: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      addressLine2: !value ? 'Address Line2 is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.addressLine2 ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.addressLine2 && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].addressLine2}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.addressLine3}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, addressLine3: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      addressLine3: !value ? 'Address Line3 is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.addressLine3 ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.addressLine3 && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].addressLine3}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.pinCode}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, pinCode: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      pinCode: !value ? 'Pin Code is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.pinCode ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.pinCode && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].pinCode}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.contact}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, contact: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      contact: !value ? 'Contact is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.contact ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.contact && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].contact}</div>
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
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowDetailsOfDPO}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">Name</th>
                          <th className="px-2 py-2 text-white">Designation</th>
                          <th className="px-2 py-2 text-white">Phone</th>
                          <th className="px-2 py-2 text-white">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData2.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowDetailsOfDPO(row.id)}
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
                                value={row.name}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData2((prev) => prev.map((r) => (r.id === row.id ? { ...r, name: value } : r)));
                                  setTableErrors2((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], name: !value ? 'Name is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors2[index]?.name ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors2[index]?.name && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors2[index].name}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.designation}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData2((prev) => prev.map((r) => (r.id === row.id ? { ...r, designation: value } : r)));
                                  setTableErrors2((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      designation: !value ? 'Designation is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors2[index]?.designation ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors2[index]?.designation && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors2[index].designation}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.phone}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData2((prev) => prev.map((r) => (r.id === row.id ? { ...r, phone: value } : r)));
                                  setTableErrors2((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      phone: !value ? 'Phone is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors2[index]?.phone ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors2[index]?.phone && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors2[index].phone}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.email}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData2((prev) => prev.map((r) => (r.id === row.id ? { ...r, email: value } : r)));
                                  setTableErrors2((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      email: !value ? 'Contact Phone No is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors2[index]?.email ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors2[index]?.email && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors2[index].email}</div>
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

          {tabValue === 3 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowSpecialTdsWhTaxDetail}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">TDS / WH Section</th>
                          <th className="px-2 py-2 text-white">Rate From</th>
                          <th className="px-2 py-2 text-white">Rate To</th>
                          <th className="px-2 py-2 text-white">TDS / WH %</th>
                          <th className="px-2 py-2 text-white">SUR %</th>
                          <th className="px-2 py-2 text-white">ED %</th>
                          <th className="px-2 py-2 text-white">TDS Certificate No</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData3.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowSpecialTdsWhTaxDetail(row.id)}
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
                              <select
                                value={row.tdsWhSection}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, tdsWhSection: e.target.value } : r)))
                                }
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.rateFrom}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData3((prev) => prev.map((r) => (r.id === row.id ? { ...r, rateFrom: value } : r)));
                                  setTableErrors3((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      rateFrom: !value ? 'Rate From is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors3[index]?.rateFrom ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors3[index]?.rateFrom && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors3[index].rateFrom}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.rateTo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData3((prev) => prev.map((r) => (r.id === row.id ? { ...r, rateTo: value } : r)));
                                  setTableErrors3((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      rateTo: !value ? 'Rate To is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors3[index]?.rateTo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors3[index]?.rateTo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors3[index].rateTo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.tdsWh}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData3((prev) => prev.map((r) => (r.id === row.id ? { ...r, tdsWh: value } : r)));
                                  setTableErrors3((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      tdsWh: !value ? 'Tds Wh is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors3[index]?.tdsWh ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors3[index]?.tdsWh && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors3[index].tdsWh}</div>
                              )}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.sur}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData3((prev) => prev.map((r) => (r.id === row.id ? { ...r, sur: value } : r)));
                                  setTableErrors3((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      sur: !value ? 'Sur is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors3[index]?.sur ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors3[index]?.sur && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors3[index].sur}</div>}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.ed}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData3((prev) => prev.map((r) => (r.id === row.id ? { ...r, ed: value } : r)));
                                  setTableErrors3((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      ed: !value ? 'Ed is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors3[index]?.ed ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors3[index]?.ed && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors3[index].ed}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.tdsCertificateNo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData3((prev) => prev.map((r) => (r.id === row.id ? { ...r, tdsCertificateNo: value } : r)));
                                  setTableErrors3((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      tdsCertificateNo: !value ? 'Tds Certificate No is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors3[index]?.tdsCertificateNo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors3[index]?.tdsCertificateNo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors3[index].tdsCertificateNo}</div>
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
          {tabValue === 4 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowChargesExemption}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">TDS / WH Section</th>
                          <th className="px-2 py-2 text-white">Charges</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData4.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowChargesExemption(row.id)}
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
                              <select
                                value={row.tdsWhSection1}
                                onChange={(e) =>
                                  setTableData4((prev) => prev.map((r) => (r.id === row.id ? { ...r, tdsWhSection1: e.target.value } : r)))
                                }
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>

                            <td className="border px-2 py-2">
                              <select
                                value={row.charge}
                                onChange={(e) =>
                                  setTableData4((prev) => prev.map((r) => (r.id === row.id ? { ...r, charge: e.target.value } : r)))
                                }
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
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
          {tabValue === 5 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowCurrencyMapping}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">Transaction Currency</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData5.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowCurrencyMapping(row.id)}
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
                              <select
                                value={row.transactionCurrency}
                                onChange={(e) =>
                                  setTableData5((prev) =>
                                    prev.map((r) => (r.id === row.id ? { ...r, transactionCurrency: e.target.value } : r))
                                  )
                                }
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
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
          {tabValue === 6 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowSalesPerson}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">Sales Person</th>
                          <th className="px-2 py-2 text-white">Emp Code</th>
                          <th className="px-2 py-2 text-white">Sales Branch</th>
                          <th className="px-2 py-2 text-white">Effective From</th>
                          <th className="px-2 py-2 text-white">Effective Till</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData6.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowSalesPerson(row.id)}
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
                                value={row.salesPerson}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData6((prev) => prev.map((r) => (r.id === row.id ? { ...r, salesPerson: value } : r)));
                                  setTableErrors6((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      salesPerson: !value ? 'Sales Person is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors6[index]?.salesPerson ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors6[index]?.salesPerson && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors6[index].salesPerson}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.empCode}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData6((prev) => prev.map((r) => (r.id === row.id ? { ...r, empCode: value } : r)));
                                  setTableErrors6((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      empCode: !value ? 'Emp Code is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors6[index]?.empCode ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors6[index]?.empCode && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors6[index].empCode}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.salesBranch}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData6((prev) => prev.map((r) => (r.id === row.id ? { ...r, salesBranch: value } : r)));
                                  setTableErrors6((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      salesBranch: !value ? 'Sales Branch is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors6[index]?.salesBranch ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors6[index]?.salesBranch && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors6[index].salesBranch}</div>
                              )}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.effectiveFrom}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData6((prev) => prev.map((r) => (r.id === row.id ? { ...r, effectiveFrom: value } : r)));
                                  setTableErrors6((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      effectiveFrom: !value ? 'Effective From is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors6[index]?.effectiveFrom ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors6[index]?.effectiveFrom && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors6[index].effectiveFrom}</div>
                              )}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.effectiveTill}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData6((prev) => prev.map((r) => (r.id === row.id ? { ...r, effectiveTill: value } : r)));
                                  setTableErrors6((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      effectiveTill: !value ? 'Effective Till is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors6[index]?.effectiveTill ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors6[index]?.effectiveTill && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors6[index].effectiveTill}</div>
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
          {tabValue === 7 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowTdsExempted}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">TDS Exempted Certificate</th>
                          <th className="px-2 py-2 text-white">Value</th>
                          <th className="px-2 py-2 text-white">Fin Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData7.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowTdsExempted(row.id)}
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
                                value={row.tdsExemptedCertificate}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData7((prev) => prev.map((r) => (r.id === row.id ? { ...r, tdsExemptedCertificate: value } : r)));
                                  setTableErrors7((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      tdsExemptedCertificate: !value ? 'Tds Exempted Certificate is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors7[index]?.tdsExemptedCertificate ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors7[index]?.tdsExemptedCertificate && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors7[index].tdsExemptedCertificate}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.valueTds}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData7((prev) => prev.map((r) => (r.id === row.id ? { ...r, valueTds: value } : r)));
                                  setTableErrors7((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      valueTds: !value ? 'Value is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors7[index]?.valueTds ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors7[index]?.valueTds && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors7[index].valueTds}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.finYear}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData7((prev) => prev.map((r) => (r.id === row.id ? { ...r, finYear: value } : r)));
                                  setTableErrors7((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      finYear: !value ? 'Fin Year is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors7[index]?.finYear ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors7[index]?.finYear && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors7[index].finYear}</div>
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
          {tabValue === 8 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRowPartnerTagging}>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">Partner Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData8.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase
                                  sx={{ borderRadius: '12px', marginLeft: '10px' }}
                                  onClick={() => handleDeleteRowPartnerTagging(row.id)}
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
                                value={row.partnerName}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData8((prev) => prev.map((r) => (r.id === row.id ? { ...r, partnerName: value } : r)));
                                  setTableErrors8((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      partnerName: !value ? 'Partner Name is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors8[index]?.partnerName ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors8[index]?.partnerName && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors8[index].partnerName}</div>
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
          {tabValue === 9 && (
            <div className="row d-flex mt-3">
              <div className="col-md-4 mb-3">
                <TextField
                  id="whoBoughtVendor"
                  fullWidth
                  name="whoBoughtVendor"
                  label="Who Bought Vendor"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="whatBasisVendorSelected"
                  fullWidth
                  name="whatBasisVendorSelected"
                  label="What Basis Vendor Selected"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>

              <div className="col-md-4 mb-3">
                <TextField
                  id="justification"
                  fullWidth
                  name="justification"
                  label="Justification"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="slaPoints"
                  fullWidth
                  name="slaPoints"
                  label="SLA Points"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="commonAgreedTerms"
                  fullWidth
                  name="commonAgreedTerms"
                  label="Common Agreed Terms"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
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
export default PartyMaster;
