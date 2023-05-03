import { useState, useCallback } from "react";
import { submitLogin } from "./request";
const useLogin = (data) => {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  useCallback(async () => {
    const res = await submitLogin(data);
    console.log("res", res);
    setLoading(false);
    setApiData(res);
  }, [data]);
  return { loading, apiData };
};

export default useLogin;
