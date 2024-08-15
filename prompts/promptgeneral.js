import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { Gemini } from "../services/Gemini";

const messageHistories = {};

const prompt = ChatPromptTemplate.fromMessages(
    [
    [
        "system",
        `You are a helpful assistant who remembers all details the user shares with you.`,
      ],
      ["placeholder", "{chat_history}"],
      ["human", "{input}"],
    ]
)

const chain =prompt.pipe(Gemini);

const withMessageHistory= new RunnableWithMessageHistory(
    {
        runnable: chain,
        getMessageHistory:async (sessionId) => {
            if (messageHistories[sessionId]===undefined){
                messageHistories[sessionId]= new InMemoryChatMessageHistory();    
            }
            return messageHistories[sessionId];
        },
        inputMessagesKey:"input",
        historyMessagesKey:"chat_history",
    }
)