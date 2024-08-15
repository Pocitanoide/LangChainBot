import { PromptTemplate } from "@langchain/core/prompts"
import { ConvertirAStandAloneQuestionTemplate } from "../templates/standAloneQuestion"
export const StandAloneQuestionPrompt= PromptTemplate.fromTemplate(ConvertirAStandAloneQuestionTemplate)
//* Este Prompt convierte una pregunta y la convierte en una Standalone question
