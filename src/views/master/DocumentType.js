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
import { useRef, useState, useMemo, useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import { MaterialReactTable } from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FaStarOfLife, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

export const DocumentType = () => {
  const [formData, setFormData] = useState({
    active: true,
    documentName: '',
    documentType: '',
    documentDescription: '',
    module: '',
    subModule: '',
    primaryTable: '',
    autoGenField: '',
    prefixField: '',
    documentCode: '',
    code: '',
    branch: '',
    finyr: '',
    financeTransaction: true,
    postFinance: true,
    noGeneration: true,
    prefix: '',
    orgId: 1
  });

  const theme = useTheme();
  const anchorRef = useRef(null);

  const [fieldErrors, setFieldErrors] = useState({
    active: true,
    documentName: '',
    documentType: '',
    documentDescription: '',
    module: '',
    subModule: '',
    primaryTable: '',
    autoGenField: '',
    prefixField: '',
    documentCode: '',
    code: '',
    branch: '',
    finyr: '',
    financeTransaction: true,
    postFinance: true,
    noGeneration: true,
    prefix: ''
  });

  const [tableData, setTableData] = useState([
    {
      id: 1,
      subType: '',
      subTypeCode: '',
      subTypeName: '',
      month: ''
    }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [currentRowData, setCurrentRowData] = useState(null);

  // const [tableErrors, setTableErrors] = useState([
  //   {
  //     subType: '',
  //     subTypeCode: '',
  //     subTypeName: '',
  //     month: ''
  //   }
  // ]);

  const [tableErrors, setTableErrors] = useState([]);

  const [tableDataList, setTableDataList] = useState([]);

  const [listView, setListView] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors({ ...fieldErrors, [name]: false });
  };

  const handleClear = () => {
    setFormData({
      documentName: '',
      documentType: '',
      documentDescription: '',
      module: '',
      subModule: '',
      primaryTable: '',
      autoGenField: '',
      prefixField: '',
      documentCode: '',
      code: '',
      branch: '',
      finyr: '',
      financeTransaction: true,
      postFinance: true,
      noGeneration: true,
      prefix: ''
    });
    setFieldErrors({
      documentName: '',
      documentType: '',
      documentDescription: '',
      module: '',
      subModule: '',
      primaryTable: '',
      autoGenField: '',
      prefixField: '',
      documentCode: '',
      code: '',
      branch: '',
      finyr: '',
      financeTransaction: true,
      postFinance: true,
      noGeneration: true,
      prefix: ''
    });
    setTableErrors([]);
    setTableData([
      {
        id: 1,
        subType: '',
        subTypeCode: '',
        subTypeName: '',
        month: ''
      }
    ]);
  };

  const handleSave = () => {
    const errors = {};
    if (!formData.documentName) {
      errors.documentName = 'Document Name is required';
    }
    if (!formData.documentType) {
      errors.documentType = 'Document Type is required';
    }
    if (!formData.documentDescription) {
      errors.documentDescription = 'Document Description is required';
    }
    if (!formData.module) {
      errors.module = 'Module is required';
    }
    if (!formData.subModule) {
      errors.subModule = 'Sub Module is required';
    }
    if (!formData.primaryTable) {
      errors.primaryTable = 'Primary Table is required';
    }
    if (!formData.autoGenField) {
      errors.autoGenField = 'AutoGen Field is required';
    }
    if (!formData.prefixField) {
      errors.prefixField = 'Prefix Field is required';
    }
    if (!formData.documentCode) {
      errors.documentCode = 'Document Code is required';
    }
    if (!formData.code) {
      errors.code = 'Code is required';
    }
    if (!formData.branch) {
      errors.branch = 'Branch is required';
    }
    if (!formData.finyr) {
      errors.finyr = 'Fin year is required';
    }
    if (!formData.prefix) {
      errors.prefix = 'prefix is required';
    }

    let tableDataValid = true;
    const newTableErrors = tableData.map((row) => {
      const rowErrors = {};
      if (!row.subType) {
        rowErrors.subType = 'Sub Type is required';
        tableDataValid = false;
      }
      if (!row.subTypeCode) {
        rowErrors.subTypeCode = 'Sub Type Code is required';
        tableDataValid = false;
      }
      if (!row.subTypeName) {
        rowErrors.subTypeName = 'Sub Type Name is required';
        tableDataValid = false;
      }
      if (!row.month) {
        rowErrors.month = 'Month is required';
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
      // createdBy: 'string', // Assuming this is a placeholder or you need to set it dynamically
      // updatedBy: 'string', // Assuming this is a placeholder or you need to set it dynamically
      subTypesDTO: tableData.map((row) => ({
        // id: 0, // Assuming new rows have id 0
        // sno: tableData.indexOf(row) + 1, // Using index + 1 for sno
        subType: row.subType,
        subTypeCode: row.subTypeCode,
        subTypeName: row.subTypeName,
        month: row.month
      }))
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentType`, payload)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Document Type created successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        setFormData({
          documentName: '',
          documentType: '',
          documentDescription: '',
          module: '',
          subModule: '',
          primaryTable: '',
          autoGenField: '',
          prefixField: '',
          documentCode: '',
          code: '',
          branch: '',
          finyr: '',
          financeTransaction: true,
          postFinance: true,
          noGeneration: true,
          prefix: '',
          orgId: 1,
          active: true
        });
        setTableData([
          {
            // id: 1,
            subType: '',
            subTypeCode: '',
            subTypeName: '',
            month: ''
          }
        ]);
        setTableErrors([]);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while saving the document type');
      });
  };

  // const handleEditSave = () => {
  //   const errors = {};
  //   if (!formData.documentName) {
  //     errors.documentName = 'Document Name is required';
  //   }
  //   if (!formData.documentType) {
  //     errors.documentType = 'Document Type is required';
  //   }
  //   if (!formData.documentDescription) {
  //     errors.documentDescription = 'Document Description is required';
  //   }
  //   if (!formData.module) {
  //     errors.module = 'Module is required';
  //   }
  //   if (!formData.subModule) {
  //     errors.subModule = 'Sub Module is required';
  //   }
  //   if (!formData.primaryTable) {
  //     errors.primaryTable = 'Primary Table is required';
  //   }
  //   if (!formData.autoGenField) {
  //     errors.autoGenField = 'AutoGen Field is required';
  //   }
  //   if (!formData.prefixField) {
  //     errors.prefixField = 'Prefix Field is required';
  //   }
  //   if (!formData.documentCode) {
  //     errors.documentCode = 'Document Code is required';
  //   }
  //   if (!formData.code) {
  //     errors.code = 'Code is required';
  //   }
  //   if (!formData.branch) {
  //     errors.branch = 'Branch is required';
  //   }
  //   if (!formData.finyr) {
  //     errors.finyr = 'Fin year is required';
  //   }
  //   if (!formData.prefix) {
  //     errors.prefix = 'prefix is required';
  //   }

  //   if (Object.keys(errors).length > 0) {
  //     return;
  //   }

  //   const payload = {
  //     ...formData,
  //     orgId: 1, // Assuming this is a fixed value or you need to set it dynamically
  //     // createdBy: 'string', // Assuming this is a placeholder or you need to set it dynamically
  //     // updatedBy: 'string', // Assuming this is a placeholder or you need to set it dynamically
  //     subTypesDTO: tableData.map((row) => ({
  //       // id: 0, // Assuming new rows have id 0
  //       sno: tableData.indexOf(row) + 1, // Using index + 1 for sno
  //       subType: row.subType,
  //       subTypeCode: row.subTypeCode,
  //       subTypeName: row.subTypeName,
  //       month: row.month
  //     }))
  //   };

  //   const updatedPayload = {
  //     ...payload,
  //     id: currentRowData?.id // Ensure the id from the current row data is included
  //   };

  //   axios
  //     .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentType`, updatedPayload)
  //     .then((response) => {
  //       console.log('Response:', response.data);
  //       toast.success('Document Type Updated successfully', {
  //         autoClose: 2000,
  //         theme: 'colored'
  //       });
  //       setFormData({
  //         documentName: '',
  //         documentType: '',
  //         documentDescription: '',
  //         module: '',
  //         subModule: '',
  //         primaryTable: '',
  //         autoGenField: '',
  //         prefixField: '',
  //         documentCode: '',
  //         code: '',
  //         branch: '',
  //         finyr: '',
  //         financeTransaction: true,
  //         postFinance: true,
  //         noGeneration: true,
  //         prefix: '',
  //         orgId: 1,
  //         active: true
  //       });
  //       setTableData([
  //         {
  //           id: 1,
  //           subType: '',
  //           subTypeCode: '',
  //           subTypeName: '',
  //           month: ''
  //         }
  //       ]);
  //       getAllDocumentType();
  //       setEditMode(false); // Close the dialog after saving
  //       setTableErrors([]);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       toast.error('An error occurred while updating the document type');
  //     });
  // };

  // const handleEditSave = () => {
  //   const errors = {};
  //   if (!formData.documentName) {
  //     errors.documentName = 'Document Name is required';
  //   }
  //   if (!formData.documentType) {
  //     errors.documentType = 'Document Type is required';
  //   }
  //   if (!formData.documentDescription) {
  //     errors.documentDescription = 'Document Description is required';
  //   }
  //   if (!formData.module) {
  //     errors.module = 'Module is required';
  //   }
  //   if (!formData.subModule) {
  //     errors.subModule = 'Sub Module is required';
  //   }
  //   if (!formData.primaryTable) {
  //     errors.primaryTable = 'Primary Table is required';
  //   }
  //   if (!formData.autoGenField) {
  //     errors.autoGenField = 'AutoGen Field is required';
  //   }
  //   if (!formData.prefixField) {
  //     errors.prefixField = 'Prefix Field is required';
  //   }
  //   if (!formData.documentCode) {
  //     errors.documentCode = 'Document Code is required';
  //   }
  //   if (!formData.code) {
  //     errors.code = 'Code is required';
  //   }
  //   if (!formData.branch) {
  //     errors.branch = 'Branch is required';
  //   }
  //   if (!formData.finyr) {
  //     errors.finyr = 'Fin year is required';
  //   }
  //   if (!formData.prefix) {
  //     errors.prefix = 'Prefix is required';
  //   }

  //   if (Object.keys(errors).length > 0) {
  //     setFieldErrors(errors);
  //     return;
  //   }

  //   const payload = {
  //     ...formData,
  //     subTypesDTO: tableData.map((row) => ({
  //       id: row.id,
  //       subType: row.subType,
  //       subTypeCode: row.subTypeCode,
  //       subTypeName: row.subTypeName,
  //       month: row.month
  //     }))
  //   };

  //   const updatedPayload = {
  //     ...payload,
  //     id: currentRowData?.id
  //   };

  //   axios
  //     .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentType`, updatedPayload)
  //     .then((response) => {
  //       console.log('Response:', response.data);
  //       toast.success('Document Type Updated successfully', {
  //         autoClose: 2000,
  //         theme: 'colored'
  //       });
  //       setFormData({
  //         documentName: '',
  //         documentType: '',
  //         documentDescription: '',
  //         module: '',
  //         subModule: '',
  //         primaryTable: '',
  //         autoGenField: '',
  //         prefixField: '',
  //         documentCode: '',
  //         code: '',
  //         branch: '',
  //         finyr: '',
  //         financeTransaction: true,
  //         postFinance: true,
  //         noGeneration: true,
  //         prefix: '',
  //         orgId: 1,
  //         active: true
  //       });
  //       setTableData([]);
  //       // getAllDocumentType();
  //       setEditMode(false);
  //       setTableErrors([]);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       toast.error('An error occurred while updating the document type');
  //     });
  // };

  // const handleEditSave = () => {
  //   const errors = {};
  //   // Validate formData here as per your existing logic

  //   if (Object.keys(errors).length > 0) {
  //     setTableErrors(errors);
  //     return;
  //   }

  //   const payload = {
  //     ...formData,
  //     subTypesVO: tableData.map((row) => ({
  //       id: row.id,
  //       subType: row.subType,
  //       subTypeCode: row.subTypeCode,
  //       subTypeName: row.subTypeName,
  //       month: row.month
  //     }))
  //   };

  //   const updatedPayload = {
  //     ...payload,
  //     id: currentRowData?.id
  //   };

  //   axios
  //     .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentType`, updatedPayload)
  //     .then((response) => {
  //       console.log('Response:', response.data);
  //       toast.success('Document Type Updated successfully', {
  //         autoClose: 2000,
  //         theme: 'colored'
  //       });
  //       setFormData({
  //         documentName: '',
  //         documentType: '',
  //         documentDescription: '',
  //         module: '',
  //         subModule: '',
  //         primaryTable: '',
  //         autoGenField: '',
  //         prefixField: '',
  //         documentCode: '',
  //         code: '',
  //         branch: '',
  //         finyr: '',
  //         financeTransaction: true,
  //         postFinance: true,
  //         noGeneration: true,
  //         prefix: '',
  //         orgId: 1,
  //         active: true
  //       });

  //       // Clear existing table data
  //       setTableData([]);

  //       // If you have a mechanism to add new rows, do it here
  //       if (shouldAddNewRow) {
  //         const newRowIndex = tableData.length + 1; // Example of generating new ID
  //         const newRow = {
  //           id: newRowIndex,
  //           subType: '', // Default values
  //           subTypeCode: '',
  //           subTypeName: '',
  //           month: ''
  //         };
  //         setTableData([...tableData, newRow]);
  //       }

  //       getAllDocumentType(); // Fetch updated data if needed
  //       setEditMode(false);
  //       setTableErrors([]);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       toast.error('An error occurred while updating the document type');
  //     });
  // };

  // const handleEditSave = () => {
  //   const errors = {};
  //   // Validate formData here as per your existing logic

  //   if (Object.keys(errors).length > 0) {
  //     setTableErrors(errors);
  //     return;
  //   }

  //   const payload = {
  //     ...formData,
  //     subTypesDTO: tableData.map((row) => ({
  //       id: row.id,
  //       subType: row.subType,
  //       subTypeCode: row.subTypeCode,
  //       subTypeName: row.subTypeName,
  //       month: row.month
  //     }))
  //   };

  //   const updatedPayload = {
  //     ...payload,
  //     id: currentRowData?.id
  //   };

  //   axios
  //     .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentType`, updatedPayload)
  //     .then((response) => {
  //       console.log('Response:', response.data);
  //       toast.success('Document Type Updated successfully', {
  //         autoClose: 2000,
  //         theme: 'colored'
  //       });
  //       // Clear form data and table data
  //       setFormData({
  //         documentName: '',
  //         documentType: '',
  //         documentDescription: '',
  //         module: '',
  //         subModule: '',
  //         primaryTable: '',
  //         autoGenField: '',
  //         prefixField: '',
  //         documentCode: '',
  //         code: '',
  //         branch: '',
  //         finyr: '',
  //         financeTransaction: true,
  //         postFinance: true,
  //         noGeneration: true,
  //         prefix: '',
  //         orgId: 1,
  //         active: true
  //       });
  //       setTableData([
  //         {
  //           id: 1,
  //           subType: '',
  //           subTypeCode: '',
  //           subTypeName: '',
  //           month: ''
  //         }
  //       ]);

  //       getAllDocumentType(); // Fetch updated data if needed
  //       setEditMode(false);
  //       setTableErrors([]);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       toast.error('An error occurred while updating the document type');
  //     });
  // };

  // const handleEditSave = () => {
  //   // Validate formData here as per your existing logic
  //   const errors = {};
  //   if (!formData.documentName) {
  //     errors.documentName = 'Document Name is required';
  //   }
  //   if (!formData.documentType) {
  //     errors.documentType = 'Document Type is required';
  //   }
  //   if (!formData.documentDescription) {
  //     errors.documentDescription = 'Document Description is required';
  //   }
  //   if (!formData.module) {
  //     errors.module = 'Module is required';
  //   }
  //   if (!formData.subModule) {
  //     errors.subModule = 'Sub Module is required';
  //   }
  //   if (!formData.primaryTable) {
  //     errors.primaryTable = 'Primary Table is required';
  //   }
  //   if (!formData.autoGenField) {
  //     errors.autoGenField = 'AutoGen Field is required';
  //   }
  //   if (!formData.prefixField) {
  //     errors.prefixField = 'Prefix Field is required';
  //   }
  //   if (!formData.documentCode) {
  //     errors.documentCode = 'Document Code is required';
  //   }
  //   if (!formData.code) {
  //     errors.code = 'Code is required';
  //   }
  //   if (!formData.branch) {
  //     errors.branch = 'Branch is required';
  //   }
  //   if (!formData.finyr) {
  //     errors.finyr = 'Fin year is required';
  //   }
  //   if (!formData.prefix) {
  //     errors.prefix = 'prefix is required';
  //   }

  //   let tableDataValid = true;
  //   const newTableErrors = tableData.map((row) => {
  //     const rowErrors = {};
  //     if (!row.subType) {
  //       rowErrors.subType = 'Sub Type is required';
  //       tableDataValid = false;
  //     }
  //     if (!row.subTypeCode) {
  //       rowErrors.subTypeCode = 'Sub Type Code is required';
  //       tableDataValid = false;
  //     }
  //     if (!row.subTypeName) {
  //       rowErrors.subTypeName = 'Sub Type Name is required';
  //       tableDataValid = false;
  //     }
  //     if (!row.month) {
  //       rowErrors.month = 'Month is required';
  //       tableDataValid = false;
  //     }
  //     return rowErrors;
  //   });

  //   setFieldErrors(errors);
  //   setTableErrors(newTableErrors);

  //   if (Object.keys(errors).length > 0) {
  //     setTableErrors(errors);
  //     return;
  //   }

  //   // Ensure tableData is defined and is an array
  //   if (!Array.isArray(tableData)) {
  //     console.error('tableData is not an array or is undefined', tableData);
  //     return;
  //   }

  //   const payload = {
  //     ...formData,
  //     subTypesDTO: tableData.map((row) => {
  //       const subTypeDTO = {
  //         subType: row.subType,
  //         subTypeCode: row.subTypeCode,
  //         subTypeName: row.subTypeName,
  //         month: row.month
  //       };

  //       // Only include 'id' if it exists
  //       if (row.id) {
  //         subTypeDTO.id = row.id;
  //       }

  //       return subTypeDTO;
  //     })
  //   };

  //   const updatedPayload = {
  //     ...payload,
  //     id: currentRowData?.id
  //   };

  //   axios
  //     .put(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentType`, updatedPayload)
  //     .then((response) => {
  //       console.log('Response:', response.data);
  //       toast.success('Document Type Updated successfully', {
  //         autoClose: 2000,
  //         theme: 'colored'
  //       });
  //       // Clear form data and table data
  //       setFormData({
  //         documentName: '',
  //         documentType: '',
  //         documentDescription: '',
  //         module: '',
  //         subModule: '',
  //         primaryTable: '',
  //         autoGenField: '',
  //         prefixField: '',
  //         documentCode: '',
  //         code: '',
  //         branch: '',
  //         finyr: '',
  //         financeTransaction: true,
  //         postFinance: true,
  //         noGeneration: true,
  //         prefix: '',
  //         orgId: 1,
  //         active: true
  //       });
  //       setTableData([
  //         {
  //           id: 1,
  //           subType: '',
  //           subTypeCode: '',
  //           subTypeName: '',
  //           month: ''
  //         }
  //       ]);

  //       // getAllDocumentTypeById(); // Fetch updated data if needed
  //       setEditMode(false);
  //       setTableErrors([]);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       toast.error('An error occurred while updating the document type');
  //     });
  // };

  const handleEditSave = () => {
    // Validate formData here as per your existing logic
    const errors = {};
    if (!formData.documentName) {
      errors.documentName = 'Document Name is required';
    }
    if (!formData.documentType) {
      errors.documentType = 'Document Type is required';
    }
    if (!formData.documentDescription) {
      errors.documentDescription = 'Document Description is required';
    }
    if (!formData.module) {
      errors.module = 'Module is required';
    }
    if (!formData.subModule) {
      errors.subModule = 'Sub Module is required';
    }
    if (!formData.primaryTable) {
      errors.primaryTable = 'Primary Table is required';
    }
    if (!formData.autoGenField) {
      errors.autoGenField = 'AutoGen Field is required';
    }
    if (!formData.prefixField) {
      errors.prefixField = 'Prefix Field is required';
    }
    if (!formData.documentCode) {
      errors.documentCode = 'Document Code is required';
    }
    if (!formData.code) {
      errors.code = 'Code is required';
    }
    if (!formData.branch) {
      errors.branch = 'Branch is required';
    }
    if (!formData.finyr) {
      errors.finyr = 'Fin year is required';
    }
    if (!formData.prefix) {
      errors.prefix = 'prefix is required';
    }

    let tableDataValid = true;
    const newTableErrors = tableData.map((row) => {
      const rowErrors = {};
      if (!row.subType) {
        rowErrors.subType = 'Sub Type is required';
        tableDataValid = false;
      }
      if (!row.subTypeCode) {
        rowErrors.subTypeCode = 'Sub Type Code is required';
        tableDataValid = false;
      }
      if (!row.subTypeName) {
        rowErrors.subTypeName = 'Sub Type Name is required';
        tableDataValid = false;
      }
      if (!row.month) {
        rowErrors.month = 'Month is required';
        tableDataValid = false;
      }
      return rowErrors;
    });

    setFieldErrors(errors);
    setTableErrors(newTableErrors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Ensure tableData is defined and is an array
    if (!Array.isArray(tableData)) {
      console.error('tableData is not an array or is undefined', tableData);
      return;
    }

    const payload = {
      ...formData,
      subTypesDTO: tableData
        .filter((row) => row.subType || row.subTypeCode || row.subTypeName || row.month) // Filter out rows with empty values
        .map((row) => {
          const subTypeDTO = {
            subType: row.subType,
            subTypeCode: row.subTypeCode,
            subTypeName: row.subTypeName,
            month: row.month
          };

          // Only include 'id' if it exists and row is not empty
          if (row.id && (row.subType || row.subTypeCode || row.subTypeName || row.month)) {
            subTypeDTO.id = row.id;
          }

          return subTypeDTO;
        })
    };

    const updatedPayload = {
      ...payload,
      id: currentRowData?.id
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/basicMaster/updateCreateDocumentType`, updatedPayload)
      .then((response) => {
        console.log('Response:', response.data);
        toast.success('Document Type Updated successfully', {
          autoClose: 2000,
          theme: 'colored'
        });
        // Clear form data and table data
        setFormData({
          documentName: '',
          documentType: '',
          documentDescription: '',
          module: '',
          subModule: '',
          primaryTable: '',
          autoGenField: '',
          prefixField: '',
          documentCode: '',
          code: '',
          branch: '',
          finyr: '',
          financeTransaction: true,
          postFinance: true,
          noGeneration: true,
          prefix: '',
          orgId: 1,
          active: true
        });
        setTableData([
          {
            id: Date.now(),
            subType: '',
            subTypeCode: '',
            subTypeName: '',
            month: ''
          }
        ]);

        // getAllDocumentTypeById(); // Fetch updated data if needed
        setEditMode(false);
        setTableErrors([]);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while updating the document type');
      });
  };

  // const getAllDocumentType = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getDocumentTypeById`);
  //     console.log('API Response:', response);

  //     if (response.status === 200) {
  //       setTableDataList(response.data.paramObjectsMap.documentTypeVO);
  //       setId(response.data.paramObjectsMap.documentTypeVO.id);
  //       const documentType = response.data.paramObjectsMap.documentTypeVO[0];
  //       const updatedTableData = documentType.subTypesVO.map((subType) => ({
  //         id: subType.id,
  //         subType: subType.subType,
  //         subTypeCode: subType.subTypeCode,
  //         subTypeName: subType.subTypeName,
  //         month: subType.month
  //       }));
  //       setTableData(updatedTableData);
  //     } else {
  //       // Handle error
  //       console.error('API Error:', response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const getAllDocumentType = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/getAllDocumentType`);
      console.log('API Response:', response);

      if (response.status === 200) {
        setTableDataList(response.data.paramObjectsMap.documentType);
        // setDocumentId(response.data.paramObjectsMap.documentType.id);
        // getAllDocumentTypeById(response.data.paramObjectsMap.documentType[0].id);
      } else {
        // Handle error
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getAllDocumentTypeById = async (selectedDocumentId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/basicMaster/DocumentType/${selectedDocumentId}`);
      console.log('API Response:', response);

      if (response.status === 200) {
        const documentType = response.data.paramObjectsMap.documentType[0];
        const updatedTableData = documentType.subTypesVO.map((subType) => ({
          id: subType.id,
          subType: subType.subType,
          subTypeCode: subType.subTypeCode,
          subTypeName: subType.subTypeName,
          month: subType.month
        }));

        setTableData(updatedTableData);
      } else {
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (id, field, value) => {
    setTableData((prevTableData) => prevTableData.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
    setTableErrors((prevTableErrors) => {
      const newErrors = { ...prevTableErrors };
      newErrors[id] = {
        ...newErrors[id],
        [field]: !value ? `${field} is required` : ''
      };
      return newErrors;
    });
  };

  // useEffect(() => {
  //   getAllDocumentType();
  // }, []);

  const handleAddRow = () => {
    const newRow = {
      // id: tableData.length + 1,
      id: Date.now(),
      subType: '',
      subTypeCode: '',
      subTypeName: '',
      month: ''
    };
    setTableData([...tableData, newRow]);
  };

  // const handleDeleteRow = (id) => {
  //   setTableData(tableData.filter((row) => row.id !== id));
  // };

  const handleDeleteRow = (id) => {
    setTableData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleKeyDown = (e, row) => {
    if (e.key === 'Tab' && row.id === tableData[tableData.length - 1].id) {
      e.preventDefault();
      handleAddRow();
    }
  };

  const handleView = () => {
    getAllDocumentType();
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

  // const handleEdit = (row) => {
  //   setCurrentRowData(row.original);
  //   setFormData(row.original);
  //   setEditMode(true);
  //   setListView(false);
  // };

  const handleEdit = (row) => {
    console.log('first', row.original);
    getAllDocumentTypeById(row.original.id);
    setCurrentRowData(row.original);
    setFormData({
      documentName: row.original.documentName,
      documentType: row.original.documentType,
      documentDescription: row.original.documentDescription,
      module: row.original.module,
      subModule: row.original.subModule,
      primaryTable: row.original.primaryTable,
      autoGenField: row.original.autoGenField,
      prefixField: row.original.prefixField,
      documentCode: row.original.documentCode,
      code: row.original.code,
      branch: row.original.branch,
      finyr: row.original.finyr,
      financeTransaction: row.original.financeTransaction,
      postFinance: row.original.postFinance,
      noGeneration: row.original.noGeneration,
      prefix: row.original.prefix,
      orgId: row.original.orgId,
      active: row.original.active
    });

    setTableData(
      row.original.subTypesVO?.map((subType) => ({
        // id: subType.id,
        id: subType.id || Date.now(), // Ensure each row has a unique id

        subType: subType.subType,
        subTypeCode: subType.subTypeCode,
        subTypeName: subType.subTypeName,
        month: subType.month
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
        accessorKey: 'documentName',
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
        accessorKey: 'module',
        header: 'Module',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'documentCode',
        header: 'Document Code',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
      },
      {
        accessorKey: 'finyr',
        header: 'Fin year',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center'
        },
        muiTableBodyCellProps: {
          align: 'center'
        }
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
                id="documentName"
                label="Document Name"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="documentName"
                fullWidth
                required
                value={formData.documentName}
                onChange={handleInputChange}
                error={!!fieldErrors.documentName}
                helperText={fieldErrors.documentName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="documentType"
                label="Document Type"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="documentType"
                fullWidth
                required
                value={formData.documentType}
                onChange={handleInputChange}
                error={!!fieldErrors.documentType}
                helperText={fieldErrors.documentType}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="documentDescription"
                label="Document Description"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="documentDescription"
                fullWidth
                required
                value={formData.documentDescription}
                onChange={handleInputChange}
                error={!!fieldErrors.documentDescription}
                helperText={fieldErrors.documentDescription}
              />
            </div>
            <div className="col-md-4 mb-3">
              <FormControl variant="outlined" fullWidth size="small" error={!!fieldErrors.module}>
                <InputLabel id="module">Module</InputLabel>
                <Select
                  labelId="module"
                  id="module"
                  label="Module"
                  required
                  value={formData.module}
                  name="module"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Chennai">Chennai</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                </Select>
                {fieldErrors.module && <FormHelperText>{fieldErrors.module}</FormHelperText>}
              </FormControl>
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="subModule"
                label="Sub Module"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="subModule"
                fullWidth
                required
                value={formData.subModule}
                onChange={handleInputChange}
                error={!!fieldErrors.subModule}
                helperText={fieldErrors.subModule}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="primaryTable"
                label="Primary Table"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="primaryTable"
                fullWidth
                required
                value={formData.primaryTable}
                onChange={handleInputChange}
                error={!!fieldErrors.primaryTable}
                helperText={fieldErrors.primaryTable}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="autoGenField"
                label="Auto. Gen. Field"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="autoGenField"
                fullWidth
                required
                value={formData.autoGenField}
                onChange={handleInputChange}
                error={!!fieldErrors.autoGenField}
                helperText={fieldErrors.autoGenField}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="prefixField"
                label="Prefix Field"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="prefixField"
                fullWidth
                required
                value={formData.prefixField}
                onChange={handleInputChange}
                error={!!fieldErrors.prefixField}
                helperText={fieldErrors.prefixField}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="documentCode"
                label="Document Code"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="documentCode"
                fullWidth
                required
                value={formData.documentCode}
                onChange={handleInputChange}
                error={!!fieldErrors.documentCode}
                helperText={fieldErrors.documentCode}
              />
            </div>
          </div>
          <div className="row d-flex">
            <h5 className="mb-3">
              <u>Prefix Orders</u>
            </h5>
            <div className="col-md-4 mb-3">
              <TextField
                id="code"
                label="CODE"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="code"
                fullWidth
                required
                value={formData.code}
                onChange={handleInputChange}
                error={!!fieldErrors.code}
                helperText={fieldErrors.code}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="finyr"
                label="FINYR"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="finyr"
                fullWidth
                required
                value={formData.finyr}
                onChange={handleInputChange}
                error={!!fieldErrors.finyr}
                helperText={fieldErrors.finyr}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextField
                id="branch"
                label="BRANCH"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="branch"
                fullWidth
                required
                value={formData.branch}
                onChange={handleInputChange}
                error={!!fieldErrors.branch}
                helperText={fieldErrors.branch}
              />
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 mb-1">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="financeTransaction"
                      checked={formData.financeTransaction}
                      onChange={(e) => handleInputChange({ target: { name: 'financeTransaction', value: e.target.checked } })}
                      name="financeTransaction"
                    />
                  }
                  label="Finance Transaction"
                />
              </FormGroup>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 mb-1">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="postFinance"
                      checked={formData.postFinance}
                      onChange={(e) => handleInputChange({ target: { name: 'postFinance', value: e.target.checked } })}
                      name="postFinance"
                    />
                  }
                  label="Post Finance"
                />
              </FormGroup>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 mb-1">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{ '& .MuiSvgIcon-root': { color: '#5e35b1' } }}
                      id="noGeneration"
                      checked={formData.noGeneration}
                      onChange={(e) => handleInputChange({ target: { name: 'noGeneration', value: e.target.checked } })}
                      name="noGeneration"
                    />
                  }
                  label="Is No. Generation Based on Subtype?"
                />
              </FormGroup>
            </div>
          </div>

          <div className="row d-flex">
            <div className="col-md-4 mb-3">
              <TextField
                id="prefix"
                label="Prefix"
                placeholder="Placeholder"
                variant="outlined"
                size="small"
                name="prefix"
                fullWidth
                required
                value={formData.prefix}
                onChange={handleInputChange}
                error={!!fieldErrors.prefix}
                helperText={fieldErrors.prefix}
              />
            </div>
          </div>
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
                      <th className="px-2 py-2 text-white">Sub Type</th>
                      <th className="px-2 py-2 text-white">Subtype Code</th>
                      <th className="px-2 py-2 text-white">Subtype Name</th>
                      <th className="px-2 py-2 text-white">Month</th>
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

                        {/* <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.id}
                            onChange={(e) => setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, id: e.target.value } : r)))}
                          />
                        </td> */}
                        <td className="border px-2 py-2" style={{ width: '50px' }}>
                          <input type="text" value={`${index + 1}`} readOnly style={{ width: '100%' }} />
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
                            style={{ marginBottom: '10px' }}
                          />
                          {tableErrors[index]?.subType && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].subType}</div>
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
                                newErrors[index] = { ...newErrors[index], subTypeCode: !value ? 'Sub Type Code is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.subTypeCode ? 'error' : ''}
                            style={{ marginBottom: '10px' }}
                          />
                          {tableErrors[index]?.subTypeCode && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].subTypeCode}</div>
                          )}
                        </td>
                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.subTypeName}
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, subTypeName: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], subTypeName: !value ? 'Sub Type Name is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.subTypeName ? 'error' : ''}
                            style={{ marginBottom: '10px' }}
                          />
                          {tableErrors[index]?.subTypeName && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].subTypeName}</div>
                          )}
                        </td>
                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.month}
                            onChange={(e) => {
                              const value = e.target.value;
                              setTableData((prev) => prev.map((r) => (r.id === row.id ? { ...r, month: value } : r)));
                              setTableErrors((prev) => {
                                const newErrors = [...prev];
                                newErrors[index] = { ...newErrors[index], month: !value ? 'Month is required' : '' };
                                return newErrors;
                              });
                            }}
                            className={tableErrors[index]?.month ? 'error' : ''}
                            style={{ marginBottom: '10px' }}
                            onKeyDown={(e) => handleKeyDown(e, row)}
                          />
                          {tableErrors[index]?.month && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[index].month}</div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div className="row mt-2">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr style={{ backgroundColor: '#434AA8' }}>
                      <th className="px-2 py-2 text-white">Action</th>
                      <th className="px-2 py-2 text-white">S.No</th>
                      <th className="px-2 py-2 text-white">Sub Type</th>
                      <th className="px-2 py-2 text-white">Subtype Code</th>
                      <th className="px-2 py-2 text-white">Subtype Name</th>
                      <th className="px-2 py-2 text-white">Month</th>
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

                        <td className="border px-2 py-2">
                          <input type="text" value={`${index + 1}`} readOnly />
                        </td>
                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.subType}
                            onChange={(e) => handleChange(row.id, 'subType', e.target.value)}
                            className={tableErrors[row.id]?.subType ? 'error' : ''}
                            style={{ marginBottom: '10px' }}
                          />
                          {tableErrors[row.id]?.subType && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[row.id].subType}</div>
                          )}
                        </td>
                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.subTypeCode}
                            onChange={(e) => handleChange(row.id, 'subTypeCode', e.target.value)}
                            className={tableErrors[row.id]?.subTypeCode ? 'error' : ''}
                            style={{ marginBottom: '10px' }}
                          />
                          {tableErrors[row.id]?.subTypeCode && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[row.id].subTypeCode}</div>
                          )}
                        </td>
                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.subTypeName}
                            onChange={(e) => handleChange(row.id, 'subTypeName', e.target.value)}
                            className={tableErrors[row.id]?.subTypeName ? 'error' : ''}
                            style={{ marginBottom: '10px' }}
                          />
                          {tableErrors[row.id]?.subTypeName && (
                            <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[row.id].subTypeName}</div>
                          )}
                        </td>
                        <td className="border px-2 py-2">
                          <input
                            type="text"
                            value={row.month}
                            onChange={(e) => handleChange(row.id, 'month', e.target.value)}
                            className={tableErrors[row.id]?.month ? 'error' : ''}
                            style={{ marginBottom: '10px' }}
                            onKeyDown={(e) => handleKeyDown(e, row)}
                          />
                          {tableErrors[row.id]?.month && <div style={{ color: 'red', fontSize: '12px' }}>{tableErrors[row.id].month}</div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
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
export default DocumentType;
