import { create } from 'zustand'
import { useEffect } from 'react';
import { baseURL } from '../utilities/constants';

const useCartStore = create((set) => ({
  products: [],
  isLoading: false, 
  hasErrors: false, 
  cart: [],
  setCart: (newCart) => set({ cart: newCart }), 
  addProductToCart: (id) =>
    set((state) => {
      const selectedProduct = state.products.find((product) => product.id === id);
      console.log('Selected Product:', selectedProduct);
      return { cart: [...state.cart, id] };
    }),
  clearCart: () => set({ cart: [] }),
  fetchProducts: async (url) => {
   
    set(() => ({loading: true}))  
    try {
      const response = await fetch(url)
      const json = await response.json();
      
      set((state) => ({ products: (state.products = json), isLoading: false}))
    } catch(error) {
      set(() => ({hasErrors: true, isLoading: false}))   
    }
  }
}));

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart); 
  const products = useCartStore((state) => state.products); 
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const isLoading = useCartStore((state) => state.isLoading); 
  const hasErrors = useCartStore((state) => state.hasErrors); 
  const cart = useCartStore((state) => state.cart); 
  const clearCart = useCartStore((state) => state.clearCart); 
  const setCart = useCartStore((state) => state.setCart); 
  
  function addToCart(id) {

    addProductToCart(id);
  }

  useEffect(() => {
    fetchProducts(baseURL);
  }, [fetchProducts]); 

  return { products, cart, fetchProducts, isLoading, hasErrors, addToCart, clearCart, setCart };
}

export { useCart };