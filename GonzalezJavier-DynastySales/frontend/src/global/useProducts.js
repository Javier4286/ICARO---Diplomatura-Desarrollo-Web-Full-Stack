import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      setCart: (newCart) => set(() => ({ cart: newCart })),
      clearCart: () => set(() => ({ cart: [] })),
      addProduct: (product) => {
        const cart = get().cart;
        const index = cart.findIndex((p) => p.id === product.id);
        if (index === -1) {
          product.Quantity = 1;
          set({ cart: [...cart, product] });
          return;
        }
        cart[index].Quantity += 1;
        set({ cart });
      },
      removeProduct: (productId) => {
        const cart = get().cart;
        const updatedCart = cart.filter((product) => product.id !== productId);
        set({ cart: updatedCart });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCart;
