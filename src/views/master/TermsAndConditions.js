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
import { FaTrash } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TermsAndConditions = () => {
  const [orgId, setOrgId] = useState(localStorage.getItem('orgId'));
  const [formData, setFormData] = useState({
    active: true,
    branch: '',
    documentType: '',
    partyType: '',
    terms: ''
  });

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    branch: '',
    documentType: '',
    partyType: '',
    terms: ''
  });
  const [tableData, setTableData] = useState([]);
  const [listView, setListView] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleClear = () => {
    setFormData({
      branch: '',
      documentType: '',
      partyType: '',
      terms: ''
    });
    setFieldErrors({
      branch: '',
      documentType: '',
      partyType: '',
      terms: ''
    });
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.branch) {
      errors.branch = 'Branch is required';
    }
    if (!formData.documentType) {
      errors.documentType = 'Document Type is required';
    }
    if (!formData.partyType) {
      errors.partyType = 'Party Type is required';
    }
    if (!formData.terms) {
      errors.terms = 'Terms is required';
    }

    if (Object.keys(errors).length > 0) {
      // Set error messages for each field
      setFieldErrors(errors);
      return;
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateTermsAndCondition`, formData)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Terms and Condition created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          active: true,
          branch: '',
          documentType: '',
          partyType: '',
          terms: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the term and condition');
      });
  };

  const getAllTermsAndConditions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getTermsAndConditionById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableData(response.data.paramObjectsMap.termsAndConditionVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllTermsAndConditions();
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
        accessorKey: 'documentType',
        header: 'Document Type',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'partyType',
        header: 'Party Type',
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
              <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.branch}>
                <InputLabel id="branch">Branch</InputLabel>
                <Select labelId="branch" label="branch" value={formData.branch} onChange={handleInputChange} name="branch">
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </Select>
                {fieldErrors.branch && <FormHelperText>{fieldErrors.branch}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Document Type"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="documentType"
                fullWidth
                required
                value={formData.documentType}
                onChange={handleInputChange}
                error={fieldErrors.documentType}
                helperText={fieldErrors.documentType}
              />
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Party Type"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="partyType"
                value={formData.partyType}
                onChange={handleInputChange}
                error={fieldErrors.partyType}
                helperText={fieldErrors.partyType}
              />
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Terms"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="terms"
                value={formData.terms}
                onChange={handleInputChange}
                error={fieldErrors.terms}
                helperText={fieldErrors.terms}
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
export default TermsAndConditions;
