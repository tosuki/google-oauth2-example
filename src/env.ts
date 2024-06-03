import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string()
})

const environment = envSchema.parse(process.env)

export default environment
