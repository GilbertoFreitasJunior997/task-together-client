import { themes } from "./consts";

export type Theme = (typeof themes)[number] | "system";

export type UseThemeProps = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};
