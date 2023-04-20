function getSession() {
  // The Token
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userID = JSON.parse(sessionStorage.getItem("userID"));

  return { token, userID };
}

// FOR getUser
export async function getUser() {
  const browserData = getSession();

  //   For requestOptions
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `http://localhost:8000/600/users/${browserData.userID}`,
    requestOptions
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  //   console.log(data);

  return data;
}

// For getUserOrders
export async function getUserOrders() {
  const browserData = getSession();

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `http://localhost:8000/660/orders?user.id=${browserData.userID}`,
    requestOptions
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();

  return data;
}

// For createOrder
export async function createOrder(cartList, totalPrice, user) {
  const browserData = getSession();

  const order = {
    cartList: cartList,
    amountPaid: totalPrice,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  };

  const response = await fetch(
    "http://localhost:8000/660/orders",
    requestOptions
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  //   console.log(data);

  return data;
}
