import React from "react";
import SuccessfulOrder from "./components/SuccessfulOrder";
import FailedOrder from "./components/FailedOrder";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const { state } = useLocation();

  return (
    <main>
      <div>
        {state.status ? <SuccessfulOrder data={state.data} /> : <FailedOrder />}
      </div>
    </main>
  );
};

export default OrderPage;
