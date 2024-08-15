import { addKeyword, EVENTS } from "@builderbot/bot";
import { otraChain } from "../runnableSequence/bienvenida.js";

export const langchain = addKeyword(EVENTS.WELCOME).
addAction({capture:true}, 
    async (ctx, {flowDynamic,state}) => {
        try {
            let historial=[]
        console.log("Si funciona nodemon")
        historial.concat(["Usuario:", ctx.body])
        const respuesta= await otraChain.invoke({
            input: ctx.body,
            chatHistory: historial
        })
        console.log(respuesta)
        historial.concat(["Sistema:", respuesta])
        await state.update({historial: historial})
        await flowDynamic(respuesta)
        } catch (error) {
            console.log(error)
        }
        
    }
)