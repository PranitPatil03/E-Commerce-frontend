import React from "react";
import Navbar from "../features/navbar/Navbar";
import AdminProductDetail from "../features/admin/components/AdminProductDetails";

function AdminProductDetailsPage() {
  return (
    <div>
      <Navbar>
        <AdminProductDetail />
      </Navbar>
    </div>
  );
}

export default AdminProductDetailsPage    ;
