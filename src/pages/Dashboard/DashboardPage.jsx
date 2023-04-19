import React from "react";
import "../../styles/pages/DashBoard/DashBoardPage.css";
import { useState, useEffect } from "react";
import DashboardCard from "../../pages/Dashboard/components/DashboardCard";
import EmptyDashboard from "../../pages/Dashboard/components/EmptyDashboard";

const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  // FOR THE TOKEN
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userID = JSON.parse(sessionStorage.getItem("userID"));

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(
        `http://localhost:8000/660/orders?user.id=${userID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <main className="dashboard-page">
      <section>
        <p>My DashBoard</p>
      </section>

      <section>
        <div>
          {orders.length &&
            orders.map((order) => (
              <DashboardCard key={order.id} order={order} />
            ))}
        </div>
      </section>

      <section>{!orders.length && <EmptyDashboard />}</section>
    </main>
  );
};

export default DashboardPage;
