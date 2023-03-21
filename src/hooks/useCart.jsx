import { create } from 'zustand'


const useCartStore = create((set) => ({
    products: [],
    isLoading: false, 
    hasErrors: false, 
    addProductToCart: () => set((state) => ({ products: [...state.products, "Product"]})),
    clearCart: () => set({ products: [] }),
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
    const hasErrors = useCartStore((state) => state.isLoading); 

    function addToCart(id) {
        console.log("Add to cart", id); 
        addProductToCart();
        console.log(products); 
    }
    
    function clearCart() {
        console.log("Clear cart")
    }
    
    return { products, fetchProducts, isLoading, hasErrors, addToCart, clearCart};
}

export { useCart };