import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Sign = () => {
  let arr  =JSON.parse(localStorage.getItem('ecomSigunup')) || []
  let nameref = useRef()
  let emailref = useRef()
  let passwordref = useRef()
  let navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    let obj ={
      name:nameref.current.value,
      email:emailref.current.value,
      password:passwordref.current.value,

    }
    console.log(obj)

    if(!obj.name){
     return toast.error("name is required",{position:"top-center"})
    }
    if(!obj.email){
     return toast.error("email is required",{position:"top-center"})
    }
    if(!obj.password){
     return toast.error("password is required",{position:"top-center"})
    }
    let checkUser = arr.find((item)=>item.email===obj.email);
    if(checkUser){
      toast.error('user already exists',{
       position:'top-center' 
      })
    }else{
      arr.push(obj)
      localStorage.setItem('ecomSigunup',JSON.stringify(arr))
      navigate('/login')
      toast.success("user registered successfull",{position:'top-center'})
    }
  }
  return (
    <div >
    <section className="vh-81 mt-5" style={{backgroundColor: '#eee'}}>
  <div className="container h-100 my-5 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25 , marginTop:"50px", marginBottom:"30px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input ref={nameref} type="text" id="form3Example1c" className="form-control border-dark-subtle" placeholder='Enter Your Name' />
                      <label className="form-label pt-1" htmlFor="form3Example1c" >Your Name <span className="text-danger">*</span></label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input ref={emailref} type="email" id="form3Example3c" className="form-control border-dark-subtle" placeholder="Enter Your Email" />
                      <label className="form-label pt-1" htmlFor="form3Example3c">Your Email <span className="text-danger">*</span> </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input ref={passwordref} type="password" id="form3Example4c" className="form-control border-dark-subtle" placeholder="Enter Your Email"/>
                      <label className="form-label pt-1" htmlFor="form3Example4c">Password </label>
                    </div>
                  </div>
                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2 border-dark-subtle" type="checkbox" defaultValue id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
              <p className='text-center my-2'>Already a user? <Link to={'/login'}>Login</Link></p>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link navigate="/login" onClick={handleSubmit}  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg">Register</Link>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
                <img src="https://wallpapers.com/images/hd/e-commerce-pictures-mxicxzb5ysgpep7w.jpg" className="img-fluid " alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Sign
