import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
import CardCOntext from '../Context/CardContext';
import About from './About';
import Contact from './Contact';
import UserContext from '../Context/UserContext';
import FrontPage from './FrontPage';


const Home = () => {

  let ctx = useContext(CardCOntext)
  console.log(ctx)
  let searchCtx = useContext(UserContext)
  let searchValue = searchCtx.search

  const [products, setproducts] = useState([]);
  console.log(products)
  const [error, seterror] = useState(false);
  console.log(error)
  const [loading, setloading] = useState(false);
  // let arr = []
  const getAllData = async () => {
    setloading(true)
    try {
      let res = await axios.get('https://dummyjson.com/products?limit=0&skip=0')
      console.log(res.data.products)
      setproducts(res.data.products)
      setloading(false)
    } catch (error) {

      console.log(error)
      seterror(true)
    }
  }

  useEffect(() => {
    getAllData()
  }, [])

  // const handleAdd = (ans) => {
  //   // console.log(ans)
  //   // arr.push(ans)
  //   // console.log(arr)
  //   // let updatObj = { ...ans, quantity: 1 }
  //   // console.log(updatObj)
  //   // props.xyz(updatObj)


  // }

  const [currentPage, setcurrentPage] = useState(1);
  console.log(currentPage)
  let itmesPerPage = 10;
  let lastIndex = itmesPerPage * currentPage;
  let firstIndex = lastIndex - itmesPerPage;

  let filteredProduct = products.filter((ele) => ele.title.toLowerCase().includes(searchValue) || ele.category.toLowerCase().includes(searchValue));
  let silcedArr = filteredProduct.slice(firstIndex, lastIndex)
  console.log(silcedArr)
  let noOfButton = Math.ceil(filteredProduct.length / itmesPerPage)
  console.log(noOfButton)
  let btnArr = new Array(noOfButton).fill(0)
  // console.log(btnArr)

  // const PageIncrement = ()=>{
  //   let copycurrentPage = currentPage+1
  //   // copycurrentPage+
  //   setcurrentPage(copycurrentPage)

  // }

  const handlePrew = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1)
    }

  }
  const handleNext = () => {
    if (currentPage <= btnArr.length - 1) {
      setcurrentPage(currentPage + 1)
    }
  }


  return (
    <div >
      
      <FrontPage />
      {loading ? (
        <div className="row m-0 p-0 p-3 justify-content-center gap-3">
          {Array(6).fill(0).map(() => (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <div className="col-md-3 mb-4">
                <Skeleton
                  height={300} />
                <div className="d-flex justify-content-between">
                  <Skeleton width={100} />
                  <Skeleton width={100} />
                </div>
              </div>
            </SkeletonTheme>
          ))}
        </div>
      ) : (
        <div>
          
          <div className='row m-0 p-0 p-3 justify-content-center gap-3'>
            {
              silcedArr.map((ele) => {
                return (ele.thumbnail && <div className="card" style={{ width: '18rem' }}>
                  <img src={ele.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text"><strong>Price:</strong> {ele.price} $</p>
                    <p className="card-text"><strong>Brand:</strong> {ele.brand} $</p>
                    <p className="card-text"><strong>Rating:</strong> {ele.rating} $</p>
                    <Link to="/view" state={ele} className="btn btn-primary ">View Details</Link>
                    <button onClick={() => ctx.AddtoCart(ele)} className='btn btn-success mx-1'>Add to cart</button>
                  </div>
                </div>)
              })
            }
          </div>
          <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-center flex-wrap ">
              <li onClick={handlePrew} className="page-item disabled ">
                <a className="page-link">Previous</a>
              </li>
              {btnArr.map((ele, key) => {
                return <li onClick={() => setcurrentPage(key + 1)} className={currentPage === key + 1 ? "page-item active" : "page-item"} ><Link className='page-link rounded-5 text-dark' to="#">{key + 1}</Link></li>
              })}
              <li onClick={handleNext} className="page-item">
                <Link className="page-link" href="#">Next</Link>
              </li>
            </ul>
          </nav>

        </div>
      )}
      <About />
      <Contact />
    </div>
  )
}
export default Home