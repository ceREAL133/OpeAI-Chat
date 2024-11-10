import { Response, Request } from "express";
import { createStream, saveMessage } from "../instances/openAi.instance";

export const controller = async (req: Request, res: Response) => {
    const { userInput, userId } = req.body;

    try {
        const response = await createStream(userId, userInput)

        let assistantResponse = '';
        for await (const chunk of response) {
            const content = chunk.choices[0]?.delta?.content || '';
            assistantResponse += content;
            res.write(content); 
        }

        await saveMessage(userId, { role: 'assistant', content: assistantResponse });

    } catch (error) {
        console.error("Error creating chat completion:", error);
        res.status(500).send("Error generating response.");
    } finally {
        res.end();
    };
}