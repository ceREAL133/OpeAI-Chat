import dotenv from 'dotenv';
dotenv.config();

export const constants = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    PORT: process.env.PORT
}