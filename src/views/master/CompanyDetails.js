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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export const CompanyDetails = () => {
  const [orgId, setOrgId] = useState(localStorage.getItem('orgId'));
  const [formData, setFormData] = useState({
    active: true,
    address: '',
    adminEmail: '',
    city: '',
    companyCode: '',
    companyName: '',
    country: '',
    email: '',
    orgId: 1,
    passport: '',
    phoneNo: '',
    pinCode: '',
    state: ''
  });

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    active: true,
    address: '',
    adminEmail: '',
    city: '',
    companyCode: '',
    companyName: '',
    country: '',
    email: '',
    passport: '',
    phoneNo: '',
    pinCode: '',
    state: ''
  });
  const [tableData, setTableData] = useState([]);
  const [listView, setListView] = useState(false);

  const handleClear = () => {
    setFormData({
      address: '',
      adminEmail: '',
      city: '',
      companyCode: '',
      companyName: '',
      country: '',
      email: '',
      passport: '',
      phoneNo: '',
      pinCode: '',
      state: ''
    });
    setFieldErrors({
      address: '',
      adminEmail: '',
      city: '',
      companyCode: '',
      companyName: '',
      country: '',
      email: '',
      passport: '',
      phoneNo: '',
      pinCode: '',
      state: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.companyCode) {
      errors.companyCode = 'Company Code is required';
    }
    if (!formData.companyName) {
      errors.companyName = 'Company Name is required';
    }
    if (!formData.country) {
      errors.country = 'Country is required';
    }
    if (!formData.state) {
      errors.state = 'State is required';
    }
    if (!formData.city) {
      errors.city = 'City is required';
    }
    if (!formData.address) {
      errors.address = 'Address is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.adminEmail) {
      errors.adminEmail = 'Admin Email is required';
    }
    if (!formData.phoneNo) {
      errors.phoneNo = 'Phone Number is required';
    }
    if (!formData.pinCode) {
      errors.pinCode = 'Pin Code is required';
    }
    if (!formData.passport) {
      errors.passport = 'Passport is required';
    }

    if (Object.keys(errors).length > 0) {
      // Set error messages for each field
      setFieldErrors(errors);
      return;
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateCompany`, formData)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Company details saved successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          active: true,
          address: '',
          adminEmail: '',
          city: '',
          companyCode: '',
          companyName: '',
          country: '',
          email: '',
          orgId: 1,
          passport: '',
          phoneNo: '',
          pinCode: '',
          state: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving company details');
      });
  };

  const getAllCompany = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getCompanyById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableData(response.data.paramObjectsMap.companyVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllCompany();
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
            <IconButton>
              <EditIcon />
            </IconButton>
          </div>
        )
      },
      {
        accessorKey: 'companyCode',
        header: 'Company Code',
        size: 50,
        muiTableHeadCellProps: {
          align: 'first'
        },
        muiTableBodyCellProps: {
          align: 'first'
        }
      },
      {
        accessorKey: 'companyName',
        header: 'Company Name',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'adminEmail',
        header: 'Admin Email',
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
          <div className="row d-flex ml">
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
            <div className="col-md-4 mb-3">
              <TextField
                id="company-code"
                label="Company Code"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="companyCode"
                value={formData.companyCode}
                onChange={handleInputChange}
                error={fieldErrors.companyCode}
                helperText={fieldErrors.companyCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="company-name"
                label="Company Name"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                error={fieldErrors.companyName}
                helperText={fieldErrors.companyName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={fieldErrors.email}
                helperText={fieldErrors.email}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="phone-no"
                label="Phone No"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                error={fieldErrors.phoneNo}
                helperText={fieldErrors.phoneNo}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                error={fieldErrors.address}
                helperText={fieldErrors.address}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.country}>
                <InputLabel id="country-label">Country</InputLabel>
                <Select labelId="country-label" label="Country" value={formData.country} onChange={handleInputChange} name="country">
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </Select>
                {fieldErrors.country && <FormHelperText>{fieldErrors.country}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.state}>
                <InputLabel id="state-label">State</InputLabel>
                <Select labelId="state-label" label="State" value={formData.state} onChange={handleInputChange} name="state">
                  <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                  <MenuItem value="Karnataka">Karnataka</MenuItem>
                </Select>
                {fieldErrors.state && <FormHelperText>{fieldErrors.state}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.city}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select labelId="state-label" label="State" value={formData.city} onChange={handleInputChange} name="city">
                  <MenuItem value="Salem">Salem</MenuItem>
                  <MenuItem value="Erode">Erode</MenuItem>
                </Select>
                {fieldErrors.city && <FormHelperText>{fieldErrors.city}</FormHelperText>}
              </FormControl>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="pin-code"
                label="Pin Code"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                error={fieldErrors.pinCode}
                helperText={fieldErrors.pinCode}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="admin-email"
                label="Admin Email"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="adminEmail"
                value={formData.adminEmail}
                onChange={handleInputChange}
                error={fieldErrors.adminEmail}
                helperText={fieldErrors.adminEmail}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="passport"
                label="Passport"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="passport"
                value={formData.passport}
                onChange={handleInputChange}
                error={fieldErrors.passport}
                helperText={fieldErrors.passport}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="active"
                      checked={formData.active}
                      onChange={(e) => handleInputChange({ target: { name: 'active', value: e.target.checked } })}
                      name="active"
                    />
                  }
                  label="Active"
                />
              </FormGroup>
            </div>
          </div>
        ) : (
          <div className="mt-4">
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
        )}
      </div>
    </>
  );
};
export default CompanyDetails;
