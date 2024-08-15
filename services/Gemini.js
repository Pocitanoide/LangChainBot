
import { ChatVertexAI } from "@langchain/google-vertexai";




export const Gemini= new ChatVertexAI({
    apiKey:process.env.GOOGLE_API_KEY,
    model:"gemini-1.5-flash",
    temperature:0.5 //* Que tanto puede "imaginar" el modelo
});





///const respuesta = await StandAloneQuestionChain.invoke({
///    question: `Pregunta del input`
///})
//! Al invocar a "StandAloneQuestionChain, ingresamos la pregunta
//! Esta pregunta se vuelve una una StandAloneQuestion"
//!Las StandAloneQuestion usan menos tokens porque son mas claras y
//!directas, lo que facilita respuestas rapidas y precisas sin
//!necesidad de mantener contexto adicional. Con esto conseguimos
//! hacer una query a la base de datos vectorialsolo de 
//! los chunks de informacion que contengan algo importante  
