import { PromptTemplate } from "@langchain/core/prompts"
import { CorregirErroresOrtograficosTemplate } from "../templates/corregirErroresOrtograficos.js"

export const ErroresOrtograficosPrompt= PromptTemplate.fromTemplate(CorregirErroresOrtograficosTemplate)
//*