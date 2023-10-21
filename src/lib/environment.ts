import { z } from 'zod';

const envSchema = z.object({
  'X-RAPID-API-KEY': z.string(),
  'X-RAPID-API-HOST': z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
