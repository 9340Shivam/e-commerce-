import React, { useContext } from 'react'
import CardCOntext from '../Context/CardContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Cart = () => {
    let ctx = useContext(CardCOntext)

    let updatedObj = { ...ctx.cartArr }


    const handleIncrement = (ans, i) => {
        let updatedObj = {
            ...ans,
            quantity: ans.quantity + 1,
            price: ans.price + (ans.price / ans.quantity)

        }
        console.log(updatedObj)
        let copyArr = [...ctx.cartArr]
        // console.log(copyArr)
        copyArr[i] = updatedObj
        ctx.setcartArr(copyArr)
    }
    const handleDecrement = (ans, i) => {
        if (ans.quantity <= 1) {
            return
        }
        let updatedObj = {
            ...ans,
            quantity: ans.quantity - 1,
            price: ans.price - (ans.price / ans.quantity)

        }
        console.log(updatedObj)
        let copyArr = [...ctx.cartArr]
        // console.log(copyArr)
        copyArr[i] = updatedObj
        ctx.setcartArr(copyArr)
    }

    const handleRemove = (ans, i) => {
        console.log(ans, i)
        let copyArr = [...ctx.cartArr]
        copyArr.splice(i, 1)
        ctx.setcartArr(copyArr)
        toast.info('Remove to the cart', { position: "top-center", theme: "dark" })

    }
    let totalDiscount = 0
    let sum = 0;
    ctx.cartArr.forEach((ele) => {
        sum = sum + ele.price
        let discount = ele.price * ele.discountPercentage / 100;
        totalDiscount = totalDiscount + discount
    })



    // console.log(props.cartArr)

    // const handleRemove = (obj, i) => {

    //     console.log(obj, i)
    //     let copyArr = [...props.cartArr]
    //     copyArr.splice(i, 1)
    //     props.setcartArr(copyArr)

    // }

    // let sum = 0;
    // props.cartArr.forEach((ele) => {
    //     sum = sum + ele.price
    // })

    // const handleIncrement = (obj, i) => {
    //     // console.log(obj, i)
    //     let updatedObj = {
    //         ...obj,
    //         quantity: obj.quantity + 1,
    //         price: obj.price + (obj.price / obj.quantity)


    //     }
    //     console.log(updatedObj)
    //     let copyArr = [...props.cartArr]
    //     // console.log(copyArr)
    //     copyArr[i]= updatedObj
    //     props.setcartArr(copyArr)

    // }

    // const handleDecrement = (obj,i) => {
    //     if (obj.quantity<=1) {
    //         return
    //     }
    //     let updatedObj = {
    //         ...obj,
    //         quantity: obj.quantity - 1,
    //         price: obj.price - (obj.price / obj.quantity)

    //     }
    //     console.log(updatedObj)
    //     let copyArr = [...props.cartArr]
    //     // console.log(copyArr)
    //     copyArr[i]= updatedObj
    //     props.setcartArr(copyArr)
    // }
    // console.log(sum)


    return (
        <div className='mt-5  '>
            <table className="table  container">
                <thead>
                    <tr >
                        <th scope="col" key={ctx.i}>S.no</th>
                        <th scope="col">Product</th>
                        <th scope="col">Title</th>
                        <th scope="col">Qauntity</th>
                        <th className='m-auto' scope="col">Price</th>
                        <th className='m-auto' scope="col">Discount</th>
                        <th scope="col">RemoveItems</th>
                    </tr>
                    <Link to="/" >Go to home -</Link>
                </thead>
                <tbody >
                    {
                        ctx.cartArr.map((ele, index) => {
                            return <tr className='' >
                                <th className='py-5' scope="row">{index + 1}</th>
                                <td >{<img src={ele.thumbnail} alt='' height={'150'} width={'150'} />}</td>
                                <td className='py-5'>{ele.title}</td>
                                <td className='py-5 '><button onClick={() => { handleDecrement(ele, index) }}>-</button>{ele.quantity}<button onClick={() => { handleIncrement(ele, index) }}> + </button></td>
                                <td className='py-5'>{Math.ceil(ele.price)} $</td>
                                <td className='py-5'>{Math.ceil(ele.discountPercentage)} %</td>
                                <td ><button className="btn btn-dark rounded-5 mt-5 ml-3 " onClick={() => { handleRemove(ele, index) }} >Remove</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
            <div className='d-flex justify-content-center gap-4'>
                <div className=' text-center  fs-5 '>
                    <button className='rounded-4 bg-light mb-3'> Total Price : {Math.ceil(sum)} $</button>
                </div>
                <div className=' text-center  fs-5 '>
                    <button className='rounded-4 bg-light mb-3  '><Link to='/pay' className='text-dark text-decoration-none'>Buy Now </Link> </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
