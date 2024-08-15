import { ChatOpenAI } from "@langchain/openai";


export const ChatGPT = new ChatOpenAI(
    {   
        apiKey:process.env.OPEN_IA_API_KEY,
        model:"chat",
        temperature:0.5 ,//* Que tanto puede "imaginar" modelo
    }
)
