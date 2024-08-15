
import { ChatVertexAI } from "@langchain/google-vertexai";


export const Gemini= new ChatVertexAI({
    
    apiKey:process.env.GOOGLE_API_KEY,
    model:"gemini-1.5-flash",
    temperature:0.5 //* Que tanto puede "imaginar" el modelo
});
//!Instanciamos una clase de ChatVertexAI, este va a ser nuestro modelo




///const respuesta = await StandAloneQuestionChain.invoke({
///    question: `Pregunta del input`
///})

