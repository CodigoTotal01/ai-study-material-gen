import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    dialect: "postgresql",
    schema: "./configs/schema.js",
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_PUKj8JAM9bYG@ep-bitter-sea-a5kxoh65-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
    },
})