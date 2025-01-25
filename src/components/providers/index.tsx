import { PropsWithChildren } from "react";
import { QueryClientProvider } from "./query-client-provider";
import { ThemeProvider } from "./theme-provider";
import { TRPCProvider } from "./trpc-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <TRPCProvider>
      <QueryClientProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </TRPCProvider>
  );
};
