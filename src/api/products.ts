import axios from 'axios';
import { apiBaseUrl } from '@/config';
import { ProductsApiResponse, ProductApiResponse } from '@/types';

export const fetchAll = async () => {
  const { data } = await axios.get<ProductsApiResponse>(`${apiBaseUrl}/product`);
  return data;
};

export const fetchProduct = async (productId: string) => {
  const { data } = await axios.get<ProductApiResponse>(`${apiBaseUrl}/product/${productId}`);
  return data;
};
