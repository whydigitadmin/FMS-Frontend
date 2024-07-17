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

export const shipmentAO = () => {
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
      custPONo: '',
      custPODt: '',
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
      sidNo: 1,
      custPONo: '',
      custPODt: '',
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
      sidNo: Date.now(),
      custPONo: '',
      custPODt: '',
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
        custPONo: '',
        custPODt: '',
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
      amountINR: '',
      estimatePayDate: '',
      fundReqDate: ''
    }
  ]);

  const [tableData1, setTableData1] = useState([
    {
      partyVendor: '',
      linearCarrier: '',
      billToCustomer: '',
      chargeCode: '',
      description: '',
      amountINR: '',
      estimatePayDate: '',
      fundReqDate: ''
    }
  ]);

  const handleAddRowCostEstimate = () => {
    const newRow = {
      partyVendor: '',
      linearCarrier: '',
      billToCustomer: '',
      chargeCode: '',
      description: '',
      amountINR: '',
      estimatePayDate: '',
      fundReqDate: ''
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
        amountINR: '',
        estimatePayDate: '',
        fundReqDate: ''
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
              <TextField
                id="soNo"
                fullWidth
                name="soNo"
                label="SO No"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth variant="filled" size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="SO Date"
                    //   value={formData.joiningDate}
                    slotProps={{
                      textField: { size: 'small', clearable: true }
                    }}
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
                id="globalShipNo"
                fullWidth
                name="globalShipNo"
                label="Global Ship No"
                size="small"
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
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="pod"
                fullWidth
                name="pod"
                label="POD"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="jobNo"
                fullWidth
                name="jobNo"
                label="Job No"
                size="small"
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
                <InputLabel id="gender">Nominated By</InputLabel>
                <Select
                  labelId="gender"
                  label="Nominated By"
                  name="nominatedBy"
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
                id="hawbNo"
                fullWidth
                name="hawbNo"
                label="HAWB No"
                size="small"
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
                    //   onChange={(date) => handleDateChange('joiningDate', date)}
                    //   renderInput={(params) => (
                    //     <TextField {...params} size="small" error={!!fieldErrors.joiningDate} helperText={fieldErrors.joiningDate} />
                    //   )}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl
                variant="outlined"
                fullWidth
                size="small"
                // error={!!fieldErrors.gender}
              >
                <InputLabel id="gender">Delivery Terms</InputLabel>
                <Select
                  labelId="gender"
                  label="Delivery Terms"
                  name="deliveryTerms"
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
                <InputLabel id="freight">Freight</InputLabel>
                <Select
                  labelId="freight"
                  label="Freight"
                  name="freight"
                  //   value={formData.gender} onChange={handleInputChange}
                >
                  <MenuItem value="COLLECT">COLLECT</MenuItem>
                  <MenuItem value="PREPAID">PREPAID</MenuItem>
                </Select>
                {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="mawbNo"
                fullWidth
                name="mawbNo"
                label="MAWB No"
                size="small"
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
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="billOfEntry"
                fullWidth
                name="billOfEntry"
                label="Bill Of Entry"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
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
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
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
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
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
                      id="joBHouse"
                      name="joBHouse"
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
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
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  // error={!!fieldErrors.gender}
                >
                  <InputLabel id="gender">Add Type</InputLabel>
                  <Select
                    labelId="addType"
                    label="Add Type"
                    name="addType"
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
                  id="address"
                  fullWidth
                  name="address"
                  label="Address"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="consignee"
                  fullWidth
                  name="consignee"
                  label="Consignee"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  // error={!!fieldErrors.gender}
                >
                  <InputLabel id="gender">Add Type</InputLabel>
                  <Select
                    labelId="addType"
                    label="Add Type"
                    name="addType"
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
                  id="address"
                  fullWidth
                  name="address"
                  label="Address"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="notify"
                  fullWidth
                  name="notify"
                  label="Notify"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  // error={!!fieldErrors.gender}
                >
                  <InputLabel id="gender">Add Type</InputLabel>
                  <Select
                    labelId="addType"
                    label="Add Type"
                    name="addType"
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
                  id="address"
                  fullWidth
                  name="address"
                  label="Address"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  // error={!!fieldErrors.gender}
                >
                  <InputLabel id="gender">Sales Category</InputLabel>
                  <Select
                    labelId="salesCategory"
                    label="Sales Category"
                    name="salesCategory"
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
                  <InputLabel id="gender">Sales Category</InputLabel>
                  <Select
                    labelId="salesPerson"
                    label="Sales Person"
                    name="salesPerson"
                    //   value={formData.gender} onChange={handleInputChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                  {/* {fieldErrors.gender && <FormHelperText>{fieldErrors.gender}</FormHelperText>} */}
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
                                value={row.custPONo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, custPONo: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], custPONo: !value ? 'Cust PO No is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.custPONo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.custPONo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].custPONo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.custPODt}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, custPODt: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      custPODt: !value ? 'Cust PO Dt is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.custPODt ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.custPODt && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].custPODt}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.industry}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, industry: e.target.value } : r)))
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
                                // onKeyDown={(e) => handleKeyDown(e, row)}
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
                                // onKeyDown={(e) => handleKeyDown(e, row)}
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
                        {tableData.map((row, index) => (
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
                                value={row.amountINR}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, amountINR: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      chWt: !value ? 'Amount INR is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.amountINR ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.amountINR && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].amountINR}</div>
                              )}
                            </td>
                            {/* <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.estimatePayDate}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, estimatePayDate: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      estimatePayDate: !value ? 'Estimate Pay Date is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.estimatePayDate ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.estimatePayDate && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].estimatePayDate}</div>
                              )}
                            </td> */}
                            <td className="border px-2 py-2">
                              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  value={row.estimatePayDate}
                                  onChange={(newValue) => {
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, estimatePayDate: newValue } : r)));
                                    setTableErrors1((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = {
                                        ...newErrors[index],
                                        estimatePayDate: !newValue ? 'Estimate Pay Date is required' : ''
                                      };
                                      return newErrors;
                                    });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      error={!!tableErrors1[index]?.estimatePayDate}
                                      helperText={tableErrors1[index]?.estimatePayDate}
                                      style={{ marginBottom: '6px' }}
                                    />
                                  )}
                                />
                              </LocalizationProvider> */}
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  label="MAWB Date"
                                  //   value={formData.joiningDate}
                                  slotProps={{
                                    textField: { size: 'small', clearable: true }
                                  }}
                                  //   onChange={(date) => handleDateChange('joiningDate', date)}
                                  //   renderInput={(params) => (
                                  //     <TextField {...params} size="small" error={!!fieldErrors.joiningDate} helperText={fieldErrors.joiningDate} />
                                  //   )}
                                />
                              </LocalizationProvider>
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.fundReqDate}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, fundReqDate: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      fundReqDate: !value ? 'Fund Req Date is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.fundReqDate ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.fundReqDate && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].fundReqDate}</div>
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
            <div className="row d-flex mt-3">
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalNoOfPackages"
                  fullWidth
                  name="totalNoOfPackages"
                  label="Total No of Pkgs"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalChWt"
                  fullWidth
                  name="totalChWt"
                  label="Total Ch Wt"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalEstimationCost"
                  fullWidth
                  name="totalEstimationCost"
                  label="Total Estimation Cost"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalGrWt"
                  fullWidth
                  name="totalGrWt"
                  label="Total Gr Wt"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totalVolWt"
                  fullWidth
                  name="totalVolWt"
                  label="Total Vol Wt"
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
export default shipmentAO;