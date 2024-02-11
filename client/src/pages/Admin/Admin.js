import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link, Outlet} from "react-router-dom";
function Admin() {
  return (
    <div  className='m-2 '>
      <Nav justify variant="tabs" className='deshbordadmin'>
      <Nav.Item>
        <Link eventKey="link-1" to="" className="nav-link m-1"><i className="fas fa-sharp fa-user"></i> Profile</Link>
      </Nav.Item>
      <Nav.Item>
        <Link eventKey="link-2" to="/deshboard/admin/order" className="nav-link m-1"><i className="fas fa-sharp fa-list"></i>  Order</Link>
      </Nav.Item>
      <Nav.Item>
        <Link eventKey="link-3" to="/deshboard/admin/product" className="nav-link"><i className="fas fa-box"></i> Products</Link>
      </Nav.Item>
      <Nav.Item>
        <Link eventKey="link-3" to="/deshboard/admin/user" className="nav-link m-1"><i className="fas fa-sharp fa-users"></i> Users</Link>
      </Nav.Item>
      <Nav.Item>
        <Link eventKey="link-3" to="/deshboard/admin/chart" className="nav-link m-1"><i className="fas fa-chart-line"></i> Charts</Link>
      </Nav.Item>
    </Nav>
    <Outlet />
    
    </div>
  )
}

export default Admin