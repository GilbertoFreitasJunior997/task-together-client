import { trpc, trpcClient } from "@/lib/trpc";
import { PropsWithChildren } from "react";
import { QueryClientProvider } from "./query-client-provider";
import { TRPCProvider } from "./trpc-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <TRPCProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </TRPCProvider>
  );
};
