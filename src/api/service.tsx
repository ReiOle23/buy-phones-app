import { useEffect } from "react";
import axios from "axios";
import { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "https://itx-frontend-test.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async (): Promise<any> => {
  try {
    const response = await apiClient.get(`/product`);
    return response.data;
  } catch (error) {
    console.error("Failed to get products data", error);
    throw error;
  }
};

export const getDetailProduct = async ({productId}): Promise<any> => {
  try {
    const response = await apiClient.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to get products data", error);
    throw error;
  }
};