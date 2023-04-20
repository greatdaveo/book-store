import React from "react";
import "../../styles/pages/DashBoard/DashBoardPage.css";
import { useState, useEffect } from "react";
import DashboardCard from "../../pages/Dashboard/components/DashboardCard";
import EmptyDashboard from "../../pages/Dashboard/components/EmptyDashboard";

// This is the getUserOrders from dataService
import { getUserOrders } from "../../services/dataService";

const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const data = await getUserOrders();
      setOrders(data);
    }
    fetchOrders();
  }, []); //eslint-disable-line

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
