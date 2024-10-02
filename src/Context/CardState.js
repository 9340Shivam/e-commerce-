import React, { useState } from 'react'
import CardCOntext from './CardContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardState = (props) => {
    const [cartArr, setcartArr] = useState([]);
    function AddtoCart(ans) {
        let findData = cartArr.find((ele) => ele.id === ans.id)
        if (findData) {
            // alert('alredy exitis')
            toast.info('already added to the cart', { position: "top-center", theme: "dark" })

        } else {let updateObj = {...ans, 
            quantity:1}

            setcartArr([...cartArr, updateObj])
            toast.success("add to the cart", { position: "top-center", theme: "dark" })

        }
        console.log(findData)
    }
  
    return (
        <CardCOntext.Provider value={{ cartArr, setcartArr, AddtoCart }}>
            {props.children}
            <ToastContainer />
        </CardCOntext.Provider>


    )
}

export default CardState
