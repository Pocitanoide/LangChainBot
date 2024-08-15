import { createFlowRouting } from "@builderbot-plugins/langchain"
import { EVENTS } from "@builderbot/bot"
import "dotenv/config"



export const BienvenidoGemini= createFlowRouting.
setKeyword(EVENTS.WELCOME)
.setIntentions({
    intentions: [`greeting`, `closure`],
    description: `Saludo: Si el usuario saluda,
     responde con un saludo. Adios, si el usuario se despide, dile adios`
}).
setAIModel({modelName: "gemini",
    args: {
        modelName:"gemini-1.5-flash",
        apikey:process.env.GEMINI_API_KEY,
        temperature:0.5}
}
)
.create({
    afterEnd(flow) {
        return flow.addAction((ctx, {state})=>
        {
            console.log(state.get("intencion"))
            state.clear()
        })
    },
}) 