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
import { FaTrash } from 'react-icons/fa';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const DocumentTypeMapping = () => {
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

  const [tableData, setTableData] = useState([
    {
      id: 1,
      docType: '',
      subType: '',
      subTypeId: '',
      subTypeCode: '',
      docName: '',
      prefix: '',
      postFinance: '',
      lastNo: '',
      resetOnFinYear: ''
    }
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      docType: '',
      subType: '',
      subTypeId: '',
      subTypeCode: '',
      docName: '',
      prefix: '',
      postFinance: '',
      lastNo: '',
      resetOnFinYear: ''
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
        {/* {!listView ? ( */}
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
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Branch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Branch"
                required
                // value={formData.exempted}
                name="Branch"
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
              <InputLabel id="demo-simple-select-label">Financial Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Financial Year"
                required
                // value={formData.exempted}
                name="FinancialYear"
                // onChange={handleInputChange}
              >
                <MenuItem value="0">2023</MenuItem>
                <MenuItem value="1">2024</MenuItem>
              </Select>
              {/* {fieldErrors.exempted && <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>} */}
            </FormControl>
          </div>
        </div>
        {/* ) : ( */}
        {/* <div className="mt-4">
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
        {/* </Box> */}
        {/* )}
          />
        </div> */}
        {/* )} */}
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
                    <th className="px-2 py-2 bg-primary text-white">Doc Type</th>
                    <th className="px-2 py-2 bg-primary text-white">Sub Type</th>
                    <th className="px-2 py-2 bg-primary text-white">Sub Type Id</th>
                    <th className="px-2 py-2 bg-primary text-white">Subtype Code</th>
                    <th className="px-2 py-2 bg-primary text-white">Doc. Name</th>
                    <th className="px-2 py-2 bg-primary text-white">Prefix</th>
                    <th className="px-2 py-2 bg-primary text-white">Post Finance</th>
                    <th className="px-2 py-2 bg-primary text-white">LastNo</th>
                    <th className="px-2 py-2 bg-primary text-white">Reset On Fin.Year</th>
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
                          value={row.docType}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, docType: e.target.value } : r)))
                          }
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
                          value={row.subTypeId}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeId: e.target.value } : r)))
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
                          value={row.docName}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, docName: e.target.value } : r)))
                          }
                          onKeyDown={(e) => handleKeyDown(e, row)}
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.prefix}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, prefix: e.target.value } : r)))
                          }
                          onKeyDown={(e) => handleKeyDown(e, row)}
                        />
                      </td>
                      <td className="border px-2 py-2 text-center">
                        <input
                          type="checkbox"
                          value={row.postFinance}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, postFinance: e.target.checked } : r)))
                          }
                          onKeyDown={(e) => handleKeyDown(e, row)}
                        />
                      </td>
                      <td className="border px-2 py-2">
                        <input
                          type="text"
                          value={row.lastNo}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, lastNo: e.target.value } : r)))
                          }
                          onKeyDown={(e) => handleKeyDown(e, row)}
                        />
                      </td>
                      <td className="border px-2 py-2 text-center">
                        <input
                          type="checkbox"
                          value={row.resetOnFinYear}
                          onChange={(e) =>
                            setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, resetOnFinYear: e.target.checked } : r)))
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
    </>
  );
};
export default DocumentTypeMapping;
