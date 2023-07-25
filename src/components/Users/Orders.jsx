import React, { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getadminOrders, processOrders } from "../../redux/actions/admin";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast"

const Orders = () => {
  const dispatch = useDispatch();
  const { order, loading,message,error } = useSelector((state) => state.admin);

  useEffect(() => {
    if(message)
    {
      toast.success(message)
      dispatch({type:"clearMessage"})
    }
    if(error)
    {
      toast.error(error)
      dispatch({type:"clearError"})
    }
    dispatch(getadminOrders());
  }, [dispatch,message,error]);

  const processOrder = (id) => {
    dispatch(processOrders(id));
  };
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
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {order?.map((item) => (
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
                  <td>{item.user.name}</td>
                  <td>
                    <Link to={`/order/${item._id}`}>
                      <AiOutlineEye />
                    </Link>

                    <button onClick={() => processOrder(item._id)}>
                      <GiArmoredBoomerang />
                    </button>
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

export default Orders;
