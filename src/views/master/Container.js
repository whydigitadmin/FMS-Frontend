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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export const Container = () => {
  const [formData, setFormData] = useState({
    active: true,
    containerType: '',
    category: '',
    length: '',
    width: '',
    height: '',
    weight: '',
    volume: '',
    orgId: 1
  });

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    active: true,
    containerType: '',
    category: '',
    length: '',
    width: '',
    height: '',
    weight: '',
    volume: ''
  });
  const [tableData, setTableData] = useState([]);
  const [listView, setListView] = useState(false);

  const handleClear = () => {
    setFormData({
      containerType: '',
      category: '',
      length: '',
      width: '',
      height: '',
      weight: '',
      volume: ''
    });
    setFieldErrors({
      containerType: '',
      category: '',
      length: '',
      width: '',
      height: '',
      weight: '',
      volume: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.containerType) {
      errors.containerType = 'Container Type is required';
    }
    if (!formData.category) {
      errors.category = 'Category is required';
    }
    if (!formData.length) {
      errors.length = 'Length is required';
    }
    if (!formData.width) {
      errors.width = 'Width is required';
    }
    if (!formData.height) {
      errors.height = 'Height is required';
    }
    if (!formData.weight) {
      errors.weight = 'Weight is required';
    }
    if (!formData.volume) {
      errors.volume = 'Volume is required';
    }

    if (Object.keys(errors).length > 0) {
      // Set error messages for each field
      setFieldErrors(errors);
      return;
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateContainer`, formData)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Container created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          active: true,
          containerType: '',
          category: '',
          length: '',
          width: '',
          height: '',
          weight: '',
          volume: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the container');
      });
  };

  const getAllContainer = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getContainerById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableData(response.data.paramObjectsMap.containerVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllContainer();
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
        accessorKey: 'containerType',
        header: 'Container Type',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'category',
        header: 'Category',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'height',
        header: 'Height',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'volume',
        header: 'Volume',
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
                id="outlined-textarea"
                label="Container Type"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="containerType"
                fullWidth
                required
                value={formData.containerType}
                onChange={handleInputChange}
                error={!!fieldErrors.containerType} // Add error prop
                helperText={fieldErrors.containerType} // Add helperText prop
              />
            </div>

            <div className="col-md-4 mb-3">
              <FormControl fullWidth size="small" error={!!fieldErrors.category}>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category"
                  id="category"
                  label="Category"
                  required
                  value={formData.category}
                  name="category"
                  onChange={handleInputChange}
                >
                  <MenuItem value="0">India</MenuItem>
                  <MenuItem value="1">America</MenuItem>
                </Select>
                {fieldErrors.category && <FormHelperText>{fieldErrors.category}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Length"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="length"
                fullWidth
                required
                value={formData.length}
                onChange={handleInputChange}
                error={fieldErrors.length}
                helperText={fieldErrors.length}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Width"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="width"
                fullWidth
                required
                value={formData.width}
                onChange={handleInputChange}
                error={fieldErrors.width}
                helperText={fieldErrors.width}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Height"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="height"
                fullWidth
                required
                value={formData.height}
                onChange={handleInputChange}
                error={fieldErrors.height}
                helperText={fieldErrors.height}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Weight"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="weight"
                fullWidth
                required
                value={formData.weight}
                onChange={handleInputChange}
                error={fieldErrors.weight}
                helperText={fieldErrors.weight}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Volume"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="volume"
                fullWidth
                required
                value={formData.volume}
                onChange={handleInputChange}
                error={fieldErrors.volume}
                helperText={fieldErrors.volume}
              />
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
export default Container;
