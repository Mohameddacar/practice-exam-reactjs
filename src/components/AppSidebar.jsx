import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {
  FaUsers, FaPlus, FaList, FaShoppingCart, FaClipboardList, FaBoxes,
  FaCalendarAlt, FaBook, FaCode
} from 'react-icons/fa';

const AppSidebar = () => (
  <Sidebar
    rootStyles={{
      [`.${sidebarClasses.container}`]: {
        background: '#fff',
        color: '#222',
        borderRight: '1px solid #f3f3f3',
        minHeight: '100vh',
        padding: '10px 0',
        fontWeight: 400,
      },
    }}
    width={240}
  >
    <div style={{
      padding: '12px 20px',
      fontWeight: 700,
      fontSize: 22,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: '#2463eb'
    }}>
      <FaUsers style={{ fontSize: 25, color: '#2463eb' }} />
      Pro Sidebar
    </div>
    <Menu menuItemStyles={{
      button: { color: '#222', fontWeight: 500, borderRadius: '8px', margin: '4px 2px', },
      label: { fontWeight: 500 }
    }}>
      <SubMenu label="User" icon={<FaUsers />}>
        <MenuItem icon={<FaList />} component={<Link to="/User/view" />}>View Users</MenuItem>
      </SubMenu>
      <SubMenu label="Customer" icon={<FaUsers />}>
        <MenuItem icon={<FaPlus />} component={<Link to="/customer/add" />}>Add Customer</MenuItem>
        <MenuItem icon={<FaList />} component={<Link to="/customer/view" />}>View Customers</MenuItem>
      </SubMenu>
      <SubMenu label="Order" icon={<FaShoppingCart />}>
        <MenuItem icon={<FaPlus />} component={<Link to="/order/add" />}>Add Order</MenuItem>
        <MenuItem icon={<FaClipboardList />} component={<Link to="/order/view" />}>View Orders</MenuItem>
      </SubMenu>
      <SubMenu label="Category" icon={<FaBoxes />}>
        <MenuItem icon={<FaPlus />} component={<Link to="/category/add" />}>Add Category</MenuItem>
        <MenuItem icon={<FaList />} component={<Link to="/category/view" />}>View Categories</MenuItem>
      </SubMenu>
      <MenuItem icon={<FaCalendarAlt />} component={<Link to="/calendar" />}>Calendar</MenuItem>
      <MenuItem icon={<FaBook />} component={<Link to="/documentation" />}>Documentation</MenuItem>
      <MenuItem icon={<FaCode />} component={<a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank" rel="noopener noreferrer" />}>
        View Code
      </MenuItem>
    </Menu>
  </Sidebar>
);

export default AppSidebar;