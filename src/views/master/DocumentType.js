import ClearIcon from '@mui/icons-material/Clear';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, ButtonBase, FormHelperText, Tooltip } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useRef, useState, useMemo } from 'react';
import 'react-tabs/style/react-tabs.css';
// import { MaterialReactTable } from 'material-react-table';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FaStarOfLife, FaTrash } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DocumentType = () => {
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

  const [tableData, setTableData] = useState([{ id: 1, subType: '', subTypeCode: '', subTypeName: '', month: '' }]);

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

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      subType: '',
      subTypeCode: '',
      subTypeName: '',
      month: ''
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
        accessorKey: 'cityCode',
        header: 'Department Name',
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
              label="Document Name"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="documentName"
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
              label="Document Type"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="documentType"
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
              label="Document Description"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="documentDescription"
              fullWidth
              required
              // value={formData.subChapter}
              // onChange={handleInputChange}
              // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
            />
          </div>
          <div className="col-md-4 mb-3">
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Module</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Module"
                required
                // value={formData.exempted}
                name="module"
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
              label="Sub Module"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="subModule"
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
              label="Primary Table"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="primaryTable"
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
              label="Auto. Gen. Field"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="autoGenField"
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
              label="Prefix Field"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="prefixField"
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
              label="Document Code"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="documentCode"
              fullWidth
              required
              // value={formData.subChapter}
              // onChange={handleInputChange}
              // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
            />
          </div>
        </div>
        <div className="row d-flex">
          <h5 className="mb-3">
            <u>Prefix Orders</u>
          </h5>
          <div className="col-md-4 mb-3">
            <TextField
              id="outlined-textarea"
              label="CODE"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="code"
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
              label="FINYR"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="finYr"
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
              label="BRANCH"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="branch"
              fullWidth
              required
              // value={formData.subChapter}
              // onChange={handleInputChange}
              // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
            />
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 mb-1">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }} />}
                label="Finance Transaction"
              />
            </FormGroup>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 mb-1">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }} />}
                label="Post Finance"
              />
            </FormGroup>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 mb-1">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }} />}
                label="Is No. Generation Based on Subtype?"
              />
            </FormGroup>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 mb-3">
            <TextField
              id="outlined-textarea"
              label="Prefix"
              placeholder="Placeholder"
              variant="outlined"
              size="small"
              name="prefix"
              fullWidth
              required
              // value={formData.subChapter}
              // onChange={handleInputChange}
              // helperText={<span style={{ color: 'red' }}>{fieldErrors.subChapter ? 'This field is required' : ''}</span>}
            />
          </div>
        </div>
        {/* <div className="mt-2">
          <button className="btn btn-primary" onClick={handleAddRow}>
            + Add
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-lg-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th class="px-2 py-2 bg-primary text-white">Action</th>
                    <th class="px-2 py-2 bg-primary text-white">S.No</th>
                    <th class="px-2 py-2 bg-primary text-white">Subtype</th>
                    <th class="px-2 py-2 bg-primary text-white">Subtype Code</th>
                    <th class="px-2 py-2 bg-primary text-white">Subtype Name</th>
                    <th class="px-2 py-2 bg-primary text-white">Month</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id}>
\                      <td className="border px-2 py-2">
                        <button onClick={() => handleDeleteRow(row.id)} className="btn-danger">
                          <FaTrash style={{ fontSize: '16px' }} />
                        </button>
                      </td>

                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.id}
                          onChange={(e) => setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, id: e.target.value } : r)))}
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.subType}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subType: e.target.value } : r)))
                          }
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.subTypeCode}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeCode: e.target.value } : r)))
                          }
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.subTypeName}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeName: e.target.value } : r)))
                          }
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.month}
                          onChange={(e) => setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, month: e.target.value } : r)))}
                          onKeyDown={(e) => handleKeyDown(e, row)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
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
                    <th className="px-2 py-2 bg-primary text-white">Sub Type</th>
                    <th className="px-2 py-2 bg-primary text-white">Subtype Code</th>
                    <th className="px-2 py-2 bg-primary text-white">Subtype Name</th>
                    <th className="px-2 py-2 bg-primary text-white">Month</th>
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
                          onChange={(e) => setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, id: e.target.value } : r)))}
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.subType}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subType: e.target.value } : r)))
                          }
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.subTypeCode}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeCode: e.target.value } : r)))
                          }
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.subTypeName}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeName: e.target.value } : r)))
                          }
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.month}
                          onChange={(e) => setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, month: e.target.value } : r)))}
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

        {/* <div className="mt-4">
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
              > */}
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
        {/* </Box>
            )}
          />
        </div> */}
      </div>
    </>
  );
};
export default DocumentType;
