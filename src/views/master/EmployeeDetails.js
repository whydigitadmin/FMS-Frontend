import ClearIcon from '@mui/icons-material/Clear';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, ButtonBase, FormHelperText, Tooltip } from '@mui/material';
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

export const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    employeeCode: '',
    employeeName: '',
    gender: '',
    branch: '',
    active: true,
    joiningDate: null,
    department: '',
    designation: '',
    appointmentType: '',
    modeOfEntry: '',
    dateOfBirth: null,
    leavingDate: null
  });
  const [listView, setListView] = useState(false);

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    employeeCode: '',
    employeeName: '',
    gender: '',
    branch: '',
    active: true,
    joiningDate: '',
    department: '',
    designation: '',
    appointmentType: '',
    modeOfEntry: '',
    dateOfBirth: '',
    leavingDate: ''
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  // const handleSave = () => {
  //   // Check if any field is empty
  //   const errors = Object.keys(formData).reduce((acc, key) => {
  //     if (!formData[key]) {
  //       acc[key] = true;
  //     }
  //     return acc;
  //   }, {});
  //   // If there are errors, set the corresponding fieldErrors state to true
  //   if (Object.keys(errors).length > 0) {
  //     setFieldErrors(errors);
  //     return; // Prevent API call if there are errors
  //   }
  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/api/master/updateCreateSetTaxRate`, formData)
  //     .then((response) => {
  //       console.log('Response:', response.data);
  //       setFormData({
  //         chapter: '',
  //         subChapter: '',
  //         hsnCode: '',
  //         branchLocation: '',
  //         newRate: '',
  //         exempted: ''
  //       });
  //       toast.success('Set Tax Rate Created Successfully', {
  //         autoClose: 2000,
  //         theme: 'colored'
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  const handleSave = () => {
    const errors = Object.keys(formData).reduce((acc, key) => {
      if (formData[key] === '' || formData[key] === null) {
        acc[key] = true;
      }
      return acc;
    }, {});

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const payload = {
      ...formData,
      active: formData.active ? 'true' : 'false',
      joiningDate: formData.joiningDate?.format('YYYY-MM-DD') || '',
      dateOfBirth: formData.dateOfBirth?.format('YYYY-MM-DD') || '',
      leavingDate: formData.leavingDate?.format('YYYY-MM-DD') || '',
      orgId: 1 // Update with actual orgId if needed
      // createdBy: 'string', // Update with actual createdBy if needed
      // updatedBy: 'string' // Update with actual updatedBy if needed
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateEmployee`, payload)
      .then((response) => {
        console.log('Response:', response.data);
        setFormData({
          employeeCode: '',
          employeeName: '',
          gender: '',
          branch: '',
          active: true,
          joiningDate: null,
          department: '',
          designation: '',
          appointmentType: '',
          modeOfEntry: '',
          dateOfBirth: null,
          leavingDate: null
        });
        toast.success('Employee Created Successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getAllEmployeeDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getEmployeeById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableData(response.data.paramObjectsMap.employeeVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllEmployeeDetails();
    setListView(true);
  };

  const handleBackToInput = () => {
    setListView(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        },
        enableSorting: false,
        enableColumnOrdering: false,
        enableEditing: false,
        Cell: ({ row }) => (
          <div>
            {/* <IconButton onClick={() => handleViewRow(row)}>
              <VisibilityIcon />
            </IconButton> */}
            <IconButton onClick={() => handleEditRow(row)}>
              <EditIcon />
            </IconButton>
          </div>
        )
      },
      {
        accessorKey: 'employeeName',
        header: 'Employee Name',
        size: 50,
        muiTableHeadCellProps: {
          align: 'first'
        },
        muiTableBodyCellProps: {
          align: 'first'
        }
      },
      {
        accessorKey: 'branch',
        header: 'Branch',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'modeOfEntry',
        header: 'Mode of Entry',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'active',
        header: 'Active',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        },
        Cell: ({ cell: { value } }) => <span>{value ? 'Active' : 'Active'}</span>
      }
    ],
    []
  );

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="card w-full p-6 bg-base-100 shadow-xl" style={{ padding: '20px' }}>
        {!listView ? (
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
                <ButtonBase sx={{ borderRadius: '12px' }} onClick={handleView}>
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
              <div className="col-md-4 mb-3">
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
              <div className="col-md-4 mb-3">
                <FormControl fullWidth size="small" error={fieldErrors.gender}>
                  <InputLabel>Gender</InputLabel>
                  <Select name="gender" value={formData.gender} onChange={handleInputChange}>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                  {fieldErrors.gender && <FormHelperText>Gender is required</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth size="small" error={fieldErrors.branch}>
                  <InputLabel>Branch</InputLabel>
                  <Select name="branch" value={formData.branch} onChange={handleInputChange}>
                    <MenuItem value="branch1">Branch 1</MenuItem>
                    <MenuItem value="branch2">Branch 2</MenuItem>
                  </Select>
                  {fieldErrors.branch && <FormHelperText>Branch is required</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="active"
                        checked={formData.active}
                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                      />
                    }
                    label="Active"
                  />
                </FormGroup>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Joining Date"
                      value={formData.joiningDate}
                      onChange={(date) => handleDateChange('joiningDate', date)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          error={fieldErrors.joiningDate}
                          helperText={fieldErrors.joiningDate && 'Joining Date is required'}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl size="small" fullWidth error={fieldErrors.department}>
                  <InputLabel>Department</InputLabel>
                  <Select name="department" value={formData.department} onChange={handleInputChange}>
                    <MenuItem value="dept1">Department 1</MenuItem>
                    <MenuItem value="dept2">Department 2</MenuItem>
                  </Select>
                  {fieldErrors.department && <FormHelperText>Department is required</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl size="small" fullWidth error={fieldErrors.designation}>
                  <InputLabel>Designation</InputLabel>
                  <Select name="designation" value={formData.designation} onChange={handleInputChange}>
                    <MenuItem value="desig1">Designation 1</MenuItem>
                    <MenuItem value="desig2">Designation 2</MenuItem>
                  </Select>
                  {fieldErrors.designation && <FormHelperText>Designation is required</FormHelperText>}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
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
              <div className="col-md-4 mb-3">
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
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date Of Birth"
                      value={formData.dateOfBirth}
                      onChange={(date) => handleDateChange('dateOfBirth', date)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          error={fieldErrors.dateOfBirth}
                          helperText={fieldErrors.dateOfBirth && 'Date Of Birth is required'}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Leaving Date"
                      value={formData.leavingDate}
                      onChange={(date) => handleDateChange('leavingDate', date)}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-4">
              <div>
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
                {/* <IconButton onClick={handleBackToInput} color="primary">
                  <ArrowBackIcon />
                </IconButton> */}
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
                    {/* <Tooltip arrow placement="right" title="Edit">
                  <IconButton style={{ color: "blue" }}>
                    <Edit />
                  </IconButton>
                </Tooltip>

                <Tooltip arrow placement="right" title="View">
                  <IconButton
                    color="primary"
                    // onClick={() => handleView(row.original)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip> */}
                  </Box>
                )}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default EmployeeDetails;
