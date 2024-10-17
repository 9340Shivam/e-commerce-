import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import logo from '../ecom.png'
import CardCOntext from '../Context/CardContext'
import UserContext from '../Context/UserContext'

import Profile from './Profile'


const Navbar = () => {
  let ctx = useContext(CardCOntext)
  let userStore = useContext(UserContext)
  let login = userStore.userData.login
  console.log(login)

  const [searchValue, setsearchValue] = useState("");
  const handleLogout = () => {
    setsearchValue("")
    userStore.setsearch("")
    localStorage.removeItem('userDetails')
    userStore.setuserData({ login: false, email: '' })
  }

  const handleSearchChanger = (e) => {
    setsearchValue("")
    setsearchValue(e.target.value)
    userStore.setsearch(e.target.value.toLowerCase())
  }
  
  let profile = document.querySelector('.profile')

  let flag = true
  const handleProfile = (e) => {
    e.preventDefault()
    if (flag) {
      profile.style.display = 'block'
      flag = false
    } else {
      profile.style.display = 'none'
      flag = true
    }

  }
  // props
  return (
    <div className='position-relative'>

      <nav className="navbar navbar-expand-lg  fixed-top text-dark  bg-white ">
        <div className="container-fluid ">
          {login === true &&<Link onClick={handleProfile} className="nav-link active text-dark fs-1 navImage" aria-current="page" to="#"><img src="https://i.imgur.com/bDLhJiP.jpg" style={{ width: '50px', height: '50px' }} className="rounded-circle" alt="" /></Link>}

          <Link className="navbar-brand text-white mx-5" to="#"><img className='Navbar navLogo' src={logo} alt='snd' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">

            <form className="d-flex ms-auto mt-4 mt-md-auto " role="search">
              <input value={searchValue} onChange={handleSearchChanger} className="form-control me-2 border-1 border-dark opacity-75" type="search" placeholder="Search" aria-label="Search" />
              {/* value={searchValue} */}
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <div className='ms-auto d-flex justify-content-md-evenly align-content-center'>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5 gap-3 ">

                {login === true && <li className="nav-item ">
                  <Link className="nav-link active text-dark " aria-current="page" to="/"><b>Home</b></Link>
                </li>}
                {login === true && <li className="nav-item ">
                  <Link className="nav-link active text-dark " aria-current="page" to="/about"><b>About</b></Link>
                </li>}


                {login === true && <li className="nav-item ">
                  <Link className="nav-link active text-dark" aria-current="page" to="/contact"><b>Contact</b></Link>
                </li>}
                {/* <li className="nav-item ">
                  <Link className="nav-link active text-dark" aria-current="page" to="/contact"><b>servise</b></Link>
                </li> */}
                {login === true && <li className="nav-item ">
                  <Link className="nav-link active text-dark" aria-current="page" to="/cart"><b> 🛒 Cart </b><sup >{ctx.cartArr.length}</sup></Link>
                </li>}
                {login === false && <li className="nav-item ">
                  <Link className="nav-link active text-dark" aria-current="page" to="/login"><b>Login</b></Link>
                </li>}
                {login === false && <li className="nav-item ">
                  <Link className="nav-link active text-dark" aria-current="page" to="/sign"><b>SignUp</b></Link>
                </li>}

                {login === true && <li className="nav-item ">
                  <Link onClick={handleLogout} className="nav-link active text-dark" aria-current="page" to="#"><b>LogOut</b></Link>
                </li>}

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='profile'>
        <Profile />
      </div>
    </div>
  )
}

export default Navbar