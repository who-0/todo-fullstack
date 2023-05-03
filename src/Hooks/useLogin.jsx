import { useState, useEffect, useCallback } from "react";
import { submitLogin } from "./request";
const useLogin = (data) => {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const fetchData = async (data) => {
    console.log("fetching");
    const res = await submitLogin(data);
    console.log("res", res);
    setApiData(res);
    setLoading(false);
  };
  const submitUser = useCallback(() => {
    fetchData(data);
  });

  return { loading, apiData };
};

export default useLogin;
