export async function login(authDetails) {
  // This is for the JSON request options for LoginPage
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetails),
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    requestOptions
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  // console.log(data);

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("userID", JSON.stringify(data.user.id));
  }
  return data;
}

// FOR SignUpPage
export async function register(authDetail) {
  // This is for the JSON request options
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetails),
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/register`,
    requestOptions
  );

  //   console.log(response);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  // console.log(data);

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("userID", JSON.stringify(data.user.id));
  }

  return data;
}

// FOR DROP DOWN LOGIN
export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userID");
}
