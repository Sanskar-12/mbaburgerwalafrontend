import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux"
import { getadminStats } from "../../redux/actions/admin";

ChartJs.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => {
  return (
    <div>
      {title === "Income" ? <h3>₹{value}</h3> : <h3>{value}</h3>}
      <p>{title}</p>
    </div>
  );
};

const AdminDashboard = () => {
  const dispatch=useDispatch()
  
  const {loading,totalusers,ordersCount,totalIncome}=useSelector(state=>state.admin)
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "No of Orders",
        data: ordersCount? [ordersCount.preparing,ordersCount.shipping,ordersCount.delivered]:[0,0,0],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(()=>{
    dispatch(getadminStats())
  },[dispatch])
  return (
    <section className="dashboard">
      {loading === false ? (
        <main>
          <article>
            <Box title={"Users"} value={totalusers} />
            <Box title={"Orders"} value={ordersCount.total} />
            <Box title={"Income"} value={totalIncome} />
          </article>
          <section>
            <div>
              <Link to={"/admin/orders"}>View Orders</Link>
              <Link to={"/admin/users"}>View Users</Link>
            </div>

            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default AdminDashboard;
