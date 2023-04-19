import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ order }) => {
  return (
    <div>
      <div>
        <span>Order Id: {order.id}</span>
        <span>Total: ${order.amount_paid}</span>
      </div>
      {order.cartList.map((product) => (
        <div key={product.id}>
          <div>
            <Link to={`/products/${product.id}`}>
              <img src={product.poster} alt={product.name} />
            </Link>
            <div className="">
              <Link to={`/products/${product.id}`}>
                <p>{product.name}</p>
              </Link>
              <div>
                <span>${product.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
