import { z } from "zod";

export const envSchema = z.object({
  VITE_API_URL: z.string(),
});
export type Env = z.infer<typeof envSchema>;

let env: Env;
try {
  env = envSchema.parse(import.meta.env);
} catch (error) {
  throw new Error(
    "Please provide the correct env vars as described in .env.example",
    {
      cause: error,
    },
  );
}

export { env };
