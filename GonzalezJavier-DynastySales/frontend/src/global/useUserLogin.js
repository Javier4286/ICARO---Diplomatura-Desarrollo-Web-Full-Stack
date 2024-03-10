import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserLogin = create(
  persist(
    (set) => ({
      isLogged: false,
      isAdmin: false,
      user: {},
      setIsLogged: (isLogged) => set(() => ({ isLogged: isLogged })),
      setIsAdmin: (isAdmin) => set(() => ({ isAdmin: isAdmin })),
      setUser: (user) =>
        set(() => ({
          user: user.data,
        })),
      clearUser: () =>
        set(() => ({ isLogged: false, isAdmin: false, user: {} })),
    }),
    {
      name: "user-login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserLogin;
