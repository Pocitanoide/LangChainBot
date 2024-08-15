import { StandAloneQuestionPrompt } from "../prompts/standaloneQuestion"
import { Gemini } from "../services/Gemini"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { retriever } from "../utils/retriever/retriever"
export const StandAloneQuestionChain= StandAloneQuestionPrompt.pipe(Gemini).pipe(new StringOutputParser()).pipe(retriever)
