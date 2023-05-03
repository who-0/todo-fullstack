import { useState, useEffect } from "react";
import { submitLogin } from "./request";
const useLogin = (data) => {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const fetchData = async (data) => {
    const res = await submitLogin(data);
    console.log("res", res);
    setLoading(false);
    setApiData(res);
  };
  useEffect(() => {
    fetchData(data);
  }, [data]);

  return { loading, apiData };
};

export default useLogin;
