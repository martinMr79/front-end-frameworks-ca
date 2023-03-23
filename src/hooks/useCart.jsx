import { create } from 'zustand'
import { useEffect } from 'react';
import { baseURL } from '../utilities/constants';


const useCartStore = create((set) => ({
    products: [],
    isLoading: false, 
    hasErrors: false, 
    cart: [],
    addProductToCart: (id) => 
      set((state) => ({ cart: [...state.cart, id ]})),
    clearCart: () => set({ cart: [] }),
    fetchProducts: async (url) => {
      console.log('Fetching products...'); // add console log here
      set(() => ({loading: true}))  
      try {
        const response = await fetch(url)
        const json = await response.json();
        console.log('Finished fetching products.'); // add console log here
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
  
    console.log('Products:', products); // add console log here
    console.log('Cart:', cart); // add console log here
  
    function addToCart(id) {
      console.log('Add to cart', id); 
      addProductToCart(id);
      
    }

    useEffect(() => {
      fetchProducts(baseURL );
    }, [fetchProducts]); // call fetchProducts when component mounts

    return { products, cart, fetchProducts, isLoading, hasErrors, addToCart, clearCart};
  }

export { useCart };