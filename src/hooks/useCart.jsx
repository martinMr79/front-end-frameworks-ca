import { create } from 'zustand'

const useCartStore = create((set) => ({
  products: [],
  addProductToCart: () => set((state) => ({ products: [...state.products, "Product"]})),
  clearCart: () => set({ products: [] }),
  addAllProducts: (productsList) => set({ products: productsList}) 
}))

function useCart() {
    const addProductToCart = useCartStore((state) => state.addProductToCart); 
    const products = useCartStore((state) => state.products); 
    
    function addToCart(id) {
        console.log("Add to cart", id); 
        addProductToCart();
        console.log(products); 
    }
    
    function clearCart() {
        console.log("Clear cart")
    }
    
    function setProducts() {
        // 
    }
    
    return { products, addToCart, clearCart, setProducts };
}

export { useCart };