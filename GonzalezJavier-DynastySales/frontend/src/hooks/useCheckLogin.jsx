import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserLogin from "../global/useUserLogin";

const useCheckLogin = () => {
  const { isLogged, user } = useUserLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, []);

  return {
    isLogged,
    user,
  };
};

export default useCheckLogin;
