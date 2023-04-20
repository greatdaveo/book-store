export async function getProductList(searchTerm) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?name_like=${
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
    `${process.env.REACT_APP_HOST}/444/products/${id}`
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  return data;
}

export async function getFeaturedList() {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  return data;
}
