import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getmyOrders } from "../../redux/actions/order";
import Loader from "../Loader/Loader";

const Myorders = () => {
  const { orders, loading, error } = useSelector((state) => state.getorder);
  const dispatch = useDispatch();
  useEffect(() => {
    if(error)
    {
        dispatch({
            type:"clearError"
        })
    }
    dispatch(getmyOrders());
  }, [dispatch,error]);
  return (
    <section className="tableClass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((item) => (
                <tr key={item._id}>
                  <td>#{item._id}</td>
                  <td>{item.orderStatus}</td>
                  <td>
                    {item.orderItems.cheeseBurger.quantity +
                      item.orderItems.chickenCheeseBurger.quantity +
                      item.orderItems.macWhooperburger.quantity}
                  </td>
                  <td>₹{item.totalAmount}</td>
                  <td>{item.paymentMethod}</td>
                  <td>
                    <Link to={`/order/${item._id}`}>
                      <AiOutlineEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Myorders;
