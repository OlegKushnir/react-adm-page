import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Image",
    width: 60,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    minWidth: 50,
    maxWidth: 200,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 60,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    minWidth: 50,
    maxWidth: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    minWidth: 50,
    maxWidth: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    minWidth: 50,
    maxWidth: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 80,
    type: "boolean",
  },
];
const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button type="button" onClick={() => setOpen(true)}>
          Add New Product
        </button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
