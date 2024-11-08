import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchAll } from '@/api/products';
import { Product } from '@/types';

const useProducts = (): {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  products: Product[];
  error: Error | null;
  isLoading: boolean;
} => {
  const [filter, setFilter] = React.useState<string>('');
  const { data: products, error, isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchAll
  });

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];
    if (!filter) return products;
    const reg = new RegExp(filter, 'i');
    return products.filter((product) =>
      reg.test(product.name) || reg.test(product.binomialName)
    );
  }, [products, filter]);

  return {
    filter,
    setFilter,
    products: filteredProducts,
    error,
    isLoading
  };
};

export default useProducts;