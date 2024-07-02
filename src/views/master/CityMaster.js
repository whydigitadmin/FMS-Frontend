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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export const CityMaster = () => {
  const [orgId, setOrgId] = useState(localStorage.getItem('orgId'));

  const [formData, setFormData] = useState({
    cityCode: '',
    cityName: '',
    country: '',
    state: '',
    orgId: 1
  });

  const [fieldErrors, setFieldErrors] = useState({
    cityCode: '',
    cityName: '',
    country: '',
    state: ''
  });

  const [listView, setListView] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRowData, setCurrentRowData] = useState(null);
  const theme = useTheme();
  const anchorRef = useRef(null);

  const [tableData, setTableData] = useState([]);
  const [id, setId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: '' });
  };

  const handleClear = () => {
    setFormData({
      cityCode: '',
      cityName: '',
      country: '',
      state: ''
    });
    setFieldErrors({
      cityCode: '',
      cityName: '',
      country: '',
      state: ''
    });
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.cityCode) {
      errors.cityCode = 'City Code is required';
    }
    if (!formData.cityName) {
      errors.cityName = 'City Name is required';
    }
    if (!formData.country) {
      errors.country = 'Country is required';
    }
    if (!formData.state) {
      errors.state = 'State is required';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateCity`, formData)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('City created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          cityCode: '',
          cityName: '',
          country: '',
          state: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the city');
      });
  };

  const handleEditSave = () => {
    const errors = {};
    if (!formData.cityCode) {
      errors.cityCode = 'City Code is required';
    }
    if (!formData.cityName) {
      errors.cityName = 'City Name is required';
    }
    if (!formData.country) {
      errors.country = 'Country is required';
    }
    if (!formData.state) {
      errors.state = 'State is required';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    // Assume formData has an id field for the city ID
    const updatedFormData = {
      ...formData,
      id: currentRowData?.id // Ensure the id from the current row data is included
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateCity`, updatedFormData)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('City updated successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          cityCode: '',
          cityName: '',
          country: '',
          state: ''
        });
        getAllCity();
        setEditMode(false); // Close the dialog after saving
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while updating the city');
      });
  };

  const getAllCity = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getCityById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableData(response.data.paramObjectsMap.cityVO);
        setId(response.data.paramObjectsMap.cityVO.id);
      } else {
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllCity();
    setListView(true);
  };

  const handleBackToInput = () => {
    setListView(false);
  };

  const handleEdit = (row) => {
    setCurrentRowData(row.original);
    setFormData(row.original);
    setEditMode(true);
  };

  const handleClose = () => {
    setEditMode(false);
    setFormData({
      cityCode: '',
      cityName: '',
      country: '',
      state: ''
    });
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
            <IconButton onClick={() => handleEdit(row)}>
              <EditIcon />
            </IconButton>
          </div>
        )
      },
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
        Cell: ({ cell: { value } }) => <span>{value ? 'Active' : 'Inactive'}</span>
      }
    ],
    []
  );

  return (
    <>
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
            <div>
              <ToastContainer />
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
              <TextField
                label="City Code"
                variant="outlined"
                size="small"
                fullWidth
                name="cityCode"
                value={formData.cityCode}
                onChange={handleInputChange}
                error={!!fieldErrors.cityCode} // Add error prop
                helperText={fieldErrors.cityCode} // Add helperText prop
              />
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                label="City Name"
                variant="outlined"
                size="small"
                fullWidth
                name="cityName"
                value={formData.cityName}
                onChange={handleInputChange}
                error={!!fieldErrors.cityName}
                helperText={fieldErrors.cityName}
              />
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <div className="mb-3">
              <Tooltip title="Back" placement="top">
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
                  <Tooltip arrow placement="right" title="Edit">
                    <IconButton onClick={() => handleEdit(row)} style={{ color: 'blue' }}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            />
          </div>
        )}
      </div>

      <Dialog open={editMode} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ fontSize: '20px' }}>Edit City</DialogTitle>
        <DialogContent>
          <div className="col-md-8 mb-3 mt-2">
            <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.country}>
              <InputLabel id="country-label">Country</InputLabel>
              <Select labelId="country-label" label="Country" value={formData.country} onChange={handleInputChange} name="country">
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
              </Select>
              {fieldErrors.country && <FormHelperText>{fieldErrors.country}</FormHelperText>}
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.state}>
              <InputLabel id="state-label">State</InputLabel>
              <Select labelId="state-label" label="State" value={formData.state} onChange={handleInputChange} name="state">
                <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
              </Select>
              {fieldErrors.state && <FormHelperText>{fieldErrors.state}</FormHelperText>}
            </FormControl>
          </div>
          <div className="col-md-8 mb-3">
            <TextField
              label="City Code"
              variant="outlined"
              size="small"
              fullWidth
              name="cityCode"
              value={formData.cityCode}
              onChange={handleInputChange}
              error={!!fieldErrors.cityCode}
              helperText={fieldErrors.cityCode}
            />
          </div>

          <div className="col-md-8 mb-3">
            <TextField
              label="City Name"
              variant="outlined"
              size="small"
              fullWidth
              name="cityName"
              value={formData.cityName}
              onChange={handleInputChange}
              error={!!fieldErrors.cityName}
              helperText={fieldErrors.cityName}
            />
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
      </Dialog>
    </>
  );
};

export default CityMaster;
