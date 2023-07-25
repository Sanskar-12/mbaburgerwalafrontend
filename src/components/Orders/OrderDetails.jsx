import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getOrderDetails } from '../../redux/actions/order'
import {useParams} from "react-router-dom"
import Loader from "../Loader/Loader"
const OrderDetails = () => {
    const dispatch=useDispatch()
    const params=useParams()

    const {order,loading}=useSelector(state=>state.getorder)
    useEffect(()=>{
        dispatch(getOrderDetails(params.id))
    },[dispatch,params.id])
  return (
    <section className='orderdetails'>
        {
            loading ===false ? <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {`${order?.shippingInfo.hno} ${order?.shippingInfo.city} ${order?.shippingInfo.state} ${order?.shippingInfo.country} ${order?.shippingInfo.pincode}`}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {order?.user.name}
                </p>
                <p>
                    <b>Phone</b>
                    {order?.shippingInfo.phoneno}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {order?.orderStatus}
                </p>
                <p>
                    <b>Placed At</b>
                    {order?.createdAt.split("T")[0]}
                </p>
                <p>
                    <b>Delivered At</b>
                    {order?.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Methods</b>
                    {order?.paymentMethod}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {order?.paymentMethod==="Online" ? `#${order?.paymentInfo}`: "NA"}
                </p>
                <p>
                    <b>Paid At</b>
                    {order?.paymentMethod==="Online" ? order?.paidAt.split("T")[0]: "NA"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Item Total</b>
                    ₹{order?.itemsPrice}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    ₹{order?.taxPrice}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{order?.shippingCharges}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{order?.totalAmount}
                </p>
            </div>
            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{order?.orderItems?.cheeseBurger?.quantity}</span> x <span>{order?.orderItems?.cheeseBurger?.price}</span>
                    </div>
                </div>
                <div>
                    <h4>Chicken Cheese Burger</h4>
                    <div>
                        <span>{order?.orderItems?.chickenCheeseBurger?.quantity}</span> x <span>{order?.orderItems?.chickenCheeseBurger?.price}</span>
                    </div>
                </div>
                <div>
                    <h4>Mac Whooper Burger</h4>
                    <div>
                        <span>{order?.orderItems?.macWhooperburger?.quantity}</span> x <span>{order?.orderItems?.macWhooperburger?.price}</span>
                    </div>
                </div>
                <div>
                    <h4 style={{
                        fontWeight:800
                    }}>Sub Total</h4>
                    <div style={{
                        fontWeight:800
                    }}>
                    ₹{order?.itemsPrice}
                    </div>
                </div>
            </article>
        </main> : <Loader/>
        }
    </section>
  )
}

export default OrderDetails
