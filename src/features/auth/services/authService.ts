import axios from "axios";

import type { LoginFormData } from "../schemas/loginSchema";
import type { RegisterFormData } from "../schemas/registerSchema";

export const login = async (data: LoginFormData) => {
  const response = await axios.post(
    "http://localhost:4000/auth/login",
    data
  );

  return response.data;
};

export const register = async (data: RegisterFormData) => {
  const response = await axios.post(
    "http://localhost:4000/auth/register",
    data
  );

  return response.data;
};