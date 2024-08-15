import { PromptTemplate } from "@langchain/core/prompts"

export const CorregirErroresPuntuacionTemplate= `Dada una oración, corrige los errores de puntuación en la gramatica donde sea necesario.
oracion:{oracion}
Oración corregida:`

export const ErroresPuntuacionPrompt= PromptTemplate.fromTemplate(CorregirErroresPuntuacionTemplate)
//* Con este prompt vamos a corregir los errores de puntuacion del input del usuario

