import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
    return (
        <div className="container">
            <div class="row m-5">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <Link class="list-group-item list-group-item-action " id="list-home-list" data-bs-toggle="list" to="" role="tab" aria-controls="list-home"><i className="fas fa-sharp fa-user"></i>  Info Admin</Link>
                        <Link class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" to="/deshboard/admin/editprofile" role="tab" aria-controls="list-profile"><i className="fas fa-pen"></i>  Edit Info Admin</Link>
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

export default Profile
