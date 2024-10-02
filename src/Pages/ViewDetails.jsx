import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CardCOntext from '../Context/CardContext';

const ViewDetails = () => {
  let ctx = useContext(CardCOntext)
  let location = useLocation();
  let product = location.state
  console.log(product)
  return (
    <div >
      <div className="row m-0 p-0 ">
      <Link to="/" className=' mx-5'> - Go Back </Link>
        <div className="col-md-6  d-flex justify-content-center ">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="col-md-6 p-5 mt-4  rounded-5 ">
          <h3><strong>Title : </strong>  {product.title}</h3>
          <h4 className='my-4'><strong>Brand : </strong>  {product.brand}</h4>
          <h5><strong>Category:</strong>  {product.category}</h5>
          <p className='my-4'><strong>Rating : </strong>{product.rating}</p>
          <p className='my-4'><strong>Warranty : </strong>{product.warrantyInformation}</p>
          <p className='my-4'><strong>Discount : </strong>{product.discountPercentage} %</p>
          <p><strong>Description : </strong>{product.description} </p>
          <Link to="/cart"  onClick={() => ctx.AddtoCart(product)} className="btn btn-warning rounded-5 btn-outline-dark  mx-3"><h6>Add to cart</h6></Link>



        </div>

      </div>
      <div className='col-md-12 rounded text text-center '>
          <h1>Reviews</h1>

          <div className=' w-50 m-auto rounded p-2 text-center ps-4'>

            {
              product.reviews.map((ele) => {
                let star = "";
                let trap = Math.ceil(ele.rating)
                for (let i = 1; i <= trap; i++) {

                  star += "⭐"
                }
                return <div>
                  <h5>Reviewer Name : {ele.reviewerName}</h5>
                  <h6> rating : {star}</h6>
                  <h6> Comment : {ele.comment}</h6>
                </div>
              })
            }
          </div>

        </div>

    </div>
  )
}

export default ViewDetails