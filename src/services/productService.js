export async function getProductList(searchTerm) {
  const response = await fetch(
    `https://bookstore-server-2eky.onrender.com/444/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  return data;
}

export async function getProduct(id) {
  const response = await fetch(
    `https://bookstore-server-2eky.onrender.com/444/products/${id}`
  );

  console.log(process.env);

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  return data;
}

export async function getFeaturedList() {
  const response = await fetch(
    `https://bookstore-server-2eky.onrender.com/444/featured_products`
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  return data;
}
