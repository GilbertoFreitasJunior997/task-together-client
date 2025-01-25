import { trpc, trpcClient } from "@/lib/trpc";
import { PropsWithChildren } from "react";
import { queryClient } from "./query-client-provider";

export const TRPCProvider = ({ children }: PropsWithChildren) => {
  return (
    <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}
    >
      {children}
    </trpc.Provider>
  );
};
