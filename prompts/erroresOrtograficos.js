import { PromptTemplate } from "@langchain/core/prompts"

export const CorregirErroresOrtograficosTemplate= 
`Dada una oración, resuelve los errores ortograficos
 donde sea necesario.
oracion:{oracion}
Oración corregida:`;


export const ErroresOrtograficosPrompt= PromptTemplate.fromTemplate(CorregirErroresOrtograficosTemplate)
//*Con este prompt, Vamos a corregir los errores ortograficos del input del usuario