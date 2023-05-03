const API_UL = "http://localhost:3000/v1";

const submitLogin = async (data) => {
  return await fetch(`${API_UL}/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export { submitLogin };
