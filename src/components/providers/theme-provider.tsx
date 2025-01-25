import { useTheme } from "@/lib/hooks/use-theme";
import { themes } from "@/lib/hooks/use-theme/consts";
import { Theme } from "@/lib/hooks/use-theme/types";
import { PropsWithChildren, useEffect } from "react";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();

  useEffect(() => {
    let resolvedTheme: Theme = theme;

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");

      if (media.matches) {
        resolvedTheme = "dark";
      }
    }

    const root = document.documentElement;

    root.classList.remove(...themes);
    root.classList.add(resolvedTheme);
  }, [theme]);

  return children;
};
