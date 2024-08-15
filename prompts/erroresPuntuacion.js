import { PromptTemplate } from "@langchain/core/prompts"
import { CorregirErroresPuntuacionTemplate } from "../templates/corregirErroresPuntuacion.js"

export const ErroresPuntuacionPrompt= PromptTemplate.fromTemplate(CorregirErroresPuntuacionTemplate)
//*

