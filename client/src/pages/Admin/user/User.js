import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function User() {
  const [user, setUser] = useState([]);
  const API = "http://localhost:8000/api/v1/auth";


  useEffect(() => {
    Axios.get(`${API}/showuser`)
      .then(res => { setUser(res.data) })
  }, [user])
  let i=1;
  return (
    <div className='container m-5'>
      <div className='row'>
        <h3><i className="fas fa-sharp fa-users"></i> Show All Users</h3>
        <hr></hr>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" >Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col " className='text-danger'>Delete User</th>
              <th scope="col" className='text-success'>Edit User</th>
            </tr>
          </thead>
          <tbody>
            {user.map(user => {
              return (
                <tr key={user._id}  >
                  <th scope="row">{i++}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>
                    <form>
                      <input type='text' value={user._id} name='iduser' style={{display:'none'}}/>
                      <button type="submit" class="btn btn-danger"><i className="fas fa-sharp fa-user-minus"></i> Delete</button>
                    </form>
                    </td>
                  <td>
                  <form>
                      <input type='text' value={user._id} name='iduser' style={{display:'none'}}/>
                      <button type="submit" class="btn btn-success" ><i className="fas  fa-pen"></i> Edit</button>
                    </form>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User
