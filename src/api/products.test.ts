import axios from 'axios';
import { fetchAll, fetchProduct } from './products';
import { vi, describe, it, expect, Mock } from 'vitest';
import { apiBaseUrl } from '@/config';

vi.mock('axios');

describe('API Functions', () => {
  it('fetchAll calls the correct URL', async () => {
    (axios.get as Mock).mockResolvedValue({ data: [] });
    await fetchAll();
    expect(axios.get).toHaveBeenCalledWith(`${apiBaseUrl}/product`);
  });

  it('fetchProduct calls the correct URL with productId', async () => {
    const productId = '123';
    (axios.get as Mock).mockResolvedValue({ data: {} });
    await fetchProduct(productId);
    expect(axios.get).toHaveBeenCalledWith(`${apiBaseUrl}/product/${productId}`);
  });
});
