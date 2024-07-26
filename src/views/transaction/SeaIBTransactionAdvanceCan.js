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

export const SeaIBTransactionAdvanceCan = () => {
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
      type: '',
      chargeCode: '',
      chargeName: '',
      taxable: '',
      ccf: '',
      applyOn: '',
      qty: '',
      rate: '',
      currency: '',
      exRate: '',
      fcAmount: '',
      lcAmount: '',
      taxablePercentage: '',
      tlcAmount: '',
      billAmount: ''
    }
  ]);

  const [tableData, setTableData] = useState([
    {
      sNo: 1,
      type: '',
      chargeCode: '',
      chargeName: '',
      taxable: '',
      ccf: '',
      applyOn: '',
      qty: '',
      rate: '',
      currency: '',
      exRate: '',
      fcAmount: '',
      lcAmount: '',
      taxablePercentage: '',
      tlcAmount: '',
      billAmount: ''
    }
  ]);

  const handleAddRowPackingList = () => {
    const newRow = {
      sNo: Date.now(),
      type: '',
      chargeCode: '',
      chargeName: '',
      taxable: '',
      ccf: '',
      applyOn: '',
      qty: '',
      rate: '',
      currency: '',
      exRate: '',
      fcAmount: '',
      lcAmount: '',
      taxablePercentage: '',
      tlcAmount: '',
      billAmount: ''
    };
    setTableData([...tableData, newRow]);
    setTableErrors([
      ...tableErrors,
      {
        type: '',
        chargeCode: '',
        chargeName: '',
        taxable: '',
        ccf: '',
        applyOn: '',
        qty: '',
        rate: '',
        currency: '',
        exRate: '',
        fcAmount: '',
        lcAmount: '',
        taxablePercentage: '',
        tlcAmount: '',
        billAmount: ''
      }
    ]);
  };

  const handleDeleteRowPackingList = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
    setTableErrors(tableErrors.filter((_, index) => index !== id - 1));
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
                id="profInvNo"
                fullWidth
                name="profInvNo"
                label="Prof Inv No"
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
                    label="Prof Inv Date"
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
                id="defFrtCurr"
                fullWidth
                name="defFrtCurr"
                label="Def Frt Curr"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="defFrtCurr1"
                fullWidth
                name="defFrtCurr1"
                // label="Def Frt Curr"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="billCurr"
                fullWidth
                name="billCurr"
                label="Bill Curr"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="billCurr1"
                fullWidth
                name="billCurr1"
                // label="Bill Curr"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="houseNo"
                fullWidth
                name="houseNo"
                label="House No"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="totPkgs"
                fullWidth
                name="totPkgs"
                label="Tot Pkgs"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="totGrWt"
                fullWidth
                name="totGrWt"
                label="Tot Gr Wt"
                size="small"
                //   value={formData.employeeCode}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeCode}
                //   helperText={fieldErrors.employeeCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="masterNo"
                fullWidth
                name="masterNo"
                label="Master No"
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
                <InputLabel id="chargeScheme">Charge Scheme</InputLabel>
                <Select
                  labelId="chargeScheme"
                  label="Charge Scheme"
                  name="chargeScheme"
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
                id="10Usd"
                fullWidth
                name="10Usd"
                label="10 USD"
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
                      id="taxExempt"
                      name="taxExempt"
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                    />
                  }
                  label="Tax Exempt"
                />
              </FormGroup>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="billOfEntry"
                fullWidth
                name="billOfEntry"
                label="Bill Of Entry"
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
            <Tab label="Party Detail" />
            <Tab label="Charge Particulars" />
          </Tabs>
          {tabValue === 0 && (
            <div className="row d-flex mt-3">
              <div className="col-md-4 mb-3">
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  // error={!!fieldErrors.gender}
                >
                  <InputLabel id="shipper">Shipper</InputLabel>
                  <Select
                    labelId="shipper"
                    label="Shipper"
                    name="shipper"
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
                  <InputLabel id="addType">Add Type</InputLabel>
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
                  <InputLabel id="notify">Notify</InputLabel>
                  <Select
                    labelId="notify"
                    label="Notify"
                    name="notify"
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
                  <InputLabel id="addType">Add Type</InputLabel>
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
                  <InputLabel id="consignee">Consignee</InputLabel>
                  <Select
                    labelId="consignee"
                    label="Consignee"
                    name="consignee"
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
                  <InputLabel id="addType">Add Type</InputLabel>
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
                  <InputLabel id="billToParty">Bill To Party</InputLabel>
                  <Select
                    labelId="billToParty"
                    label="Bill To Party"
                    name="billToParty"
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
                  <InputLabel id="addType">Add Type</InputLabel>
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">Type</th>
                          <th className="px-2 py-2 text-white">Charge Code</th>
                          <th className="px-2 py-2 text-white">Charge Name</th>
                          <th className="px-2 py-2 text-white">Taxable</th>
                          <th className="px-2 py-2 text-white">CCF</th>
                          <th className="px-2 py-2 text-white">Apply On</th>
                          <th className="px-2 py-2 text-white">Qty</th>
                          <th className="px-2 py-2 text-white">Rate</th>
                          <th className="px-2 py-2 text-white">Currency</th>
                          <th className="px-2 py-2 text-white">Ex Rate</th>
                          <th className="px-2 py-2 text-white">FC Amount</th>
                          <th className="px-2 py-2 text-white">LC Amount</th>
                          <th className="px-2 py-2 text-white">Taxable Percentage</th>
                          <th className="px-2 py-2 text-white">TLC Amount</th>
                          <th className="px-2 py-2 text-white">Bill Amount</th>
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
                              <select
                                value={row.type}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, type: e.target.value } : r)))
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
                                value={row.chargeCode}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, chargeCode: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      chargeCode: !value ? 'Charge Code is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.chargeCode ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.chargeCode && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].chargeCode}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.chargeName}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, chargeName: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      chargeName: !value ? 'Charge Name is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.chargeName ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.chargeName && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].chargeName}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.taxable}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, taxable: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      taxable: !value ? 'Taxable is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.taxable ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.taxable && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].taxable}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.ccf}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, ccf: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      ccf: !value ? 'CCF is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.ccf ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.ccf && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].ccf}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.applyOn}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, applyOn: e.target.value } : r)))
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
                              <input
                                type="text"
                                value={row.rate}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, rate: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      rate: !value ? 'Rate is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.rate ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.rate && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].rate}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.currency}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, currency: e.target.value } : r)))
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
                                value={row.exRate}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, exRate: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      exRate: !value ? 'Ex Rate is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.exRate ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.exRate && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].exRate}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.fcAmount}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, fcAmount: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      fcAmount: !value ? 'Fc Amount is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.fcAmount ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.fcAmount && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].fcAmount}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.lcAmount}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, lcAmount: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      lcAmount: !value ? 'Lc Amount is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.lcAmount ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.lcAmount && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].lcAmount}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.taxablePercentage}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, taxablePercentage: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      taxablePercentage: !value ? 'Taxable Percentage is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.taxablePercentage ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.taxablePercentage && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].taxablePercentage}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.tlcAmount}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, tlcAmount: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      tlcAmount: !value ? 'TLC Amount is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.tlcAmount ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.tlcAmount && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].tlcAmount}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.billAmount}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, billAmount: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      billAmount: !value ? 'Bill Amount is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.billAmount ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.billAmount && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].billAmount}</div>
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
export default SeaIBTransactionAdvanceCan;
