import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Pnf from './Pages/Pnf';
import Sign from './Pages/Sign';
import Login from './Pages/Login';
// import { Contact } from 'lucide-react';
import ViewDetails from './Pages/ViewDetails';
import Demo from './Pages/Demo';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import { useContext } from 'react';
import UserContext from './Context/UserContext';
import Pay from './Pages/Pay';
import Profile from './Components/Profile';

function App() {
  // const [cartArr, setcartArr] = useState([]);
  // console.log(cartArr)

  // function xyz(ans){
  //   let checkData = cartArr.find((ele) =>ele.id ===ans.id)
  //   if (checkData) {
  //     toast.info('already added to the cart',{position:"top-center",theme:"dark"})
  //   }
  //   else{

  //     setcartArr([...cartArr,ans])
  //     toast.success("add to the cart",{position:"top-center",theme:"dark"})
  //   }
  // }

  let ctx = useContext(UserContext)
  console.log(ctx)
  let login = ctx.userData.login

  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ marginBottom: "75px" }}>
          <Navbar />
        </div>
        {/* cartArr={cartArr} */}

        <Routes>
          <Route path='/' element={login === true ?<Home />:<Navigate to="/login"/>}/>
          {/* xyz={xyz} */}
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={login === false ?<Login />: <Navigate to="/" />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/cart' element={<Cart />} />
          {/* cartArr={cartArr} setcartArr={setcartArr}  */}
          <Route path='/view' element={<ViewDetails />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/pay' element={<Pay />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<Pnf />} />
         
        </Routes>
        {/* <ToastContainer/> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;