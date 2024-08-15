import { ChatPromptTemplate } from "@langchain/core/prompts";
import {z} from "zod"
import { Gemini } from "../services/Gemini";

const SYSTEM_STRUC= `Solo basado en el historial:
{history}
Responde la pregunta del usuario lo mejor que se pueda`;

export const ESTRUCTURA_DELPROMPT = ChatPromptTemplate.fromMessages([
    ["system", SYSTEM_STRUC],
    ["human", "{question}"]
]);

const ConocerIntencion = z.object(
    {
        intention: z.enum ([`DESCONOCIDO`,`VENTAS`,`SALUDO`,`ADIOS`])
        .describe(`Categoriza la siguiente conversación y decide que intención tiene`)
    }
).describe(`Dado los siguientes productos, debes estructurarlos de la mejor manera, no alteres ni edites nada.`)

const llWithToolsCatchIntention = Gemini.withStructuredOutput(ConocerIntencion,
    {name: "ConocerIntención"}
)

export const ObtenerIntencion = async (text) => {
    try {
        const {intention} =await ESTRUCTURA_DELPROMPT.pipe(llWithToolsCatchIntention).invoke(
            {question: text,
                history: await history.getHistory(state)
            })
            return Promise.resolve(String(intention).toLocaleLowerCase())
    } catch (error) {
        console.log(error)
    }
    
}