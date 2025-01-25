import {
  QueryClientProvider as BaseProvider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return <BaseProvider client={queryClient}>{children}</BaseProvider>;
};
