import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Product() {
  return (
    <div className="container">
    <div class="row m-5">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <Link class="list-group-item list-group-item-action " id="list-home-list" data-bs-toggle="list" to="" role="tab" aria-controls="list-home"><i className="fas fa-box"></i>  Show Products</Link>
                <Link class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" to="/deshboard/admin/product/createproduct" role="tab" aria-controls="list-profile"><i className="fas fa-pen"></i>  Create Products</Link>
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

export default Product
