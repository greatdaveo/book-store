import React from "react";
import "../../../styles/pages/DashBoard/DashBoardCard.css";
import { Link } from "react-router-dom";

const DashboardCard = ({ order }) => {
  return (
    <div className="dashboard-card">
      <div>
        <span>Order Id: {order.id}</span>
        <span>Total: ${order.amountPaid}</span>
      </div>

      <div>
        {order.cartList.map((product) => (
          <div key={product.id} className="dashboard-card-details">
            <div>
              <Link to={`/products/${product.id}`}>
                <img src={product.poster} alt={product.name} />
              </Link>
              <div>
                <Link to={`/products/${product.id}`}>
                  <p>{product.name}</p>
                </Link>
                <span>${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;
