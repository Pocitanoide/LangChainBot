import { addKeyword, EVENTS } from "@builderbot/bot";


export const FlowX= addKeyword(EVENTS.WELCOME).addAction(
    {capture:true}, 
    async (ctx, {flowDynamic}) => {
    

    }
)