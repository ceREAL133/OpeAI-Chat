# AI Chat Application

This is a simple AI-powered chat application that integrates OpenAI’s GPT-3.5-turbo model to provide a dynamic, conversational interface. It allows users to send messages to an AI model, which responds in real-time, creating a seamless chat experience. The application also remembers the context of the conversation, simulating an ongoing session across multiple interactions.

## Features

- **Real-time Chat**: The AI responses are streamed back in real-time, providing an engaging experience where the conversation unfolds naturally.
- **Chat History**: The app remembers past messages within a session, enabling the AI to respond with context.
- **Backend with Redis**: The chat history is stored in Redis, ensuring that the conversation context is preserved across messages.

## Tech Stack

- **Frontend**: React (with TypeScript)
  - Fetch API for streaming data from the server
- **Backend**: Node.js with Express
  - OpenAI API (GPT-4) for generating AI responses
  - Redis for storing chat history and user context
- **Database**: Redis (for storing user chat sessions)

[Watch the video](https://vimeo.com/1028188166)