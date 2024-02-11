import React from 'react'

function ProfileUser() {
    return (
        <div className='container'>
            <div className='row'>
                <h3>Profile</h3>
                <hr></hr>
                <div className='row'>
                    <div className='col md-3 text-center'>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886082_200x200_1X._CB577290887_.jpg" class="img-fluid" alt="Admin Photo" />
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col md-3 text-center'>
                        <input type='text' className='form-control' value={"Ahmed"} disabled />
                    </div>
                    <div className='col md-3 text-center'>
                        <input type='text' className='form-control' value={"Sabry"} disabled />
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col md-3 text-center'>
                        <input type='text' className='form-control' value={"ahmedsabrymahmoud@gmail.com"} disabled />
                    </div>
                    <div className='col md-3 text-center'>
                        <input type='text' className='form-control' value={"Qena"} disabled />
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col md-3 text-center'>
                        <input type='text' className='form-control' value={"01098583817"} disabled />
                    </div>
                    <div className='col md-3 text-center'>
                        <input type='text' className='form-control' value={"Nane"} disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser
