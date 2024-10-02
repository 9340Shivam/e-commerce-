
import React, { useState } from 'react'
import UserContext from './UserContext'
const UserState = (props) => {

  const [search, setsearch] = useState("");
  
    let details = JSON.parse(localStorage.getItem("userDetails"))
    const [userData, setuserData] = useState({
        login: details ? details.login: false,
        email:details? details.email: ""
    });

  return (

    <UserContext.Provider value={{userData,setuserData,search,setsearch}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
