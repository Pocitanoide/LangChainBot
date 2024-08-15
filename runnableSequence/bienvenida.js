import { RunnableSequence } from "@langchain/core/runnables"
import { Gemini } from "../services/Gemini.js"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate } from "@langchain/core/prompts"



export const otraChain= RunnableSequence.from([
    {
        input: (initialInput)=> initialInput.input,
        chatHistory: (initialInput) => initialInput.chatHistory,
    },
    {
        chatPrompt: chatPrompt,
        model: Gemini,
    },
    new StringOutputParser(),
]);
//! Una RunnableSequence es un serie de Chains















