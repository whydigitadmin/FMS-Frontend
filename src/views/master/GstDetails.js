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
import { Tabs, Tab } from '@mui/material';
import { FaTrash } from 'react-icons/fa';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const GstDetails = () => {
  const [formData, setFormData] = useState({
    chapter: '',
    subChapter: '',
    hsnCode: '',
    branchLocation: '',
    newRate: '',
    exempted: ''
  });

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
  //   const [tableData, setTableData] = useState([]);
  const [listView, setListView] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [tableData, setTableData] = useState([
    { id: 1, state: '', gstIn: '', stateCode: '', contactPerson: '', contactPhoneNo: '', contactEmail: '' }
  ]);
  const [tableData1, setTableData1] = useState([
    {
      id: 1,
      state: '',
      businessPlace: '',
      cityName: '',
      address: '',
      address2: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: ''
    }
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      state: '',
      gstIn: '',
      stateCode: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: ''
    };
    setTableData([...tableData, newRow]);
  };

  const handleDeleteRow = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
  };

  const handleKeyDown = (e, row) => {
    if (e.key === 'Tab' && row.id === tableData[tableData.length - 1].id) {
      e.preventDefault();
      handleAddRow();
    }
  };
  const handleAddRow1 = () => {
    const newRow = {
      id: tableData1.length + 1,
      state: '',
      buisnessPlace: '',
      cityName: '',
      address1: '',
      address2: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: ''
    };
    setTableData1([...tableData, newRow]);
  };

  const handleDeleteRow1 = (id) => {
    setTableData1(tableData1.filter((row) => row.id !== id));
  };

  const handleKeyDown1 = (e, row) => {
    if (e.key === 'Tab' && row.id === tableData1[tableData1.length - 1].id) {
      e.preventDefault();
      handleAddRow1();
    }
  };

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

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
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="PAN"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="PAN"
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
                label="PAN Name"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="panName"
                // value={formData.hsnCode}
                // onChange={handleInputChange}
                // helperText={<span style={{ color: 'red' }}>{fieldErrors.hsnCode ? 'This field is required' : ''}</span>}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="outlined-textarea"
                label="Party Name"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                fullWidth
                required
                name="partyName"
                // value={formData.hsnCode}
                // onChange={handleInputChange}
                // helperText={<span style={{ color: 'red' }}>{fieldErrors.hsnCode ? 'This field is required' : ''}</span>}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Buisness Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Buisness Type"
                  required
                  // value={formData.exempted}
                  name="buisnessType"
                  // onChange={handleInputChange}
                >
                  <MenuItem value="0">India</MenuItem>
                  <MenuItem value="1">America</MenuItem>
                </Select>
                {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Account Type"
                  required
                  // value={formData.exempted}
                  name="accountType"
                  // onChange={handleInputChange}
                >
                  <MenuItem value="0">Sea</MenuItem>
                  <MenuItem value="1">Air</MenuItem>
                </Select>
                {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Buisness Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Buisness Category"
                  required
                  // value={formData.exempted}
                  name="buisnessCategory"
                  // onChange={handleInputChange}
                >
                  <MenuItem value="0">Sea</MenuItem>
                  <MenuItem value="1">Air</MenuItem>
                </Select>
                {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }} />}
                  label="Approval"
                />
              </FormGroup>
            </div>
          </div>
        ) : (
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
        <div>
          <Tabs value={tabValue} onChange={handleChangeTab}>
            <Tab label="State Gst" />
            <Tab label="Buisness Address" />
          </Tabs>
          {tabValue === 0 ? (
            <div className="row d-flex ml">
              <div className="mt-2">
                <button className="btn-primary" onClick={handleAddRow}>
                  + Add
                </button>
              </div>
              {/* Table */}
              <div className="row mt-2">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="px-2 py-2 bg-primary text-white">Action</th>
                          <th className="px-2 py-2 bg-primary text-white">S.No</th>
                          <th className="px-2 py-2 bg-primary text-white">State</th>
                          <th className="px-2 py-2 bg-primary text-white">GST IN</th>
                          <th className="px-2 py-2 bg-primary text-white">State Code</th>
                          <th className="px-2 py-2 bg-primary text-white">Contact Person</th>
                          <th className="px-2 py-2 bg-primary text-white">Contact Phone No</th>
                          <th className="px-2 py-2 bg-primary text-white">Contact Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row) => (
                          <tr key={row.id}>
                            {/* Table cells */}
                            <td className="border px-2 py-2">
                              <button onClick={() => handleDeleteRow(row.id)} className="btn-danger">
                                <FaTrash style={{ fontSize: '16px' }} />
                              </button>
                            </td>

                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.id}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, id: e.target.value } : r)))
                                }
                              />
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.state}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, state: e.target.value } : r)))
                                }
                              />
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.gstIn}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, gstIn: e.target.value } : r)))
                                }
                              />
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.stateCode}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, stateCode: e.target.value } : r)))
                                }
                              />
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.contactPerson}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPerson: e.target.value } : r)))
                                }
                              />
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.contactPhoneNo}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPhoneNo: e.target.value } : r)))
                                }
                              />
                            </td>
                            <td className="border px-2 py-2">
                              <input
                                type="text"
                                value={row.contactEmail}
                                onChange={(e) =>
                                  setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactEmail: e.target.value } : r)))
                                }
                                onKeyDown={(e) => handleKeyDown(e, row)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <div className="row d-flex ml">
                <div className="mt-2">
                  <button className="btn-primary" onClick={handleAddRow1}>
                    + Add
                  </button>
                </div>
                {/* Table */}
                <div className="row mt-2">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th className="px-2 py-2 bg-primary text-white">Action</th>
                            <th className="px-2 py-2 bg-primary text-white">S.No</th>
                            <th className="px-2 py-2 bg-primary text-white">State</th>
                            <th className="px-2 py-2 bg-primary text-white">Business Place</th>
                            <th className="px-2 py-2 bg-primary text-white">City Name</th>
                            <th className="px-2 py-2 bg-primary text-white">Address1</th>
                            <th className="px-2 py-2 bg-primary text-white">Address2</th>
                            <th className="px-2 py-2 bg-primary text-white">Contact Person</th>
                            <th className="px-2 py-2 bg-primary text-white">Contact Phone No</th>
                            <th className="px-2 py-2 bg-primary text-white">Contact Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData1.map((row) => (
                            <tr key={row.id}>
                              {/* Table cells */}
                              <td className="border px-2 py-2">
                                <button onClick={() => handleDeleteRow1(row.id)} className="btn-danger">
                                  <FaTrash style={{ fontSize: '16px' }} />
                                </button>
                              </td>

                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.id}
                                  onChange={(e) =>
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, id: e.target.value } : r)))
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.state}
                                  onChange={(e) =>
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, state: e.target.value } : r)))
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.buisnessPlace}
                                  onChange={(e) =>
                                    setTableData1((prev) =>
                                      prev.map((r) => (r.id === row.id ? { ...r, buisnessPlace: e.target.value } : r))
                                    )
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.cityName}
                                  onChange={(e) =>
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, cityName: e.target.value } : r)))
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.address1}
                                  onChange={(e) =>
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, address1: e.target.value } : r)))
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.address2}
                                  onChange={(e) =>
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, address2: e.target.value } : r)))
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.contactPerson}
                                  onChange={(e) =>
                                    setTableData1((prev) =>
                                      prev.map((r) => (r.id === row.id ? { ...r, contactPerson: e.target.value } : r))
                                    )
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.contactPhoneNo}
                                  onChange={(e) =>
                                    setTableData1((prev) =>
                                      prev.map((r) => (r.id === row.id ? { ...r, contactPhoneNo: e.target.value } : r))
                                    )
                                  }
                                />
                              </td>
                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.contactEmail}
                                  onChange={(e) =>
                                    setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactEmail: e.target.value } : r)))
                                  }
                                  onKeyDown={(e) => handleKeyDown1(e, row)}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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
export default GstDetails;
