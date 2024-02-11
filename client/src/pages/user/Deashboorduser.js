import React from 'react'
import {  Link , Outlet} from "react-router-dom";
function Deashboorduser() {
  return (
    <div style={{height:"100vh"}} className='m-2 '>
              <div className="container">
            <div class="row m-5">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <Link class="list-group-item list-group-item-action " id="list-home-list" data-bs-toggle="list" to="" role="tab" aria-controls="list-home">Profile</Link>
                        <Link class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" to="/deshboard/user/order" role="tab" aria-controls="list-profile">Orders</Link>
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Deashboorduser