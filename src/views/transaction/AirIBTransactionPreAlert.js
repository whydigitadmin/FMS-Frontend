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

export const AirIBTransactionPreAlert = () => {
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
      houseNo: '',
      hdate: '',
      jobNo: '',
      jobBranch: '',
      closed: '',
      pkgs: '',
      grWt: '',
      chWt: '',
      shipper: '',
      consignee: '',
      bro: '',
      notify: '',
      salesCategory: '',
      salesPerson: '',
      pod: '',
      fpod: '',
      incoterm: '',
      freight: '',
      industry: '',
      billOfEntry: '',
      itemDescription: ''
    }
  ]);

  const [tableData, setTableData] = useState([
    {
      sNo: 1,
      houseNo: '',
      hdate: '',
      jobNo: '',
      jobBranch: '',
      closed: '',
      pkgs: '',
      grWt: '',
      chWt: '',
      shipper: '',
      consignee: '',
      bro: '',
      notify: '',
      salesCategory: '',
      salesPerson: '',
      pod: '',
      fpod: '',
      incoterm: '',
      freight: '',
      industry: '',
      billOfEntry: '',
      itemDescription: ''
    }
  ]);

  const handleAddRowPackingList = () => {
    const newRow = {
      sNo: Date.now(),
      houseNo: '',
      hdate: '',
      jobNo: '',
      jobBranch: '',
      closed: '',
      pkgs: '',
      grWt: '',
      chWt: '',
      shipper: '',
      consignee: '',
      bro: '',
      notify: '',
      salesCategory: '',
      salesPerson: '',
      pod: '',
      fpod: '',
      incoterm: '',
      freight: '',
      industry: '',
      billOfEntry: '',
      itemDescription: ''
    };
    setTableData([...tableData, newRow]);
    setTableErrors([
      ...tableErrors,
      {
        houseNo: '',
        hdate: '',
        jobNo: '',
        jobBranch: '',
        closed: '',
        pkgs: '',
        grWt: '',
        chWt: '',
        shipper: '',
        consignee: '',
        bro: '',
        notify: '',
        salesCategory: '',
        salesPerson: '',
        pod: '',
        fpod: '',
        incoterm: '',
        freight: '',
        industry: '',
        billOfEntry: '',
        itemDescription: ''
      }
    ]);
  };

  const handleDeleteRowPackingList = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
    setTableErrors(tableErrors.filter((_, index) => index !== id - 1));
  };

  const [tableErrors1, setTableErrors1] = useState([
    {
      airLineCode: '',
      airLineName: '',
      flightNo: '',
      etd: '',
      etdTime: '',
      eta: '',
      etaTime: '',
      pol: '',
      pod: ''
    }
  ]);

  const [tableData1, setTableData1] = useState([
    {
      sNo: 1,
      airLineCode: '',
      airLineName: '',
      flightNo: '',
      etd: '',
      etdTime: '',
      eta: '',
      etaTime: '',
      pol: '',
      pod: ''
    }
  ]);

  const handleAddRowCostEstimate = () => {
    const newRow = {
      sNo: Date.now(),
      airLineCode: '',
      airLineName: '',
      flightNo: '',
      etd: '',
      etdTime: '',
      eta: '',
      etaTime: '',
      pol: '',
      pod: ''
    };
    setTableData1([...tableData1, newRow]);
    setTableErrors1([
      ...tableErrors1,
      {
        airLineCode: '',
        airLineName: '',
        flightNo: '',
        etd: '',
        etdTime: '',
        eta: '',
        etaTime: '',
        pol: '',
        pod: ''
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
                id="type"
                fullWidth
                name="type"
                label="Type"
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
                      id="direct"
                      name="direct"
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                    />
                  }
                  label="Direct"
                />
              </FormGroup>
            </div>
            <div className="col-md-4 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="autoEdi"
                      name="autoEdi"
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                    />
                  }
                  label="Auto EDI"
                />
              </FormGroup>
            </div>
            <div className="col-md-4 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="manifestDone"
                      name="manifestDone"
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                    />
                  }
                  label="Manifest Done"
                />
              </FormGroup>
            </div>
            <div className="col-md-4 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="jobAssigned"
                      name="jobAssigned"
                      // checked={formData.active}
                      // onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                    />
                  }
                  label="Job Assigned"
                />
              </FormGroup>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="docNo"
                fullWidth
                name="docNo"
                label="Doc No"
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
                    // label="SO Date"
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
                id="agent"
                fullWidth
                name="agent"
                label="Agent"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="airCarrier"
                fullWidth
                name="airCarrier"
                label="Air Carrier"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="airCarrier1"
                fullWidth
                name="airCarrier1"
                // label="Air Carrier"
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
              <FormControl fullWidth variant="filled" size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Flight Date"
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
                id="flightNo"
                fullWidth
                name="flightNo"
                label="Flight No"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="itemDescription"
                fullWidth
                name="itemDescription"
                label="Item Description"
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
                    label="Master Date"
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
                id="masterNo"
                fullWidth
                name="masterNo"
                label="Master No"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="igmNoYr"
                fullWidth
                name="igmNoYr"
                label="IGM No./ Yr"
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
                    // label="SO Date"
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
                id="airlineDoNo"
                fullWidth
                name="airlineDoNo"
                label="Airline DO No"
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
                <InputLabel id="shipType">Ship Type</InputLabel>
                <Select
                  labelId="shipType"
                  label="Ship Type"
                  name="shipType"
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
                id="noOfPkgs"
                fullWidth
                name="noOfPkgs"
                label="No Of Pkgs"
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
                <InputLabel id="defFreightCurr">Def Freight Curr</InputLabel>
                <Select
                  labelId="defFreightCurr"
                  label="Def Freight Curr"
                  name="defFreightCurr"
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
                id="defFreightCurr1"
                fullWidth
                name="defFreightCurr1"
                // label="Air Carrier"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="sectorAWB"
                fullWidth
                name="sectorAWB"
                label="Sector AWB"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="grWtinKgs"
                fullWidth
                name="grWtinKgs"
                label="Gr Wt in Kgs"
                size="small"
                //   value={formData.employeeName}
                //   onChange={handleInputChange}
                //   error={fieldErrors.employeeName}
                //   helperText={fieldErrors.employeeName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="chWtinKgs"
                fullWidth
                name="chWtinKgs"
                label="Ch Wt in Kgs"
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
                <InputLabel id="masterFreight">Master Freight</InputLabel>
                <Select
                  labelId="masterFreight"
                  label="Master Freight"
                  name="masterFreight"
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
            <Tab label="House Particulars" />
            <Tab label="Carrier Details" />
            <Tab label="Summary" />
          </Tabs>
          {tabValue === 0 && (
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
                          <th className="px-2 py-2 text-white">House No</th>
                          <th className="px-2 py-2 text-white">Date</th>
                          <th className="px-2 py-2 text-white">Job No</th>
                          <th className="px-2 py-2 text-white">Job Branch</th>
                          <th className="px-2 py-2 text-white">Closed</th>
                          <th className="px-2 py-2 text-white">Pkgs</th>
                          <th className="px-2 py-2 text-white">Gr Wt</th>
                          <th className="px-2 py-2 text-white">Ch Wt</th>
                          <th className="px-2 py-2 text-white">Shipper</th>
                          <th className="px-2 py-2 text-white">Consignee</th>
                          <th className="px-2 py-2 text-white">BRO</th>
                          <th className="px-2 py-2 text-white">Notify</th>
                          <th className="px-2 py-2 text-white">Sales Category</th>
                          <th className="px-2 py-2 text-white">Sales Person</th>
                          <th className="px-2 py-2 text-white">POD</th>
                          <th className="px-2 py-2 text-white">FPOD</th>
                          <th className="px-2 py-2 text-white">Incoterm</th>
                          <th className="px-2 py-2 text-white">Freight</th>
                          <th className="px-2 py-2 text-white">Industry</th>
                          <th className="px-2 py-2 text-white">Bill of Entry</th>
                          <th className="px-2 py-2 text-white">Item Description</th>
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
                                value={row.houseNo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, houseNo: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], houseNo: !value ? 'House No is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.houseNo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.houseNo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].houseNo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  value={row.hdate}
                                  onChange={(newValue) => {
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, hdate: newValue } : r)));
                                    setTableErrors1((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = {
                                        ...newErrors[index],
                                        hdate: !newValue ? 'Date is required' : ''
                                      };
                                      return newErrors;
                                    });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      error={!!tableErrors1[index]?.hdate}
                                      helperText={tableErrors1[index]?.hdate}
                                      style={{ marginBottom: '6px' }}
                                    />
                                  )}
                                />
                              </LocalizationProvider> */}
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  label="Date"
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
                                value={row.jobNo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, jobNo: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      jobNo: !value ? 'Job No is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.jobNo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.jobNo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].jobNo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.jobBranch}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, jobBranch: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      jobBranch: !value ? 'Job Branch is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.jobBranch ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.jobBranch && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].jobBranch}</div>
                              )}
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.closed}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, closed: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      closed: !value ? 'Closed is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.closed ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.closed && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].closed}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.pkgs}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, pkgs: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      pkgs: !value ? 'Pkgs is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.pkgs ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.pkgs && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].pkgs}</div>}
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
                                      grWt: !value ? 'Gr Wt is required' : ''
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
                                      chWt: !value ? 'Ch Wt is required' : ''
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
                                value={row.shipper}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, shipper: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      shipper: !value ? 'Shipper is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.shipper ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.shipper && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].shipper}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.consignee}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, consignee: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      consignee: !value ? 'Consignee is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.consignee ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.consignee && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].consignee}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.bro}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, bro: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      bro: !value ? 'BRO is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.bro ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.bro && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].bro}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.notify}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, notify: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      notify: !value ? 'Notify is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.notify ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.notify && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].notify}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.salesCategory}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, salesCategory: e.target.value } : r)))
                                }
                                // onKeyDown={(e) => handleKeyDown(e, row)}
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.salesPerson}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, salesPerson: e.target.value } : r)))
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
                                value={row.pod}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, pod: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      pod: !value ? 'Pod is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.pod ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.pod && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].pod}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.fpod}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, fpod: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      fpod: !value ? 'Fpod is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.fpod ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.fpod && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].fpod}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.incoterm}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, incoterm: e.target.value } : r)))
                                }
                                // onKeyDown={(e) => handleKeyDown(e, row)}
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.freight}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, freight: e.target.value } : r)))
                                }
                                // onKeyDown={(e) => handleKeyDown(e, row)}
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
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
                                value={row.billOfEntry}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, billOfEntryX: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      billOfEntry: !value ? 'Bill Of Entry is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.billOfEntry ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.billOfEntry && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].billOfEntry}</div>
                              )}
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
                          <th className="px-2 py-2 text-white">SNo</th>
                          <th className="px-2 py-2 text-white">Air Line Code</th>
                          <th className="px-2 py-2 text-white">Air Line Name</th>
                          <th className="px-2 py-2 text-white">Flight No</th>
                          <th className="px-2 py-2 text-white">ETD</th>
                          <th className="px-2 py-2 text-white">Time</th>
                          <th className="px-2 py-2 text-white">ETA</th>
                          <th className="px-2 py-2 text-white">Time</th>
                          <th className="px-2 py-2 text-white">POL</th>
                          <th className="px-2 py-2 text-white">POD</th>
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

                            <td className="border px-2 py-2" style={{ width: '50px' }}>
                              <input type="text" value={`${index + 1}`} readOnly style={{ width: '100%' }} />
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.airLineCode}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, airLineCode: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], airLineCode: !value ? 'Air Line Code is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.airLineCode ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.airLineCode && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].airLineCode}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.airLineName}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, airLineName: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      airLineName: !value ? 'Air Line Name is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.airLineName ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.airLineName && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].airLineName}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.flightNo}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, flightNo: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      flightNo: !value ? 'Flight No is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.flightNo ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.flightNo && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].flightNo}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  value={row.etd}
                                  onChange={(newValue) => {
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, etd: newValue } : r)));
                                    setTableErrors1((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = {
                                        ...newErrors[index],
                                        etd: !newValue ? 'Etd is required' : ''
                                      };
                                      return newErrors;
                                    });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      error={!!tableErrors1[index]?.etd}
                                      helperText={tableErrors1[index]?.etd}
                                      style={{ marginBottom: '6px' }}
                                    />
                                  )}
                                />
                              </LocalizationProvider>
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.etdTime}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, etdTime: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      etdTime: !value ? 'Time is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.etdTime ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.etdTime && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].etdTime}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  value={row.eta}
                                  onChange={(newValue) => {
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, eta: newValue } : r)));
                                    setTableErrors1((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = {
                                        ...newErrors[index],
                                        eta: !newValue ? 'Eta is required' : ''
                                      };
                                      return newErrors;
                                    });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      error={!!tableErrors1[index]?.eta}
                                      helperText={tableErrors1[index]?.eta}
                                      style={{ marginBottom: '6px' }}
                                    />
                                  )}
                                />
                              </LocalizationProvider>
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.etaTime}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, etaTime: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      etaTime: !value ? 'Time is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.etaTime ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.etaTime && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].etaTime}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.pol}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, pol: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      pol: !value ? 'Pol is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.pol ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.pol && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].pol}</div>}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.pod}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, pod: value } : r)));
                                  setTableErrors1((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      pod: !value ? 'Pod is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors1[index]?.pod ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors1[index]?.pod && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].pod}</div>}
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
            <div className="row d-flex mt-3">
              <div className="col-md-4 mb-3">
                <TextField
                  id="totHousePkgs"
                  fullWidth
                  name="totHousePkgs"
                  label="Tot House Pkgs"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totHouseGrWt"
                  fullWidth
                  name="totHouseGrWt"
                  label="Tot House Gr Wt"
                  size="small"
                  //   value={formData.employeeCode}
                  //   onChange={handleInputChange}
                  //   error={fieldErrors.employeeCode}
                  //   helperText={fieldErrors.employeeCode}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="totHouseChWt"
                  fullWidth
                  name="totHouseChWt"
                  label="Tot House Ch Wt"
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
export default AirIBTransactionPreAlert;
