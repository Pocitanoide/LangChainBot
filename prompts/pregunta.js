import { PromptTemplate } from "@langchain/core/prompts"
import { TemplateRespuesta } from "../templates/respuesta.js"


export const TemplatePregunta= 
`Genera una respuesta acertiva y 
concreta de la pregunta: {Pregunta}`
///# Es un string que sirve de plantilla, se coloca entre {} la
///# Variable que se le quiera pasar.

export const PromptPregunta= PromptTemplate.fromTemplate(TemplatePregunta)
///! Instanciamos una nueva clase de PromptTemplate, con su método "fromTemplate"
///! que recibe por parametro un String, la cual deberia recibir una plantilla.