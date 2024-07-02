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

export const Segments = () => {
  const [formData, setFormData] = useState({
    active: true,
    segmentName: '',
    segmentDescription: '',
    orgId: 1
  });

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    segmentName: '',
    segmentDescription: ''
  });
  const [tableData, setTableData] = useState([]);
  const [listView, setListView] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRowData, setCurrentRowData] = useState(null);

  const [id, setId] = useState('');

  const handleClear = () => {
    setFormData({
      segmentName: '',
      segmentDescription: ''
    });
    setFieldErrors({
      segmentName: '',
      segmentDescription: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.segmentName) {
      errors.segmentName = 'Segment Name is required';
    }
    if (!formData.segmentDescription) {
      errors.segmentDescription = 'Segment Description is required';
    }

    if (Object.keys(errors).length > 0) {
      // Set error messages for each field
      setFieldErrors(errors);
      return;
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateSegments`, formData)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Segments created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          active: true,
          segmentName: '',
          segmentDescription: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the segments');
      });
  };

  const handleEditSave = () => {
    const errors = {};
    if (!formData.segmentName) {
      errors.segmentName = 'Segment Name is required';
    }
    if (!formData.segmentDescription) {
      errors.segmentDescription = 'Segment Description is required';
    }

    if (Object.keys(errors).length > 0) {
      // Set error messages for each field
      setFieldErrors(errors);
      return;
    }

    const updatedFormData = {
      ...formData,
      id: currentRowData?.id // Ensure the id from the current row data is included
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateSegments`, updatedFormData)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Segments Updated successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          active: true,
          segmentName: '',
          segmentDescription: ''
        });
        getAllSegments();
        setEditMode(false); // Close the dialog after saving
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while updating the segments');
      });
  };

  const getAllSegments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getSegmentsById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableData(response.data.paramObjectsMap.segmentsVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllSegments();
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
      segmentName: '',
      segmentDescription: ''
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
        accessorKey: 'segmentName',
        header: 'Segment Name',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'segmentDescription',
        header: 'Segment Description',
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
                label="Segment Name"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="segmentName"
                fullWidth
                required
                value={formData.segmentName}
                onChange={handleInputChange}
                error={!!fieldErrors.segmentName} // Add error prop
                helperText={fieldErrors.segmentName} // Add helperText prop
              />
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Segment Description"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="segmentDescription"
                value={formData.segmentDescription}
                onChange={handleInputChange}
                error={!!fieldErrors.segmentDescription} // Add error prop
                helperText={fieldErrors.segmentDescription} // Add helperText prop
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
      <Dialog open={editMode} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ fontSize: '20px' }}>Edit Segments</DialogTitle>
        <DialogContent>
          <div className="col-md-8 mt-2 mb-3">
            <TextField
              id="outlined-textarea"
              label="Segment Name"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="segmentName"
              fullWidth
              required
              value={formData.segmentName}
              onChange={handleInputChange}
              error={!!fieldErrors.segmentName} // Add error prop
              helperText={fieldErrors.segmentName} // Add helperText prop
            />
          </div>

          <div className="col-md-8 mb-3">
            <TextField
              id="outlined-textarea"
              label="Segment Description"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="segmentDescription"
              value={formData.segmentDescription}
              onChange={handleInputChange}
              error={!!fieldErrors.segmentDescription} // Add error prop
              helperText={fieldErrors.segmentDescription} // Add helperText prop
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
export default Segments;
