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
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MaterialReactTable } from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export const DocumentTypeMapping = () => {
  const [formData, setFormData] = useState({
    branch: '',
    financialYear: '',
    active: true
  });

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    branch: '',
    financialYear: ''
  });

  const [tableErrors, setTableErrors] = useState([
    {
      docType: '',
      subType: '',
      subTypeId: '',
      subTypeCode: '',
      docName: '',
      prefix: '',
      postFinance: true,
      lastNo: '',
      resetOnFinYear: true
    }
  ]);

  const [listView, setListView] = useState(false);

  const [tableDataList, setTableDataList] = useState([]);

  const [tableData, setTableData] = useState([
    {
      id: 1,
      docType: '',
      subType: '',
      subTypeId: '',
      subTypeCode: '',
      docName: '',
      prefix: '',
      postFinance: true,
      lastNo: '',
      resetOnFinYear: true
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.branch) {
      errors.branch = 'Branch is required';
    }
    if (!formData.financialYear) {
      errors.financialYear = 'Financial Year is required';
    }

    let tableDataValid = true;
    const newTableErrors = tableData.map((row) => {
      const rowErrors = {};
      if (!row.docType) {
        rowErrors.docType = 'Doc Type is required';
        tableDataValid = false;
      }
      if (!row.subType) {
        rowErrors.subType = 'Sub Type is required';
        tableDataValid = false;
      }
      if (!row.subTypeId) {
        rowErrors.subTypeId = 'Sub TypeId is required';
        tableDataValid = false;
      }
      if (!row.subTypeCode) {
        rowErrors.subTypeCode = 'Sub TypeCode is required';
        tableDataValid = false;
      }
      if (!row.docName) {
        rowErrors.docName = 'Doc Name is required';
        tableDataValid = false;
      }
      if (!row.prefix) {
        rowErrors.prefix = 'Prefix is required';
        tableDataValid = false;
      }
      if (!row.lastNo) {
        rowErrors.lastNo = 'Last No is required';
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
      orgId: 1, // Assuming this is a fixed value or you need to set it dynamically
      mappingDTO: tableData.map((row) => ({
        // id: 0, // Assuming new rows have id 0
        docType: row.docType,
        docName: row.docName,
        lastNo: row.lastNo,
        postFinance: row.postFinance,
        prefix: row.prefix,
        resetOnFinYear: row.resetOnFinYear,
        subType: row.subType,
        subTypeCode: row.subTypeCode,
        subTypeId: row.subTypeId
      }))
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentTypeMapping`, payload)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Document Type Mapping created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          branch: '',
          financialYear: '',
          active: true
        });
        setTableData([
          {
            id: 1,
            docType: '',
            subType: '',
            subTypeId: '',
            subTypeCode: '',
            docName: '',
            prefix: '',
            postFinance: true,
            lastNo: '',
            resetOnFinYear: true
          }
        ]);
        setTableErrors([]);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the list of values');
      });
  };

  const getAllDocumentTypeMapping = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getDocumentTypeMappingByOrgId`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableDataList(response.data.paramObjectsMap.documentTypeMappingVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllDocumentTypeMapping();
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
          align: 'first'
        },
        muiTableBodyCellProps: {
          align: 'first'
        }
      },
      {
        accessorKey: 'financialYear',
        header: 'Financial Year',
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
      {!listView ? (
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
              <FormControl variant="outlined" fullWidth error={!!fieldErrors.branch}>
                <InputLabel id="branch">Branch</InputLabel>
                <Select labelId="branch" label="Branch" value={formData.branch} onChange={handleInputChange} name="branch">
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </Select>
                {fieldErrors.branch && <FormHelperText>{fieldErrors.branch}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl variant="outlined" fullWidth error={!!fieldErrors.financialYear}>
                <InputLabel id="financialYear">Financial Year</InputLabel>
                <Select
                  labelId="financialYear"
                  label="Financial Year"
                  value={formData.financialYear}
                  onChange={handleInputChange}
                  name="financialYear"
                >
                  <MenuItem value="0">2023</MenuItem>
                  <MenuItem value="1">2024</MenuItem>
                </Select>
                {fieldErrors.financialYear && <FormHelperText>{fieldErrors.financialYear}</FormHelperText>}
              </FormControl>
            </div>
          </div>

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
                    {tableData.map((row, index) => (
                      <tr key={row.id}>
                        {/* Table cells */}
                        <td className="border px-2 py-2">
                          <button onClick={() => handleDeleteRow(row.id)} className="btn-danger">
                            <FaTrash style={{ fontSize: '16px' }} />
                          </button>
                        </td>
                        {/* <td className="border px-2 py-2">{index + 1}</td> */}
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
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, docType: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], docType: !value ? 'Doc Type is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.docType ? 'error' : ''}
                            style={{ marginBottom: '6px' }}
                          />
                          {tableErrors[index]?.docType && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].docType}</div>
                          )}
                        </td>

                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.subType}
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subType: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], subType: !value ? 'Sub Type is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.subType ? 'error' : ''}
                            style={{ marginBottom: '6px' }}
                          />
                          {tableErrors[index]?.subType && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].subType}</div>
                          )}
                        </td>

                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.subTypeId}
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeId: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], subTypeId: !value ? 'Sub TypeId is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.subTypeId ? 'error' : ''}
                            style={{ marginBottom: '6px' }}
                          />
                          {tableErrors[index]?.subTypeId && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].subTypeId}</div>
                          )}
                        </td>

                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.subTypeCode}
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeCode: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], subTypeCode: !value ? 'Sub TypeCode is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.subTypeCode ? 'error' : ''}
                            style={{ marginBottom: '6px' }}
                          />
                          {tableErrors[index]?.subTypeCode && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].subTypeCode}</div>
                          )}
                        </td>

                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.docName}
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, docName: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], docName: !value ? 'Doc Name is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.docName ? 'error' : ''}
                            style={{ marginBottom: '6px' }}
                          />
                          {tableErrors[index]?.docName && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].docName}</div>
                          )}
                        </td>

                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.prefix}
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, prefix: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], prefix: !value ? 'Prefix is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.prefix ? 'error' : ''}
                            style={{ marginBottom: '6px' }}
                          />
                          {tableErrors[index]?.prefix && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].prefix}</div>}
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
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, lastNo: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], lastNo: !value ? 'Last No is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.lastNo ? 'error' : ''}
                            style={{ marginBottom: '6px' }}
                          />
                          {tableErrors[index]?.lastNo && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].lastNo}</div>}
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
            data={tableDataList}
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
    </>
  );
};
export default DocumentTypeMapping;
