import ClearIcon from '@mui/icons-material/Clear';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, ButtonBase, Tooltip } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useRef, useState, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';
import { MaterialReactTable } from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { Tabs, Tab } from '@mui/material';

export const UserCreation = () => {
  const [formData, setFormData] = useState({
    listCode: '',
    listDescription: '',
    active: true
  });

  const theme = useTheme();
  const anchorRef = useRef(null);
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const [fieldErrors, setFieldErrors] = useState({
    listCode: false,
    listDescription: false
  });

  const [tableData, setTableData] = useState([
    {
      id: 1,
      valueCode: '',
      valueDescription: '',
      active: 'Yes'
    }
  ]);

  const [tableDataList, setTableDataList] = useState([]);

  const [tableErrors, setTableErrors] = useState([
    {
      valueCode: '',
      valueDescription: ''
    }
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      valueCode: '',
      valueDescription: '',
      active: 'Yes'
    };
    setTableData([...tableData, newRow]);
    setTableErrors([...tableErrors, { valueCode: '', valueDescription: '' }]);
  };

  const handleDeleteRow = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
    setTableErrors(tableErrors.filter((_, index) => index !== id - 1));
  };

  const handleKeyDown = (e, row) => {
    if (e.key === 'Tab' && row.id === tableData[tableData.length - 1].id) {
      e.preventDefault();
      handleAddRow();
    }
  };

  const [listView, setListView] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRowData, setCurrentRowData] = useState(null);

  const handleClear = () => {
    setFormData({
      listCode: '',
      listDescription: ''
    });
    setFieldErrors({
      listCode: '',
      listDescription: ''
    });
    setTableErrors([]);
    setTableData([
      {
        id: 1,
        valueCode: '',
        valueDescription: '',
        active: 'Yes'
      }
    ]);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.listCode) {
      errors.listCode = 'List Code is required';
    }
    if (!formData.listDescription) {
      errors.listDescription = 'List Description is required';
    }

    let tableDataValid = true;
    const newTableErrors = tableData.map((row) => {
      const rowErrors = {};
      if (!row.valueCode) {
        rowErrors.valueCode = 'Value Code is required';
        tableDataValid = false;
      }
      if (!row.valueDescription) {
        rowErrors.valueDescription = 'Value Description is required';
        tableDataValid = false;
      }
      return rowErrors;
    });

    setFieldErrors(errors);
    setTableErrors(newTableErrors);

    if (Object.keys(errors).length > 0 || !tableDataValid) {
      return;
    }

    const payload = {
      ...formData,
      orgId: 0, // Assuming this is a fixed value or you need to set it dynamically
      createdBy: 'string', // Assuming this is a placeholder or you need to set it dynamically
      updatedBy: 'string', // Assuming this is a placeholder or you need to set it dynamically
      listOfValues1DTO: tableData.map((row) => ({
        // id: 0, // Assuming new rows have id 0
        // sno: tableData.indexOf(row) + 1, // Using index + 1 for sno
        valueCode: row.valueCode,
        valueDescription: row.valueDescription,
        active: row.active === 'Yes'
      }))
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateListOfValues`, payload)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('List of Values created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          listCode: '',
          listDescription: '',
          active: true,
          orgId: 1
        });
        setTableData([
          {
            id: 1,
            valueCode: '',
            valueDescription: '',
            active: 'Yes'
          }
        ]);
        setTableErrors([]);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the list of values');
      });
  };

  const handleEditSave = () => {
    const errors = {};
    if (!formData.listCode) {
      errors.listCode = 'List Code is required';
    }
    if (!formData.listDescription) {
      errors.listDescription = 'List Description is required';
    }

    let tableDataValid = true;
    const newTableErrors = tableData.map((row) => {
      const rowErrors = {};
      if (!row.valueCode) {
        rowErrors.valueCode = 'Value Code is required';
        tableDataValid = false;
      }
      if (!row.valueDescription) {
        rowErrors.valueDescription = 'Value Description is required';
        tableDataValid = false;
      }
      return rowErrors;
    });

    setFieldErrors(errors);
    setTableErrors(newTableErrors);

    if (Object.keys(errors).length > 0 || !tableDataValid) {
      return;
    }

    const payload = {
      ...formData,
      active: formData.active ? true : false,
      listOfValues1DTO: tableData.map((row) => ({
        // id: 0, // Assuming new rows have id 0
        // sno: tableData.indexOf(row) + 1, // Using index + 1 for sno
        valueCode: row.valueCode,
        valueDescription: row.valueDescription,
        active: row.active === 'Yes'
      }))
    };

    const updatedPayload = {
      ...payload,
      id: payload.id
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateListOfValues`, updatedPayload)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('List of Values Updated successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          listCode: '',
          listDescription: '',
          active: true,
          orgId: 1
        });
        setTableData([
          {
            id: Date.now(),
            valueCode: '',
            valueDescription: '',
            active: 'Yes'
          }
        ]);
        setEditMode(false);
        setTableErrors([]);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while updating the list of values');
      });
  };

  const getAllListOfValues1 = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getListOfValuesById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableDataList(response.data.paramObjectsMap.listOfValuesVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getAllListOfValues = async (selectedDocumentId) => {
    try {
      // Update the URL to use query parameter instead of path parameter
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getListOfValuesById`, {
        params: {
          id: selectedDocumentId
        }
      });
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableDataList(response.data.paramObjectsMap.listOfValuesVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllListOfValues1();
    setListView(true);
  };

  const handleBackToInput = () => {
    setListView(false);
  };

  const handleEditBack = () => {
    handleClear();
    // setListView(true);
    setEditMode(false);
  };

  const handleEdit = (row) => {
    console.log('first', row.original);
    getAllListOfValues(row.original.id);
    setCurrentRowData(row.original);
    setFormData({
      listCode: row.original.listCode,
      listDescription: row.original.listDescription,
      orgId: row.original.orgId,
      id: row.original.id,
      active: row.original.active === 'Active'
    });

    setTableData(
      row.original.listOfValues1VO?.map((list) => ({
        id: Date.now(),
        valueCode: list.valueCode,
        valueDescription: list.valueDescription,
        active: list.active ? 'Yes' : 'No'
      })) || []
    );

    setEditMode(true);
    setListView(false);
  };

  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorKey: 'actions',
  //       header: 'Actions',
  //       size: 50,
  //       muiTableHeadCellProps: {
  //         align: 'center'
  //       },
  //       muiTableBodyCellProps: {
  //         align: 'center'
  //       },
  //       enableSorting: false,
  //       enableColumnOrdering: false,
  //       enableEditing: false,
  //       Cell: ({ row }) => (
  //         <div>
  //           {/* <IconButton onClick={() => handleViewRow(row)}>
  //             <VisibilityIcon />
  //           </IconButton> */}
  //           <IconButton onClick={() => handleEdit(row)}>
  //             <EditIcon />
  //           </IconButton>
  //         </div>
  //       )
  //     },
  //     {
  //       accessorKey: 'listCode',
  //       header: 'List Code',
  //       size: 50,
  //       muiTableHeadCellProps: {
  //         align: 'first'
  //       },
  //       muiTableBodyCellProps: {
  //         align: 'first'
  //       }
  //     },
  //     {
  //       accessorKey: 'listDescription',
  //       header: 'List Description',
  //       size: 50,
  //       muiTableHeadCellProps: {
  //         align: 'center'
  //       },
  //       muiTableBodyCellProps: {
  //         align: 'center'
  //       }
  //     },
  //     {
  //       accessorKey: 'active',
  //       header: 'Active',
  //       size: 50,
  //       muiTableHeadCellProps: {
  //         align: 'center'
  //       },
  //       muiTableBodyCellProps: {
  //         align: 'center'
  //       }
  //       // Cell: ({ cell: { value } }) => <span>{value ? 'Active' : 'Active'}</span>
  //     }
  //   ],
  //   []
  // );

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="card w-full p-6 bg-base-100 shadow-xl" style={{ padding: '20px' }}>
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

            {editMode ? (
              <Tooltip title="Clear" placement="top">
                {' '}
                <ButtonBase sx={{ borderRadius: '12px', marginRight: '10px' }} onClick={handleEditBack}>
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
            ) : (
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
            )}

            <Tooltip title="List View" placement="top">
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

            {editMode ? (
              <Tooltip title="Update" placement="top">
                {' '}
                <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleEditSave}>
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
                    <BrowserUpdatedIcon size="1.3rem" stroke={1.5} />
                  </Avatar>
                </ButtonBase>
              </Tooltip>
            ) : (
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
            )}
          </div>

          <div className="col-md-4 mb-3">
            <TextField
              id="userId"
              label="User Id"
              variant="outlined"
              size="small"
              name="userId"
              fullWidth
              required
              // value={formData.listCode}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listCode}
              // helperText={fieldErrors.listCode}
            />
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="employeeCode"
              label="Employee Code"
              variant="outlined"
              size="small"
              name="employeeCode"
              fullWidth
              required
              // value={formData.listDescription}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listDescription}
              // helperText={fieldErrors.listDescription}
            />
          </div>
          <div className="col-md-4 mb-3">
            <FormControl
              fullWidth
              size="small"
              // error={!!fieldErrors.branch}
            >
              <InputLabel id="userName">User Name</InputLabel>
              <Select
                labelId="userName"
                label="User Name"
                name="userName"
                //  value={formData.branch}
                //  onChange={handleInputChange}
              >
                <MenuItem value="name1">Name 1</MenuItem>
                <MenuItem value="name2">Name 2</MenuItem>
              </Select>
              {/* {fieldErrors.branch && <FormHelperText>{fieldErrors.branch}</FormHelperText>} */}
            </FormControl>
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="employeeName"
              label="Employee Name"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="employeeName"
              fullWidth
              required
              // value={formData.listDescription}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listDescription}
              // helperText={fieldErrors.listDescription}
            />
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              size="small"
              name="password"
              fullWidth
              required
              // value={formData.listDescription}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listDescription}
              // helperText={fieldErrors.listDescription}
            />
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              size="small"
              name="email"
              fullWidth
              required
              // value={formData.listDescription}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listDescription}
              // helperText={fieldErrors.listDescription}
            />
          </div>
          <div className="col-md-4 mb-3">
            <FormControl
              fullWidth
              size="small"
              // error={!!fieldErrors.branch}
            >
              <InputLabel id="userName">User Type</InputLabel>
              <Select
                labelId="userType"
                label="User Type"
                name="userType"
                //  value={formData.branch}
                //  onChange={handleInputChange}
              >
                <MenuItem value="ADMIN">ADMIN</MenuItem>
                <MenuItem value="OPERATIONS">OPERATIONS</MenuItem>
                <MenuItem value="ACCOUNTS">ACCOUNTS</MenuItem>
              </Select>
              {/* {fieldErrors.branch && <FormHelperText>{fieldErrors.branch}</FormHelperText>} */}
            </FormControl>
          </div>
          <div className="col-md-4 mb-3">
            <FormControl
              fullWidth
              size="small"
              // error={!!fieldErrors.branch}
            >
              <InputLabel id="reportingTo">Reporting To</InputLabel>
              <Select
                labelId="reportingTo"
                label="Reporting To"
                name="reportingTo"
                //  value={formData.branch}
                //  onChange={handleInputChange}
              >
                <MenuItem value="ADMIN">ADMIN</MenuItem>
                <MenuItem value="OPERATIONS">OPERATIONS</MenuItem>
                <MenuItem value="ACCOUNTS">ACCOUNTS</MenuItem>
              </Select>
              {/* {fieldErrors.branch && <FormHelperText>{fieldErrors.branch}</FormHelperText>} */}
            </FormControl>
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="reportingTo"
              variant="outlined"
              size="small"
              name="reportingTo"
              fullWidth
              required
              // value={formData.listDescription}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listDescription}
              // helperText={fieldErrors.listDescription}
            />
          </div>
          <div className="col-md-4 mb-3">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                    id="allIndiaAccess"
                    name="allIndiaAccess"
                    checked={formData.allIndiaAccess}
                    onChange={(e) => setFormData({ ...formData, allIndiaAccess: e.target.checked })}
                  />
                }
                label="All India Access"
              />
            </FormGroup>
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="location"
              label="Location"
              variant="outlined"
              size="small"
              name="location"
              fullWidth
              required
              // value={formData.listDescription}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listDescription}
              // helperText={fieldErrors.listDescription}
            />
          </div>
          <div className="col-md-4 mb-3">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                    id="active"
                    name="active"
                    // checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  />
                }
                label="Active"
              />
            </FormGroup>
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="deactivatedOn"
              label="Deactivated On"
              variant="outlined"
              size="small"
              name="deactivatedOn"
              fullWidth
              required
              // value={formData.listDescription}
              // onChange={handleInputChange}
              // error={!!fieldErrors.listDescription}
              // helperText={fieldErrors.listDescription}
            />
          </div>
        </div>

        <div>
          <Tabs value={tabValue} onChange={handleChangeTab}>
            <Tab label="Roles" />
            <Tab label="Products Accessible" />
            <Tab label="Branches Accessible" />
          </Tabs>
          {tabValue === 0 && (
            <div className="row d-flex ml">
              <div className="mt-2">
                <Tooltip title="Add" placement="top">
                  <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRow}>
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
                            S.No
                          </th>
                          <th className="px-2 py-2 text-white">Roles</th>
                          <th className="px-2 py-2 text-white">Start Date</th>
                          <th className="px-2 py-2 text-white">End Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, index) => (
                          <tr key={row.id}>
                            <td className="border px-2 py-2">
                              <Tooltip title="Delete" placement="top">
                                <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={() => handleDeleteRow(row.id)}>
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
                                value={row.valueCode}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, valueCode: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = { ...newErrors[index], valueCode: !value ? 'Value Code is required' : '' };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.valueCode ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.valueCode && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].valueCode}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.valueDescription}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, valueDescription: value } : r)));
                                  setTableErrors((prev) => {
                                    const newErrors = [...prev];
                                    newErrors[index] = {
                                      ...newErrors[index],
                                      valueDescription: !value ? 'Value Description is required' : ''
                                    };
                                    return newErrors;
                                  });
                                }}
                                className={tableErrors[index]?.valueDescription ? 'error' : ''}
                                style={{ marginBottom: '6px' }}
                              />
                              {tableErrors[index]?.valueDescription && (
                                <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].valueDescription}</div>
                              )}
                            </td>
                            <td className="border px-2 py-2">
                              <select
                                value={row.active}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, active: e.target.value } : r)))
                                }
                                onKeyDown={(e) => handleKeyDown(e, row)}
                              >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
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
    </>
  );
};

export default UserCreation;
