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
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    chapter: '',
    subChapter: '',
    hsnCode: '',
    branchLocation: '',
    newRate: '',
    exempted: ''
  });
  const [listView, setListView] = useState(false);

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    chapter: false,
    subChapter: false,
    hsnCode: false,
    branchLocation: false,
    newRate: false,
    exempted: false
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleSave = () => {
    // Check if any field is empty
    const errors = Object.keys(formData).reduce((acc, key) => {
      if (!formData[key]) {
        acc[key] = true;
      }
      return acc;
    }, {});
    // If there are errors, set the corresponding fieldErrors state to true
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return; // Prevent API call if there are errors
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/master/updateCreateSetTaxRate`, formData)
      .then((response) => {
        console.log('Response:', response.data);
        setFormData({
          chapter: '',
          subChapter: '',
          hsnCode: '',
          branchLocation: '',
          newRate: '',
          exempted: ''
        });
        toast.success('Set Tax Rate Created Successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleView = () => {
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
      // {
      //   accessorKey: "cityid",
      //   header: "ID",
      //   size: 50,
      //   muiTableHeadCellProps: {
      //     align: "first",
      //   },
      //   muiTableBodyCellProps: {
      //     align: "first",
      //   },
      // },
      {
        accessorKey: 'cityName',
        header: 'City',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'cityCode',
        header: 'Code',
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
      <div>{/* <ToastContainer /> */}</div>
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
                  id="outlined-textarea"
                  label="Employee Code"
                  placeholder="Placeholder"
                  variant="outlined"
                  size="small"
                  name="employeeCode"
                  fullWidth
                  required
                  // value={formData.subChapter}
                  // onChange={handleInputChange}
                  // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
                />
              </div>
              <div className="col-md-4 mb-3">
                <TextField
                  id="outlined-textarea"
                  label="Employee Name"
                  placeholder="Placeholder"
                  variant="outlined"
                  size="small"
                  name="employeeName"
                  fullWidth
                  required
                  // value={formData.subChapter}
                  // onChange={handleInputChange}
                  // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                    required
                    // value={formData.exempted}
                    name="gender"
                    // onChange={handleInputChange}
                  >
                    <MenuItem value="0">Male</MenuItem>
                    <MenuItem value="1">Female</MenuItem>
                    <MenuItem value="2">Others</MenuItem>
                  </Select>
                  {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Branch"
                    required
                    // value={formData.exempted}
                    name="branch"
                    // onChange={handleInputChange}
                  >
                    <MenuItem value="0">Chennai</MenuItem>
                    <MenuItem value="1">Bangalore</MenuItem>
                    <MenuItem value="2">Hyderabad</MenuItem>
                  </Select>
                  {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }} />}
                    label="Status"
                  />
                </FormGroup>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Joining Date"
                      slotProps={{
                        textField: { size: 'small', clearable: true }
                      }}
                      //value={boDate}
                      //onChange={(newValue) => setBoDate(newValue)}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Department</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Department"
                    required
                    // value={formData.exempted}
                    name="department"
                    // onChange={handleInputChange}
                  >
                    <MenuItem value="0">Chennai</MenuItem>
                    <MenuItem value="1">Bangalore</MenuItem>
                    <MenuItem value="2">Hyderabad</MenuItem>
                  </Select>
                  {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Designation"
                    required
                    // value={formData.exempted}
                    name="designation"
                    // onChange={handleInputChange}
                  >
                    <MenuItem value="0">Chennai</MenuItem>
                    <MenuItem value="1">Bangalore</MenuItem>
                    <MenuItem value="2">Hyderabad</MenuItem>
                  </Select>
                  {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
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
                  // value={formData.subChapter}
                  // onChange={handleInputChange}
                  // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
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
                  // value={formData.subChapter}
                  // onChange={handleInputChange}
                  // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
                />
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      slotProps={{
                        textField: { size: 'small', clearable: true }
                      }}
                      //value={boDate}
                      //onChange={(newValue) => setBoDate(newValue)}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div className="col-md-4 mb-3">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Leaving Date"
                      slotProps={{
                        textField: { size: 'small', clearable: true }
                      }}
                      //value={boDate}
                      //onChange={(newValue) => setBoDate(newValue)}
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
