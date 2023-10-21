import { z } from 'zod';

const envSchema = z.object({
  X_RAPID_API_KEY: z.string(),
  X_RAPID_API_HOST: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
