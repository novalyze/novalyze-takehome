import { userDetails } from "../constant/signInSignUp";
import { URL } from "../constant/url";
import apiConfig from "./config";

export interface LoginResponse {
  token: string;
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  console.log(email, password);
  try {
    const response = await fetch(URL.login, {
      method: "POST",
      headers: apiConfig.headers,
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials. Please try again.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred");
  }
};

export const registerUser = async (email: string, password: string): Promise<LoginResponse> => {
  console.log(email, password);
  try {
    const response = await fetch(URL.register, {
      method: "POST",
      headers: apiConfig.headers,
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials. Please try again.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred");
  }
};
