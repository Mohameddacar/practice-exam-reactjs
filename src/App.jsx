import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout"; // adjust the import as needed
import Home from "./pages/Home";
import AddCustomer from "./pages/AddCustomer";
import ViewCustomers from "./pages/ViewCustomers";
import AddOrder from "./pages/AddOrder";
import ViewOrders from "./pages/ViewOrders";
import AddCategory from "./pages/AddCategory";
import ViewCategories from "./pages/ViewCategories";
import ViewUsers from "./pages/ViewUsers";
// ... other imports

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in RootLayout */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />      {/* HOME ROUTE */}
          <Route path="/User/view" element={<ViewUsers />} />
          <Route path="/customer/add" element={<AddCustomer />} />
          <Route path="/customer/view" element={<ViewCustomers />} />
          <Route path="/order/add" element={<AddOrder />} />
          <Route path="/order/view" element={<ViewOrders />} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/category/view" element={<ViewCategories />} />
          {/* ...other routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;