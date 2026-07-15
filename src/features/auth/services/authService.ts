
import type { LoginFormData } from "../schemas/loginSchema";
import type { RegisterFormData } from "../schemas/registerSchema";
import api from "./api";

export const login = async (data: LoginFormData) => {
  const response = await api.post(
    "http://localhost:4000/auth/login",
    data
  );

  return response.data;
};

export const register = async (data: RegisterFormData) => {
  const response = await api.post(
    "http://localhost:4000/auth/register",
    data
  );

  return response.data;
};

export const refresh = async(
 refreshToken:string
)=>{
 const response = await api.post(
  "/auth/refresh",
  {
    refreshToken
  }
 );

 return response.data;
};