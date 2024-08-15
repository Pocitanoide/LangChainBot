import { PromptPregunta } from "../prompts/pregunta"
import { Gemini } from "../services/Gemini"


export const ChainPregunta = PromptPregunta.pipe(Gemini)
//! Le pasamos el Prompt al LLM con el prompt que previamente definimos,
///! con el método "pipe"


export const response = await ChainPregunta.invoke({Pregunta: `Que hora es?`})
//* Invocamos la Chain, por ende, le pasamos el prompt al modelo, 
//* y aguardamos su respuesta
//! Se le puede pasar un objeto, que se colocaria en
//! La punta de la cadena, normalmente este objeto consiste en
//! {variableQueNecesitaLaChain: string}

//! ChainPregunta es un metodo asincrono, asi 
//! que debera siempre tener un await detras