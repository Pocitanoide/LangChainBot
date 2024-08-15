import { PromptTemplate } from "@langchain/core/prompts"
import { TemplateRespuesta } from "../templates/respuesta.js"
export const PromptPregunta= PromptTemplate.fromTemplate(TemplateRespuesta)
///! Instanciamos una nueva clase de PromptTemplate, con su método "fromTemplate"
///! que recibe por parametro un String, la cual deberia recibir una plantilla.