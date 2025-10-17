import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Madu Wisdom",
    image: assets.profile_pic,
    email: 'numericnature@gmail.com',
    Phone: '2348022131472',
    address: {
      line1: "No.xxx Area 11",
      line2: "FCT, Abuja, Nigeria"
    },
    gender: 'Male',
    dob: '1999-10-15'
  })

  const [isEdit, setEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit
          ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit
              ? <input type="text" value={userData.Phone} onChange={e => setUserData(prev => ({ ...prev, Phone: e.target.value }))} />
              : <p>{userData.Phone}</p>
          }
          <p>Address:</p>
          {
            isEdit
            ? <p>
              <input type="text" />
              <br />
              <input type="text" />
            </p>
            : <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }

        </div>
      </div>

    </div>
  )
}

export default MyProfile