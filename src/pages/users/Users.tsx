
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const Users = () => {
  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "noavatar.png"} alt="" />;
      },
    },
    { field: "status", headerName: "Status", width: 100, type: "boolean" },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button type="button" onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="users" columns={columns} setOpen={setOpen}/>}
    </div>
  );
};

export default Users;
