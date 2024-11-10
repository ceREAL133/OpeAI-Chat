import OpenAI from "openai";
import { constants } from "../constants";
import client from "./redis";

const openAiClient = new OpenAI({
    apiKey: constants.OPENAI_API_KEY,
});

async function getChatHistory(userId: string): Promise<any[]> {
    const history = await client.lRange(`chat:${userId}`, 0, -1);
    return history.map((item) => JSON.parse(item));
}

export async function saveMessage(userId: string, message: any) {
    await client.rPush(`chat:${userId}`, JSON.stringify(message));
}

export async function createStream(userId: string, userInput: string) {   
    const chatHistory = await getChatHistory(userId);
        
    chatHistory.push({ role: 'user', content: userInput });

    const stream = await openAiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: chatHistory, 
    });

    await saveMessage(userId, { role: 'user', content: userInput });

    return stream;
}
