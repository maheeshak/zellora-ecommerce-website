import React, { createContext } from 'react';
import { products } from '../../assets/data';

export const ShopContext = createContext({ products });

const ShopContextProvider = (props: any) => {
  const value = { products }; // Directly assign products as value
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
