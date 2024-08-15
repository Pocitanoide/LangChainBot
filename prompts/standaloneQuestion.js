import { PromptTemplate } from "@langchain/core/prompts"
import { ConvertirAStandAloneQuestionTemplate } from "../templates/standAloneQuestion"

export const ConvertirAStandAloneQuestionTemplate = `Convierte la Pregunta 
en una StandaloneQuestion. Pregunta: {Pregunta} StandAloneQuestion:`
//* Una StandAloneQuestion Es una pregunta que se plantea de forma independiente
//* sin necesidad de contexto adicional para entenderla o responderla.

export const StandAloneQuestionPrompt= PromptTemplate.fromTemplate(ConvertirAStandAloneQuestionTemplate)
//* Este Prompt convierte una pregunta y la convierte en una Standalone question
