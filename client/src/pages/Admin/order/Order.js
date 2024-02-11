import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Order() {
  return (
    <div className="container">
    <div class="row m-5">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <Link class="list-group-item list-group-item-action " id="list-home-list" data-bs-toggle="list" to="" role="tab" aria-controls="list-home"><i className="fas fa-sharp fa-list"></i> Show All Orders</Link>
                <Link class="list-group-item list-group-item-action bg-danger" id="list-profile-list" data-bs-toggle="list" to="/deshboard/admin/order/waiting" role="tab" aria-controls="list-profile"><i class="fas fa-hourglass-start"></i> Wait Orders</Link>
                <Link class="list-group-item list-group-item-action bg-warning" id="list-profile-list" data-bs-toggle="list" to="/deshboard/admin/order/processing" role="tab" aria-controls="list-profile"><i class="fas  fa-recycle"></i> Process Orders</Link>
                <Link class="list-group-item list-group-item-action bg-success" id="list-profile-list" data-bs-toggle="list" to="/deshboard/admin/order/finshing" role="tab" aria-controls="list-profile"><i class="fas fa-clipboard-list"></i>  Finsh Orders</Link>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <Outlet />
            </div>
        </div>
    </div>
</div>
  )
}

export default Order