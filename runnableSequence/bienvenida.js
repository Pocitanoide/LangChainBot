import { RunnableSequence } from "@langchain/core/runnables"
import { Gemini } from "../services/Gemini.js"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate } from "@langchain/core/prompts"
const PromptDelBot= SystemMessagePromptTemplate.fromTemplate(
    `
    Eres un asistente virtual en WhatsApp. Tu tarea es entender la intención del usuario y responder adecuadamente.
Posibles intenciones:
1. Saludo
2. Despedida
3. Consulta de información
4. Solicitud de ayuda
5. Queja
6. Otra
7. Indefinido

Responde de manera amigable y concisa, manteniendo el tono de una conversación de Whatsapp`
);

const PromptDelUsuario= HumanMessagePromptTemplate.fromTemplate("{input}")

const chatPrompt = ChatPromptTemplate.fromMessages([PromptDelBot, PromptDelUsuario])

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
















