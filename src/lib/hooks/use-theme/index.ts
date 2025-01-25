import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UseThemeProps } from "./types";

export const useTheme = create<UseThemeProps>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "theme",
    },
  ),
);
