import { z } from 'zod';

const envSchema = z.object({
  'NEXT_PUBLIC_X-RAPID-API-KEY': z.string(),
  'NEXT_PUBLIC_X-RAPID-API-HOST': z.string(),
});

export const env = envSchema.parse(process.env);
