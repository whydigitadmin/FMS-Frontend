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
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { Tabs, Tab } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MaterialReactTable } from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

export const GstDetails = () => {
  const [formData, setFormData] = useState({
    active: true,
    pan: '',
    panName: '',
    partyName: '',
    bussinessType: '',
    accountType: '',
    businessCategory: '',
    orgId: 1
  });

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    pan: '',
    panName: '',
    partyName: '',
    bussinessType: '',
    accountType: '',
    businessCategory: ''
  });
  //   const [tableData, setTableData] = useState([]);
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

  const [tableErrors, setTableErrors] = useState([
    {
      state: '',
      gstIn: '',
      stateCode: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: ''
    }
  ]);

  const [tableDataList, setTableDataList] = useState([]);

  const [listView, setListView] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [currentRowData, setCurrentRowData] = useState(null);

  const handleClear = () => {
    setFormData({
      pan: '',
      panName: '',
      partyName: '',
      bussinessType: '',
      accountType: '',
      businessCategory: ''
    });
    setFieldErrors({
      pan: '',
      panName: '',
      partyName: '',
      bussinessType: '',
      accountType: '',
      businessCategory: ''
    });
    setTableErrors([]);
    setTableData([
      {
        state: '',
        gstIn: '',
        stateCode: '',
        contactPerson: '',
        contactPhoneNo: '',
        contactEmail: ''
      }
    ]);
    setTableErrors1([]);
    setTableData1([
      {
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
  };

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      state: '',
      gstIn: '',
      stateCode: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: ''
    };
    setTableData([...tableData, newRow]);
    setTableErrors([...tableErrors, { state: '', gstIn: '', stateCode: '', contactPerson: '', contactPhoneNo: '', contactEmail: '' }]);
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

  const [tableErrors1, setTableErrors1] = useState([
    {
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

  const handleAddRow1 = () => {
    const newRow = {
      id: Date.now(),
      state: '',
      buisnessPlace: '',
      cityName: '',
      address1: '',
      address2: '',
      contactPerson: '',
      contactPhoneNo: '',
      contactEmail: ''
    };
    setTableData1([...tableData1, newRow]);
    setTableErrors1([
      ...tableErrors1,
      { state: '', businessPlace: '', cityName: '', address: '', address2: '', contactPerson: '', contactPhoneNo: '', contactEmail: '' }
    ]);
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
    const errors = {};
    if (!formData.pan) {
      errors.pan = 'Pan is required';
    }
    if (!formData.panName) {
      errors.panName = 'Pan Name is required';
    }
    if (!formData.partyName) {
      errors.partyName = 'Party Name is required';
    }
    if (!formData.bussinessType) {
      errors.bussinessType = 'Bussiness Type is required';
    }
    if (!formData.accountType) {
      errors.accountType = 'Account Type is required';
    }
    if (!formData.businessCategory) {
      errors.businessCategory = 'Business Category is required';
    }

    let tableDataValid = true;
    const newTableErrors = tableData.map((row) => {
      const rowErrors = {};
      if (!row.state) {
        rowErrors.state = 'State is required';
        tableDataValid = false;
      }
      if (!row.gstIn) {
        rowErrors.gstIn = 'Gst In is required';
        tableDataValid = false;
      }
      if (!row.stateCode) {
        rowErrors.stateCode = 'State Code is required';
        tableDataValid = false;
      }
      if (!row.contactPerson) {
        rowErrors.contactPerson = 'Contact Person is required';
        tableDataValid = false;
      }
      if (!row.contactPhoneNo) {
        rowErrors.contactPhoneNo = 'Contact PhoneNo is required';
        tableDataValid = false;
      }
      if (!row.contactEmail) {
        rowErrors.contactEmail = 'Contact Email is required';
        tableDataValid = false;
      }

      return rowErrors;
    });
    setFieldErrors(errors);

    setTableErrors(newTableErrors);

    let tableDataValid1 = true;
    const newTableErrors1 = tableData1.map((row) => {
      const rowErrors1 = {};
      if (!row.state) {
        rowErrors1.state = 'State is required';
        tableDataValid1 = false;
      }
      if (!row.businessPlace) {
        rowErrors1.businessPlace = 'Business Place is required';
        tableDataValid1 = false;
      }
      if (!row.cityName) {
        rowErrors1.cityName = 'City Name is required';
        tableDataValid1 = false;
      }
      if (!row.address1) {
        rowErrors1.address1 = 'Address1 is required';
        tableDataValid1 = false;
      }
      if (!row.address2) {
        rowErrors1.address2 = 'Address2 is required';
        tableDataValid1 = false;
      }
      if (!row.contactPerson) {
        rowErrors1.contactPerson = 'Contact Person is required';
        tableDataValid1 = false;
      }
      if (!row.contactPhoneNo) {
        rowErrors1.contactPhoneNo = 'Contact PhoneNo is required';
        tableDataValid1 = false;
      }
      if (!row.contactEmail) {
        rowErrors1.contactEmail = 'Contact Email is required';
        tableDataValid1 = false;
      }

      return rowErrors1;
    });

    setTableErrors1(newTableErrors1);

    if (Object.keys(errors).length > 0 || !tableDataValid || !tableDataValid1) {
      return;
    }

    const payload = {
      ...formData,
      stateGstDTO: tableData.map((row) => ({
        contactEmail: row.contactEmail,
        contactPerson: row.contactPerson,
        contactPhoneNo: row.contactPhoneNo,
        gstIn: row.gstIn,
        // id: row.id,
        stateCode: row.stateCode,
        stateGst: row.state
      })),
      businessAddressDTO: tableData1.map((row) => ({
        address1: row.address1,
        address2: row.address2,
        businessPlace: row.businessPlace,
        cityName: row.cityName,
        contactEmail: row.contactEmail,
        contactPerson: row.contactPerson,
        contactPhoneNo: row.contactPhoneNo,
        // id: row.id,
        state: row.state
      }))
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateGstIn`, payload)
      .then((response) => {
        console.log('Response:', response.data);

        setFormData({
          pan: '',
          panName: '',
          partyName: '',
          bussinessType: '',
          accountType: '',
          businessCategory: '',
          active: true,
          orgId: 1
        });
        setTableData([{ id: 1, state: '', gstIn: '', stateCode: '', contactPerson: '', contactPhoneNo: '', contactEmail: '' }]);
        setTableData1([
          {
            id: 1,
            state: '',
            businessPlace: '',
            cityName: '',
            address1: '',
            address2: '',
            contactPerson: '',
            contactPhoneNo: '',
            contactEmail: ''
          }
        ]);
        toast.success('Gst Details created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the gst details');
      });
  };

  const handleEditSave = () => {
    const errors = {};
    if (!formData.pan) {
      errors.pan = 'Pan is required';
    }
    if (!formData.panName) {
      errors.panName = 'Pan Name is required';
    }
    if (!formData.partyName) {
      errors.partyName = 'Party Name is required';
    }
    if (!formData.bussinessType) {
      errors.bussinessType = 'Bussiness Type is required';
    }
    if (!formData.accountType) {
      errors.accountType = 'Account Type is required';
    }
    if (!formData.businessCategory) {
      errors.businessCategory = 'Business Category is required';
    }

    let tableDataValid = true;
    const newTableErrors = tableData.map((row) => {
      const rowErrors = {};
      if (!row.state) {
        rowErrors.state = 'State is required';
        tableDataValid = false;
      }
      if (!row.gstIn) {
        rowErrors.gstIn = 'Gst In is required';
        tableDataValid = false;
      }
      if (!row.stateCode) {
        rowErrors.stateCode = 'State Code is required';
        tableDataValid = false;
      }
      if (!row.contactPerson) {
        rowErrors.contactPerson = 'Contact Person is required';
        tableDataValid = false;
      }
      if (!row.contactPhoneNo) {
        rowErrors.contactPhoneNo = 'Contact PhoneNo is required';
        tableDataValid = false;
      }
      if (!row.contactEmail) {
        rowErrors.contactEmail = 'Contact Email is required';
        tableDataValid = false;
      }

      return rowErrors;
    });
    setFieldErrors(errors);

    setTableErrors(newTableErrors);

    let tableDataValid1 = true;
    const newTableErrors1 = tableData1.map((row) => {
      const rowErrors1 = {};
      if (!row.state) {
        rowErrors1.state = 'State is required';
        tableDataValid1 = false;
      }
      if (!row.businessPlace) {
        rowErrors1.businessPlace = 'Business Place is required';
        tableDataValid1 = false;
      }
      if (!row.cityName) {
        rowErrors1.cityName = 'City Name is required';
        tableDataValid1 = false;
      }
      if (!row.address1) {
        rowErrors1.address1 = 'Address1 is required';
        tableDataValid1 = false;
      }
      if (!row.address2) {
        rowErrors1.address2 = 'Address2 is required';
        tableDataValid1 = false;
      }
      if (!row.contactPerson) {
        rowErrors1.contactPerson = 'Contact Person is required';
        tableDataValid1 = false;
      }
      if (!row.contactPhoneNo) {
        rowErrors1.contactPhoneNo = 'Contact PhoneNo is required';
        tableDataValid1 = false;
      }
      if (!row.contactEmail) {
        rowErrors1.contactEmail = 'Contact Email is required';
        tableDataValid1 = false;
      }

      return rowErrors1;
    });

    setTableErrors1(newTableErrors1);

    if (Object.keys(errors).length > 0 || !tableDataValid || !tableDataValid1) {
      return;
    }

    // const payload = {
    //   ...formData,
    //   stateGstDTO: tableData.map((row) => ({
    //     contactEmail: row.contactEmail,
    //     contactPerson: row.contactPerson,
    //     contactPhoneNo: row.contactPhoneNo,
    //     gstIn: row.gstIn,
    //     // id: row.id,
    //     stateCode: row.stateCode,
    //     stateGst: row.state
    //   })),
    //   businessAddressDTO: tableData1.map((row) => ({
    //     address1: row.address1,
    //     address2: row.address2,
    //     businessPlace: row.businessPlace,
    //     cityName: row.cityName,
    //     contactEmail: row.contactEmail,
    //     contactPerson: row.contactPerson,
    //     contactPhoneNo: row.contactPhoneNo,
    //     // id: row.id,
    //     state: row.state
    //   }))
    // };

    const payload = {
      ...formData,
      stateGstDTO: tableData
        .filter((row) => row.contactEmail || row.contactPerson || row.contactPhoneNo || row.gstIn || row.stateCode || row.state)
        .map((row) => {
          const stateGstDTO = {
            contactEmail: row.contactEmail,
            contactPerson: row.contactPerson,
            contactPhoneNo: row.contactPhoneNo,
            gstIn: row.gstIn,
            stateCode: row.stateCode,
            stateGst: row.state
          };

          // Only include 'id' if it exists
          if (row.id && (row.contactEmail || row.contactPerson || row.contactPhoneNo || row.gstIn || row.stateCode || row.state)) {
            stateGstDTO.id = row.id;
          }

          return stateGstDTO;
        }),
      businessAddressDTO: tableData1
        .filter(
          (row) =>
            row.address1 ||
            row.address2 ||
            row.businessPlace ||
            row.cityName ||
            row.contactEmail ||
            row.contactPerson ||
            row.contactPhoneNo ||
            row.state
        )
        .map((row) => {
          const businessAddressDTO = {
            address1: row.address1,
            address2: row.address2,
            businessPlace: row.businessPlace,
            cityName: row.cityName,
            contactEmail: row.contactEmail,
            contactPerson: row.contactPerson,
            contactPhoneNo: row.contactPhoneNo,
            state: row.state
          };

          // Only include 'id' if it exists
          if (
            row.id &&
            (row.address1 ||
              row.address2 ||
              row.businessPlace ||
              row.cityName ||
              row.contactEmail ||
              row.contactPerson ||
              row.contactPhoneNo ||
              row.state)
          ) {
            businessAddressDTO.id = row.id;
          }

          return businessAddressDTO;
        })
    };

    const updatedPayload = {
      ...payload,
      id: currentRowData?.id
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateGstIn`, updatedPayload)
      .then((response) => {
        console.log('Response:', response.data);

        setFormData({
          pan: '',
          panName: '',
          partyName: '',
          bussinessType: '',
          accountType: '',
          businessCategory: '',
          active: true,
          orgId: 1
        });
        setTableData([{ id: Date.now(), state: '', gstIn: '', stateCode: '', contactPerson: '', contactPhoneNo: '', contactEmail: '' }]);
        setTableData1([
          {
            id: Date.now(),
            state: '',
            businessPlace: '',
            cityName: '',
            address1: '',
            address2: '',
            contactPerson: '',
            contactPhoneNo: '',
            contactEmail: ''
          }
        ]);
        toast.success('Gst Details Updated successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setEditMode(false);
        setTableErrors([]);
        setTableErrors1([]);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while updating the gst details');
      });
  };

  const getAllGstDetails1 = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getGstInById`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableDataList(response.data.paramObjectsMap.gstInVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getAllGstDetails = async (selectedDocumentId) => {
    try {
      // Update the URL to use query parameter instead of path parameter
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getGstInById`, {
        params: {
          id: selectedDocumentId
        }
      });
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableDataList(response.data.paramObjectsMap.gstInVO);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = () => {
    getAllGstDetails1();
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
    getAllGstDetails(row.original.id);
    setCurrentRowData(row.original);
    setFormData({
      pan: row.original.pan,
      panName: row.original.panName,
      partyName: row.original.partyName,
      bussinessType: row.original.bussinessType,
      accountType: row.original.accountType,
      businessCategory: row.original.businessCategory,
      active: row.original.active
    });

    setTableData(
      row.original.stateGstVO?.map((state) => ({
        id: state.id || Date.now(),
        state: state.stateGst,
        gstIn: state.gstIn,
        stateCode: state.stateCode,
        contactPerson: state.contactPerson,
        contactPhoneNo: state.contactPhoneNo,
        contactEmail: state.contactEmail
      })) || []
    );

    setTableData1(
      row.original.businessAddressVO?.map((state) => ({
        id: state.id || Date.now(),
        state: state.state,
        businessPlace: state.businessPlace,
        cityName: state.cityName,
        address1: state.address1,
        address2: state.address2,
        contactPerson: state.contactPerson,
        contactPhoneNo: state.contactPhoneNo,
        contactEmail: state.contactEmail
      })) || []
    );

    setEditMode(true);
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
            <IconButton onClick={() => handleEdit(row)}>
              <EditIcon />
            </IconButton>
          </div>
        )
      },
      {
        accessorKey: 'pan',
        header: 'Pan',
        size: 50,
        muiTableHeadCellProps: {
          align: 'first'
        },
        muiTableBodyCellProps: {
          align: 'first'
        }
      },
      {
        accessorKey: 'partyName',
        header: 'Party Name',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'bussinessType',
        header: 'Bussiness Type',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'accountType',
        header: 'Account Type',
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
                id="outlined-textarea"
                label="PAN"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="pan"
                fullWidth
                required
                value={formData.pan}
                onChange={handleInputChange}
                error={!!fieldErrors.pan}
                helperText={fieldErrors.pan}
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
                value={formData.panName}
                onChange={handleInputChange}
                error={!!fieldErrors.panName}
                helperText={fieldErrors.panName}
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
                value={formData.partyName}
                onChange={handleInputChange}
                error={!!fieldErrors.partyName}
                helperText={fieldErrors.partyName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.bussinessType}>
                <InputLabel id="bussinessType">Bussiness Type</InputLabel>
                <Select
                  labelId="bussinessType"
                  label="Bussiness Type"
                  value={formData.bussinessType}
                  onChange={handleInputChange}
                  name="bussinessType"
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </Select>
                {fieldErrors.bussinessType && <FormHelperText>{fieldErrors.bussinessType}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.accountType}>
                <InputLabel id="accountType">Account Type</InputLabel>
                <Select
                  labelId="accountType"
                  label="Account Type"
                  value={formData.accountType}
                  onChange={handleInputChange}
                  name="accountType"
                >
                  <MenuItem value="Saving">Saving</MenuItem>
                  <MenuItem value="Current">Current</MenuItem>
                </Select>
                {fieldErrors.accountType && <FormHelperText>{fieldErrors.accountType}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormControl size="small" variant="outlined" fullWidth error={!!fieldErrors.businessCategory}>
                <InputLabel id="businessCategory">Business Category</InputLabel>
                <Select
                  labelId="businessCategory"
                  label="Business Category"
                  value={formData.businessCategory}
                  onChange={handleInputChange}
                  name="businessCategory"
                >
                  <MenuItem value="Saving">Saving</MenuItem>
                  <MenuItem value="Current">Current</MenuItem>
                </Select>
                {fieldErrors.businessCategory && <FormHelperText>{fieldErrors.businessCategory}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.active}
                      onChange={handleInputChange}
                      name="active"
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                    />
                  }
                  label="Active"
                />
              </FormGroup>
            </div>
          </div>
          <div>
            <Tabs value={tabValue} onChange={handleChangeTab}>
              <Tab label="State Gst" />
              <Tab label="Buisness Address" />
            </Tabs>
            {tabValue === 0 ? (
              <div className="row d-flex ml">
                <div className="mt-2">
                  {/* <button
                    style={{ backgroundColor: '#434AA8', width: '7%', height: '30px', border: '1px solid #434AA8' }}
                    className="text-white"
                    onClick={handleAddRow}
                  >
                    + Add
                  </button> */}
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
                {/* Table */}
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
                            <th className="px-2 py-2 text-white">State</th>
                            <th className="px-2 py-2 text-white">GST IN</th>
                            <th className="px-2 py-2 text-white">State Code</th>
                            <th className="px-2 py-2 text-white">Contact Person</th>
                            <th className="px-2 py-2 text-white">Contact Phone No</th>
                            <th className="px-2 py-2 text-white">Contact Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((row, index) => (
                            <tr key={row.id}>
                              {/* Table cells */}
                              <td className="border px-2 py-2">
                                {/* <button onClick={() => handleDeleteRow(row.id)} className="btn-danger"> */}
                                {/* <FaTrash style={{ fontSize: '16px' }} /> */}

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
                                {/* </button> */}
                              </td>

                              {/* <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.id}
                                  onChange={(e) =>
                                    setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, id: e.target.value } : r)))
                                  }
                                />
                              </td> */}

                              <td className="border px-2 py-2" style={{ width: '50px' }}>
                                <input type="text" value={`${index + 1}`} readOnly style={{ width: '100%' }} />
                              </td>

                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.state}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, state: value } : r)));
                                    setTableErrors((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = { ...newErrors[index], state: !value ? 'State is required' : '' };
                                      return newErrors;
                                    });
                                  }}
                                  className={tableErrors[index]?.state ? 'error' : ''}
                                  style={{ marginBottom: '10px' }}
                                />
                                {tableErrors[index]?.state && (
                                  <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].state}</div>
                                )}
                              </td>

                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.gstIn}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, gstIn: value } : r)));
                                    setTableErrors((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = { ...newErrors[index], gstIn: !value ? 'Gst In is required' : '' };
                                      return newErrors;
                                    });
                                  }}
                                  className={tableErrors[index]?.gstIn ? 'error' : ''}
                                  style={{ marginBottom: '10px' }}
                                />
                                {tableErrors[index]?.gstIn && (
                                  <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].gstIn}</div>
                                )}
                              </td>

                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.stateCode}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, stateCode: value } : r)));
                                    setTableErrors((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = { ...newErrors[index], stateCode: !value ? 'state Code is required' : '' };
                                      return newErrors;
                                    });
                                  }}
                                  className={tableErrors[index]?.stateCode ? 'error' : ''}
                                  style={{ marginBottom: '10px' }}
                                />
                                {tableErrors[index]?.stateCode && (
                                  <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].stateCode}</div>
                                )}
                              </td>

                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.contactPerson}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPerson: value } : r)));
                                    setTableErrors((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = { ...newErrors[index], contactPerson: !value ? 'Contact Person is required' : '' };
                                      return newErrors;
                                    });
                                  }}
                                  className={tableErrors[index]?.contactPerson ? 'error' : ''}
                                  style={{ marginBottom: '10px' }}
                                />
                                {tableErrors[index]?.contactPerson && (
                                  <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].contactPerson}</div>
                                )}
                              </td>

                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.contactPhoneNo}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPhoneNo: value } : r)));
                                    setTableErrors((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = {
                                        ...newErrors[index],
                                        contactPhoneNo: !value ? 'Contact PhoneNo is required' : ''
                                      };
                                      return newErrors;
                                    });
                                  }}
                                  className={tableErrors[index]?.contactPhoneNo ? 'error' : ''}
                                  style={{ marginBottom: '10px' }}
                                />
                                {tableErrors[index]?.contactPhoneNo && (
                                  <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].contactPhoneNo}</div>
                                )}
                              </td>

                              <td className="border px-2 py-2">
                                <input
                                  type="text"
                                  value={row.contactEmail}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactEmail: value } : r)));
                                    setTableErrors((prev) => {
                                      const newErrors = [...prev];
                                      newErrors[index] = { ...newErrors[index], contactEmail: !value ? 'Contact Email is required' : '' };
                                      return newErrors;
                                    });
                                  }}
                                  onKeyDown={(e) => handleKeyDown(e, row)}
                                  className={tableErrors[index]?.contactEmail ? 'error' : ''}
                                  style={{ marginBottom: '10px' }}
                                />
                                {tableErrors[index]?.contactEmail && (
                                  <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].contactEmail}</div>
                                )}
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
              <div className="">
                <div className="row d-flex ml">
                  <div className="mt-2">
                    <Tooltip title="Add" placement="top">
                      <ButtonBase sx={{ borderRadius: '12px', marginLeft: '10px' }} onClick={handleAddRow1}>
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
                  {/* Table */}
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
                              <th className="px-2 py-2 text-white">State</th>
                              <th className="px-2 py-2 text-white">Business Place</th>
                              <th className="px-2 py-2 text-white">City Name</th>
                              <th className="px-2 py-2 text-white">Address1</th>
                              <th className="px-2 py-2 text-white">Address2</th>
                              <th className="px-2 py-2 text-white">Contact Person</th>
                              <th className="px-2 py-2 text-white">Contact Phone No</th>
                              <th className="px-2 py-2 text-white">Contact Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData1.map((row, index) => (
                              <tr key={row.id}>
                                {/* Table cells */}
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
                                {/* 
                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.id}
                                    onChange={(e) =>
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, id: e.target.value } : r)))
                                    }
                                  />
                                </td> */}
                                <td className="border px-2 py-2" style={{ width: '50px' }}>
                                  <input type="text" value={`${index + 1}`} readOnly style={{ width: '100%' }} />
                                </td>
                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.state}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, state: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = { ...newErrors[index], state: !value ? 'State is required' : '' };
                                        return newErrors;
                                      });
                                    }}
                                    className={tableErrors1[index]?.state ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.state && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].state}</div>
                                  )}
                                </td>

                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.businessPlace}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, businessPlace: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = {
                                          ...newErrors[index],
                                          businessPlace: !value ? 'Business Place is required' : ''
                                        };
                                        return newErrors;
                                      });
                                    }}
                                    className={tableErrors1[index]?.businessPlace ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.businessPlace && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].businessPlace}</div>
                                  )}
                                </td>

                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.cityName}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, cityName: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = { ...newErrors[index], cityName: !value ? 'City Name is required' : '' };
                                        return newErrors;
                                      });
                                    }}
                                    className={tableErrors1[index]?.cityName ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.cityName && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].cityName}</div>
                                  )}
                                </td>

                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.address1}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, address1: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = { ...newErrors[index], address1: !value ? 'Address1 is required' : '' };
                                        return newErrors;
                                      });
                                    }}
                                    className={tableErrors1[index]?.address1 ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.address1 && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].address1}</div>
                                  )}
                                </td>
                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.address2}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, address2: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = { ...newErrors[index], address2: !value ? 'Address2 is required' : '' };
                                        return newErrors;
                                      });
                                    }}
                                    className={tableErrors1[index]?.address2 ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.address2 && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].address2}</div>
                                  )}
                                </td>

                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.contactPerson}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPerson: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = {
                                          ...newErrors[index],
                                          contactPerson: !value ? 'Contact Person is required' : ''
                                        };
                                        return newErrors;
                                      });
                                    }}
                                    className={tableErrors1[index]?.contactPerson ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.contactPerson && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].contactPerson}</div>
                                  )}
                                </td>

                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.contactPhoneNo}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactPhoneNo: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = {
                                          ...newErrors[index],
                                          contactPhoneNo: !value ? 'Contact PhoneNo is required' : ''
                                        };
                                        return newErrors;
                                      });
                                    }}
                                    className={tableErrors1[index]?.contactPhoneNo ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.contactPhoneNo && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].contactPhoneNo}</div>
                                  )}
                                </td>

                                <td className="border px-2 py-2">
                                  <input
                                    type="text"
                                    value={row.contactEmail}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setTableData1((prev) => prev.map((r) => (r.id === row.id ? { ...r, contactEmail: value } : r)));
                                      setTableErrors1((prev) => {
                                        const newErrors = [...prev];
                                        newErrors[index] = {
                                          ...newErrors[index],
                                          contactPhoneNo: !value ? 'Contact Email is required' : ''
                                        };
                                        return newErrors;
                                      });
                                    }}
                                    onKeyDown={(e) => handleKeyDown1(e, row)}
                                    className={tableErrors1[index]?.contactEmail ? 'error' : ''}
                                    style={{ marginBottom: '10px' }}
                                  />
                                  {tableErrors1[index]?.contactEmail && (
                                    <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors1[index].contactEmail}</div>
                                  )}
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
export default GstDetails;
