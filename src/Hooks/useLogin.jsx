import { useCallback, useContext, useState } from "react";
import Context from "./Context";

const useLogin = () => {
  const url = "http://localhost:3000/v1/test";
  const [data, setData] = useState([]);
  const { setLoading, user } = useContext(Context);
  console.log("useLogin", user);
  const fetchData = async () => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resdata = await response.json();
    setData(resdata);
    setLoading(false);
    console.log("response", resdata);
  };

  setLoading(false);
  useCallback(() => {
    fetchData();
  }, []);

  return data;
};
export default useLogin;
